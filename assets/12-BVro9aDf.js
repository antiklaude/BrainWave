var e=`---
title: "Basic Compositing for Render Output"
duration: 90
level: 4
levelLabel: "LVL 4"
levelColor: "#f472b6"
videos:
  - id: "4zoixL45nvI"
    title: "Blender 5 Compositing for Beginners — Grant Abbitt"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "How do you enable the Compositor in Blender?"
      options: ["Go to Render Properties and click 'Use Compositor'", "Switch the editor to Compositor, check 'Use Nodes', and render the scene — the Render Layers node receives the rendered image", "Open the Image Editor and add nodes", "Enable it in Preferences → Add-ons"]
      answer: 1
      explanation: "Switch any panel to the Compositor editor type, check the 'Use Nodes' checkbox. The Render Layers node automatically feeds the latest render result. Nodes you add between Render Layers and the Composite output will process the image."
    - type: multiple-choice
      question: "What does the Color Balance node allow you to do?"
      options: ["Balance the polygon count of the scene", "Adjust the lift (shadows), gamma (midtones), and gain (highlights) of the render — the standard colour grading tool", "Set the white balance of a texture", "Balance the brightness of multiple lights"]
      answer: 1
      explanation: "Color Balance (Lift/Gamma/Gain) is the primary colour grading node. Lift affects shadows, Gamma affects midtones, Gain affects highlights. Shift all three slightly warm to create a golden hour feel, or shift shadows cool + highlights warm for cinematic contrast."
    - type: fill-blank
      question: "The Compositor node that reduces grain from a Cycles render without re-rendering is called the ___ node"
      answer: "Denoise"
      explanation: "The Denoise node in the Compositor uses AI denoising (Intel OIDN) on the rendered image. It requires the Denoising Data render pass to be enabled in View Layer Properties. It's the fastest way to clean up a grainy Cycles render without increasing samples."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Even a great render benefits from post-processing. Colour grading adds mood. Removing grain saves render time. Adding subtle glow on bright areas adds realism. The Blender Compositor is a non-destructive post-processing pipeline — adjustments are applied after rendering without touching the 3D scene. This session covers just the essential nodes that improve 90% of renders.

- **Enabling the Compositor** — switch any editor panel to the Compositor type. Check "Use Nodes" in the header. You'll see a Render Layers node (inputs your render) connected to a Composite node (outputs the processed image). Everything you add between these two processes the render.
- **Render Layers node** — provides access to the rendered image plus separate render passes (Direct, Indirect, Shadow, Normal, Depth, etc.). Enable extra passes in View Layer Properties. For basic compositing, you only need the Image output.
- **Viewer node** — add a Viewer node and connect any output to see it in the Image Editor while compositing. Essential for seeing what each node is doing.
- **Color Balance node** (Add → Color → Color Balance) — the primary colour grading node:
  - *Lift* — adjusts shadows. Shift blue = cooler shadows.
  - *Gamma* — adjusts midtones.
  - *Gain* — adjusts highlights. Shift orange = warmer highlights.
  - Classic cinematic look: cool blue shadows + warm orange highlights.
- **Glare node** (Add → Filter → Glare) — adds streaks or glow on the brightest pixels. Type = Streaks for lens-flare-style light streaks, Fog Glow for soft bloom. Threshold controls which pixels are affected (lower = more pixels glow).
- **Denoise node** (Add → Filter → Denoise) — AI-powered denoising in the Compositor. Requires: enable Denoising Data in View Layer Properties before rendering. Much faster than re-rendering with more samples.
- **Output node (File Output)** — renders directly to file with compositing applied. Set format (PNG, EXR) and output path. Useful for batch renders.

> **Key insight:** Less is more in compositing. A slight colour grade, a touch of glare, and denoising will improve a render significantly. Overdoing glare or saturation looks amateurish. The best compositing is invisible — the viewer just feels the image looks better without knowing why.

## Phase 2 — Do (40 min)

Composite the crate render from Sessions 07–11:
1. Render the Cycles version of the crate scene (F12) if you haven't already
2. Switch an editor panel to Compositor, check Use Nodes
3. Add the following node chain:
   - Render Layers → Denoise → Color Balance → Glare → Composite
4. Denoise: connect Image + Denoising Albedo + Denoising Normal outputs from Render Layers (enable Denoising Data in View Layer Properties first, then re-render)
5. Color Balance: shift the Lift slightly cool (blue), Gain slightly warm (orange-yellow) for cinematic contrast
6. Glare: Type = Streaks, Threshold = 0.8, Iterations = 3. Adjust until specular highlights have subtle streaks
7. Add a Viewer node alongside the Composite output to preview the result in real time
8. Save the composited result: Image Editor → Image → Save As

## Review

What is the difference between enabling the Denoiser in Render Properties vs using the Denoise node in the Compositor? When would you prefer one over the other?
`;export{e as default};