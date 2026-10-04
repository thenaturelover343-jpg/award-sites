#!/usr/bin/env node
/**
 * Download commercially licensed photos from Openverse. No API key.
 *
 *   node fetch-photos.mjs "porcelain cup, window light" --count 6 --out public/media --aspect wide
 *
 * aspect: wide | tall | square   (optional)
 * Writes the images plus credits.json and CREDITS.md. Does not hotlink.
 * CC-BY / BY-SA rows set credit_required: true — put those lines in the footer.
 * Openverse ANDs every word. If a long query misses, this retries without the
 * aspect filter, then with only the first two words.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const UA = "award-sites-skill/1.0 (local agent; openverse)";

function parseArgs(argv) {
  const out = { query: [], count: 6, dir: "public/media", aspect: "", help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--count") out.count = Number(argv[++i]);
    else if (a === "--out") out.dir = argv[++i];
    else if (a === "--aspect") out.aspect = argv[++i];
    else if (a === "--help" || a === "-h") out.help = true;
    else out.query.push(a);
  }
  out.query = out.query.join(" ").trim();
  if (!Number.isFinite(out.count) || out.count < 1) out.count = 6;
  out.count = Math.min(out.count, 12);
  return out;
}

function slug(value) {
  return (
    String(value)
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 42) || "photo"
  );
}

function extFrom(url, type) {
  let ext = "";
  try {
    ext = extname(new URL(url).pathname).toLowerCase();
  } catch {
    ext = "";
  }
  if (ext === ".jpeg") ext = ".jpg";
  if ([".jpg", ".png", ".webp"].includes(ext)) return ext;
  if (type.includes("png")) return ".png";
  if (type.includes("webp")) return ".webp";
  return ".jpg";
}

async function search(query, aspect, page) {
  const url = new URL("https://api.openverse.org/v1/images/");
  url.searchParams.set("q", query);
  url.searchParams.set("license_type", "commercial");
  url.searchParams.set("size", "large");
  url.searchParams.set("mature", "false");
  url.searchParams.set("page_size", "20");
  url.searchParams.set("page", String(page));
  if (aspect) url.searchParams.set("aspect_ratio", aspect);
  const res = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": UA },
  });
  if (!res.ok) throw new Error(`Openverse HTTP ${res.status}`);
  const data = await res.json();
  return data.results ?? [];
}

async function download(url, attempt = 0) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "image/avif,image/webp,image/*,*/*" },
    redirect: "follow",
  });
  if (res.status === 429 && attempt < 2) {
    await new Promise((resolve) => setTimeout(resolve, 900 * (attempt + 1)));
    return download(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const type = res.headers.get("content-type") || "";
  if (type && !type.startsWith("image/")) throw new Error(type);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 40_000) throw new Error("too-small");
  if (buf.length > 12_000_000) throw new Error("too-large");
  return { buf, type };
}

async function collect(query, aspect, count) {
  const credits = [];
  const seen = new Set();
  for (let page = 1; page <= 4 && credits.length < count; page++) {
    const results = await search(query, aspect, page);
    if (!results.length) break;
    for (const hit of results) {
      if (credits.length >= count) break;
      if (!hit?.url || seen.has(hit.url) || hit.mature) continue;
      seen.add(hit.url);
      const width = Number(hit.width || 0);
      if (width && width < 1400) continue;
      try {
        const { buf, type } = await download(hit.url);
        const ext = extFrom(hit.url, type);
        const file = `${String(credits.length + 1).padStart(2, "0")}-${slug(hit.title || query)}${ext}`;
        credits.push({
          file,
          buf,
          title: hit.title || "",
          creator: hit.creator || "Unknown",
          license: String(hit.license || ""),
          license_version: hit.license_version || "",
          license_url: hit.license_url || "",
          source_url: hit.foreign_landing_url || hit.url,
          attribution: hit.attribution || "",
          credit_required: String(hit.license || "").startsWith("by"),
          width: hit.width || null,
          height: hit.height || null,
        });
        console.log(`ok ${hit.width || "?"}×${hit.height || "?"} ${hit.license} — ${hit.title || query}`);
      } catch (error) {
        console.error(`skip (${error.message})`);
      }
    }
  }
  return credits;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || !args.query) {
    console.log(
      'Usage: node fetch-photos.mjs "<query>" [--count 6] [--out public/media] [--aspect wide|tall|square]',
    );
    process.exit(args.help ? 0 : 1);
  }
  if (args.aspect && !["wide", "tall", "square"].includes(args.aspect)) {
    console.error("--aspect must be wide, tall, or square");
    process.exit(1);
  }

  await mkdir(args.dir, { recursive: true });

  let credits = await collect(args.query, args.aspect, args.count);
  if (!credits.length && args.aspect) {
    console.error("Nothing at that aspect ratio; retrying any ratio.");
    credits = await collect(args.query, "", args.count);
  }
  const words = args.query.split(/\s+/).filter(Boolean);
  if (!credits.length && words.length > 2) {
    const shorter = words.slice(0, 2).join(" ");
    console.error(`Nothing saved; retrying shorter query "${shorter}".`);
    credits = await collect(shorter, "", args.count);
  }

  if (!credits.length) {
    console.error("No photos saved. Try a more concrete query.");
    process.exit(2);
  }

  for (const credit of credits) {
    await writeFile(join(args.dir, credit.file), credit.buf);
    delete credit.buf;
    console.log(`saved ${credit.file}`);
  }

  await writeFile(join(args.dir, "credits.json"), JSON.stringify(credits, null, 2));
  const lines = credits.map((c) =>
    c.credit_required
      ? `- ${c.file}: "${c.title}" by ${c.creator} — ${c.license} ${c.license_version} — ${c.source_url}`
      : `- ${c.file}: "${c.title}" by ${c.creator} — ${c.license} (credit optional) — ${c.source_url}`,
  );
  await writeFile(
    join(args.dir, "CREDITS.md"),
    `# Photo credits\n\nQuery: ${args.query}\n\nFetched from Openverse, commercial licenses only.\n\n${lines.join("\n")}\n`,
  );
  const required = credits.filter((c) => c.credit_required).length;
  console.log(`\n${credits.length} file(s) in ${args.dir}. Footer credits required: ${required}.`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
