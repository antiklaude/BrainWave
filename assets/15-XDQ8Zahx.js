var e=`---
title: "Final Animation Project"
duration: 120
level: 5
levelLabel: "LVL 5"
levelColor: "#a78bfa"
videos:
  - id: "geE8Sy97CQE"
    title: "Beginners Guide to Animation in Blender 4 — Grant Abbitt"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "When planning a short 3D animation, what should you define before opening Blender?"
      options: ["The exact render settings and resolution", "The subject, the story beat (what happens), and the camera angle — because every other decision flows from these", "The lighting setup and materials", "The number of keyframes"]
      answer: 1
      explanation: "Planning first prevents wasted time in Blender. Even a 10-second animation needs: what is the subject, what happens (even one event), and where is the camera. Without these, you're making decisions that cost hours of rework."
    - type: multiple-choice
      question: "What is the recommended frame rate for a smooth animation render?"
      options: ["12 fps", "24 fps (film standard) or 30 fps (broadcast/web standard)", "60 fps for all purposes", "Frame rate doesn't matter for 3D animation"]
      answer: 1
      explanation: "24 fps is the film standard and matches the motion blur characteristics audiences are accustomed to for cinematic work. 30 fps is standard for TV and web video. 60 fps is used for games and some sports video. For most 3D animation projects, 24 fps is the right choice."
    - type: fill-blank
      question: "The Blender output setting that controls where rendered frames are saved is found in Render Properties under ___"
      answer: "Output"
      explanation: "Render Properties → Output section. Set the file path (where frames save), file format (PNG for image sequences, FFmpeg video for direct video output), and resolution. For animation, saving as PNG image sequence is safer — if a render crashes, you keep completed frames."
---

## Phase 1 — Plan (30 min)

**Why this matters:** Every skill you've built in this course — modelling, UV unwrapping, materials, lighting, rendering, compositing, keyframes, rigging — converges here. A finished 3D animation, even a simple 10-second one, is a complete portfolio piece that demonstrates all of these skills working together. The planning phase is not optional: every minute spent planning saves five minutes of rework in Blender.

**Pre-production checklist (do this before opening Blender):**
- **Subject** — what is animated? A mechanical device? A character walking? An abstract object? Pick something you can model reasonably well.
- **Story beat** — what happens in 10 seconds? Even the simplest story: "a ball rolls in, bounces once, settles." That's a story. It has a beginning, middle, end.
- **Camera** — where is the camera? What angle tells the story best? Sketch it (even on paper).
- **Duration plan** — break your 10 seconds into beats:
  - 0–3s: introduction (camera establishes the scene)
  - 3–7s: main action
  - 7–10s: resolution (object settles, reaction, hold)
- **What to skip** — scope ruthlessly. A 10-second animation is impressive. A half-finished 30-second animation is not. Cut everything that isn't essential.

**Suggested project options:**
- A. **Object reveal**: a stylised product (a watch, a sneaker, a trophy) rotating on a pedestal with dynamic lighting and a composited background. No character needed.
- B. **Simple mechanical action**: a gear system turning, a door opening, a crane lifting a box. Model simple, focus on satisfying mechanical animation.
- C. **Character moment**: a character (simple robot, creature) wakes up, looks around, reacts to something. Requires rigging knowledge from Session 14.

## Phase 2 — Build + Render (75 min)

**Production workflow:**

1. **Model** (15 min) — build or adapt the subject. Keep polygon count reasonable. Apply Scale.
2. **UV Unwrap + Materials** (10 min) — mark seams, unwrap, apply PBR or procedural materials from Sessions 07–09.
3. **Light** (10 min) — set up a 3-point rig or HDRI + key light from Session 10. Use the render engine (Cycles or EEVEE) from Session 11.
4. **Animate** (25 min) — block out the key poses first (rough keyframes at main moments), then refine timing using the Graph Editor. Add ease in/out. If rigging a character, animate in Pose Mode.
5. **Render** (10 min) — set output path to a folder, format to PNG (image sequence), resolution to 1920×1080 (or 1280×720 for faster render). Set frame range. Render Animation (Ctrl+F12).
6. **Compile + Composite** (5 min) — in the Video Sequence Editor or external tool, combine rendered frames into a video. Or use the Compositor to add colour grading on the final render.

**Quality bar:** Watch the finished animation back. Ask:
- Does it have a clear beginning, middle, and end?
- Do the movements feel physical (appropriate easing, weight)?
- Is the lighting consistent throughout?
- Would you be comfortable showing this to someone as a portfolio sample?

## Review

Look back at Session 01 and Session 15. What was the biggest unexpected difficulty in your final project? What would you do differently if you started it again tomorrow?
`;export{e as default};