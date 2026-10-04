# WebGL

Open this file only after the direction is Scroll film, Object cinema, or a
Material field that CSS could not make. A canvas you cannot justify will cost
the usability score: that weight is 30%.

## Decision

Answer out loud:

1. What does the visitor understand by dragging or scrubbing that a photograph
   sequence would not show?
2. What is on screen if WebGL fails, the script is blocked, or the GPU is weak?

If (1) is "it looks expensive", stop. Use photography. If (2) is "a blank
div", stop and design the poster.

## Stack

`npm install three @react-three/fiber @react-three/drei`

Pins that matched on 2026-10-04: `three@0.186.1`, `@react-three/fiber@9.8.1`,
`@react-three/drei@10.7.9`. WebGL2 via Three's default renderer. Do not make
WebGPU the only path. Three's node materials (TSL) can compile to both; use
that only when you have actually rendered the WebGL fallback.

No Babylon, no Spline embed, no iframe of someone else's experiment.

## Mount (this is the usual blank page)

R3F touches `window` on import. Never import the scene from a route module
that runs on the server. Client-only, after hydration:

```tsx
import { lazy, Suspense, useEffect, useState } from "react";

const Scene = lazy(() => import("./scene"));

export function HeroStage({ poster }: { poster: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="relative min-h-[100svh]">
      <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      {ready && (
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      )}
    </div>
  );
}
```

The `<img>` is the LCP and the no-JS fallback. The canvas is
`position: absolute; inset: 0` and `aria-hidden`. Words stay in HTML, above
the canvas, with a scrim baked into the poster if needed.

`scene.tsx` holds `<Canvas dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: "high-performance" }} frameloop="demand">`.
On `(pointer: coarse)`, cap `dpr` at 1.25. Call `invalidate()` when something
actually changes, or set `frameloop="always"` only while the signature is in
view.

## Budget

- Pause when the stage leaves the viewport (`IntersectionObserver` →
  `frameloop="demand"` and stop the clock).
- Dispose geometries, materials, and the renderer on unmount.
- Lights: a key, a fill, an ambient. One contact shadow if the object sits on
  a floor. No cascaded shadow maps "because realism".
- Do not fetch an HDRI from a third-party CDN. If you need an environment,
  ship a small file from `public/` or use lights only.
- Postprocessing: none by default. One pass (a gentle vignette or grain in
  CSS on top of the canvas) is cheaper than an effects composer. Bloom is how
  mid-range phones fall over.
- Continuous motion (Material field, idle turntable) pauses under
  `prefers-reduced-motion` on a composed still frame.
- Models: one glb, Draco or Meshopt if the file would otherwise pass 2MB.
  A procedural mesh that reads clearly beats a 15MB sculpt. No glb you do not
  have rights to.
- Target: the hero stays interactive while the main thread also handles Lenis.
  If a 4× CPU slowdown in the browser drops the stage under ~30fps, simplify
  the scene or fall back to the poster on that class of device
  (`navigator.hardwareConcurrency` is a hint, the frame time is the decision).

## Scroll film

Drive the camera from scroll progress 0–1, not from a raw wheel delta. With
Lenis, read progress from ScrollTrigger's scrubbed timeline and write it to a
ref the scene reads inside `useFrame`. Do not call React `setState` per frame.

```tsx
useFrame(() => {
  const t = progress.current; // 0..1, written from ScrollTrigger
  camera.position.lerpVectors(a, b, t);
  camera.lookAt(0, 1.2, 0);
});
```

Bookmarks are chapters: at 0.25 the type changes, the camera is already
there. Keep the path short enough that a fast flick still lands on a readable
frame (the lerp is in the camera, so a jump does not pop).

## Object cinema

OrbitControls with `enablePan={false}`, damped, and a limited polar angle so
the object cannot be rolled into a nonsense view. Auto-rotate only until the
first pointer down, then stop forever for that session. Changing a material
is a state update, then `invalidate()`.

Show a text hint ("Drag") that removes itself after the first input. On
touch, the hint says drag, and the page scroll must not fight the gesture:
the stage calls `stopPropagation` on pointer move only while the contact
started on the canvas, and the page still scrolls when the gesture began on
type.

## Image displacement (Archive, optional)

A plane per image is usually too many. One shared treatment: on pointer
devices, the hovered frame samples its texture in a tiny fragment program
(displacement from cursor, a few pixels of chromatic split). Everywhere else,
the `<img>` is the only element. If that shader is the first WebGL you have
written this session and time is short, use a CSS `scale(1.04)` inside the
frame instead. A broken shader is worse than a quiet hover.

## Failure

- WebGL context lost or unavailable: keep the poster, hide the canvas.
- Reduced motion: poster plus the end-state copy. No pin that traps them.
- The scene throws: an error boundary around the stage, poster remains, the
  rest of the page still works. Do not let a shader take down the document.
