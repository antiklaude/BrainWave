var e=`---
title: "Basic Objects + Transforms + Apply"
duration: 90
level: 1
levelLabel: "LVL 1"
levelColor: "#6ee7b7"
videos:
  - id: "s05DiCEDVGE"
    title: "Blender Beginner Tutorial — Part 2: Moving, Scaling, Rotating — Blender Guru"
  - id: "kVcY7K-JA1Y"
    title: "Blender 4.0 Beginner Tutorial — Grant Abbitt"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does pressing 'G then X' do in Blender?"
      options: ["Scales on the X axis", "Moves the object constrained to the X axis only", "Rotates around X", "Grabs on the global X axis and scales"]
      answer: 1
      explanation: "G = Grab (move). Then pressing X constrains the movement to only the X axis. G then Y = move on Y axis. G then Z = move on Z axis. This works for R (rotate) and S (scale) too."
    - type: multiple-choice
      question: "Why must you Apply Scale before using modifiers or sculpting?"
      options: ["It makes the file smaller", "Blender's modifiers use the applied scale; an unapplied scale of 2x makes a Mirror modifier mirror at the wrong distance", "It's required for export", "It speeds up rendering"]
      answer: 1
      explanation: "Blender internally tracks visual scale separately from applied scale. A Mirror modifier uses the applied (stored) dimensions, not the visual ones. Unapplied scale causes modifiers to behave incorrectly."
    - type: fill-blank
      question: "The keyboard shortcut to Apply Scale is ___"
      answer: "Ctrl+A"
      explanation: "Ctrl+A in Object Mode opens the Apply menu. Choose Apply Scale (or Apply All Transforms to apply location, rotation, and scale together)."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Every modelling operation is built on transforms — moving, rotating, and scaling objects. The keyboard shortcuts for these are some of the most-used in all of Blender. And Apply Scale is the #1 beginner trap: not applying it before using modifiers causes weird behaviour that's baffling if you don't know the reason.

- **G — Grab (Move)** — moves the selected object. After pressing G, move the mouse. Click to confirm, right-click or Escape to cancel.
- **R — Rotate** — rotates the object. Move the mouse to rotate. Confirm or cancel same as above.
- **S — Scale** — scales the object. Move the mouse toward or away from the centre.
- **Axis constraints** — after G, R, or S, press X, Y, or Z to constrain to that axis. \`G → Z\` moves up/down only. \`R → Y\` rotates around the Y axis only.
- **Precise values** — after pressing G/R/S + axis, type a number: \`G → Z → 2 → Enter\` moves exactly 2 units up. \`S → 2 → Enter\` doubles the scale.
- **Properties panel (N key)** — shows exact location, rotation, and scale values. Edit them numerically here.
- **Apply Scale (Ctrl+A → Apply Scale)** — CRITICAL. When you scale an object visually (S key), Blender stores the scale separately from the actual mesh dimensions. Modifiers and sculpting tools use the actual (applied) dimensions. Before using any modifier or sculpting, always Apply Scale.

> **Key insight:** Always Apply Scale (Ctrl+A → Apply Scale) before using the Mirror modifier, Subdivision Surface, Solidify, or before sculpting. Not doing this is the #1 cause of mysterious modifier behaviour for beginners. Make it a habit: model → apply scale → add modifier.

## Phase 2 — Do (40 min)

- Add a cube, a cylinder, and a sphere to the scene
- Practice each transform with axis constraints: move each object to a different position using G+X/Y/Z with precise numbers
- Scale one object to 2x its original size using S → 2
- Check the Properties panel: note the scale values are 2, 2, 2 (not applied)
- Apply Scale (Ctrl+A → Apply Scale) — check the Properties panel: scale is now 1, 1, 1. The object looks the same but its scale is now "baked in"
- Rotate an object and Apply Rotation too

## Review

After pressing S → 2 to double an object's scale, what does Ctrl+A → Apply Scale do? Why is this step important before adding a Mirror modifier?
`;export{e as default};