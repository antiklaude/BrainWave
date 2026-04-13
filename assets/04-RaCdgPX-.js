var e=`---
title: "Modelling Workflow + Modifiers"
duration: 100
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
videos:
  - id: "s05DiCEDVGE"
    title: "Blender Beginner Tutorial — Part 2: Basics — Blender Guru"
  - id: "kVcY7K-JA1Y"
    title: "Blender 4.0 Beginner Tutorial — Grant Abbitt"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does the Mirror modifier do?"
      options: ["Creates a reflection in the background", "Duplicates and mirrors geometry across a chosen axis to create symmetrical models", "Flips the normals", "Creates a second object"]
      answer: 1
      explanation: "Mirror mirrors your geometry across an axis (usually X for left-right symmetry). Model one half, the mirror creates the other half automatically. Apply the modifier before exporting."
    - type: multiple-choice
      question: "Why should you use a reference image when modelling a real object?"
      options: ["Blender requires it", "It gives you accurate proportions and details to model to, making the result look believable", "It speeds up rendering", "It's required for the Mirror modifier"]
      answer: 1
      explanation: "Reference images (front, side, top views) give you accurate proportions to model to. Without references, organic shapes especially tend to drift from the intended form."
    - type: fill-blank
      question: "The Blender modifier that adds thickness to a flat surface or thin mesh is ___"
      answer: "Solidify"
      explanation: "The Solidify modifier adds thickness to flat geometry — useful for walls, fabric, paper, and any object that should have volume but was modelled as a flat surface."
---

## Phase 1 — Learn (45 min)

**Why this matters:** Professional modellers don't sculpt every detail by hand from scratch. They work smart: use modifiers to do repetitive work automatically, use reference images to model to accurate proportions, and use symmetry tools so they only model half of anything symmetrical. This session introduces the workflow every experienced modeller uses.

- **Modifiers** — non-destructive operations applied to a mesh. They appear in the wrench icon in the Properties panel. The modifier is applied live — you can edit the settings any time. Click "Apply" to bake the modifier's changes into the actual mesh (do this before exporting or before certain operations).
- **Mirror modifier** — creates a mirrored copy of the mesh across a chosen axis. Enable "Clipping" to prevent the two halves from separating at the mirror seam. Model one half; the other is created automatically. Works in Edit Mode — changes to one half mirror instantly.
- **Array modifier** — repeats the mesh a set number of times. Configure count, offset (relative or fixed distance). Used for fences, railings, windows in a row, anything repetitive.
- **Solidify modifier** — adds thickness to flat surfaces. Essential for architectural elements (walls, ceiling), fabric, and any "flat" object that needs real volume.
- **Reference images** — add reference photos in the Properties panel (N key → View → Lock Camera to View, or use Empty → Image from the Add menu). Front, side, and top view photos of your reference are the standard workflow for modelling real-world objects.
- **Modelling order** — the recommended modifier stack: Mirror → Subdivision Surface (add last). Modifiers apply bottom-up in the stack.

> **Key insight:** The Mirror modifier is one of the most used tools in all of 3D modelling. Anything with left-right symmetry (characters, cars, furniture, architecture) should be modelled with Mirror. Never model both halves manually.

## Phase 2 — Do (45 min)

- Find or sketch a front + side reference of a simple chair
- In Blender, set up the reference image as background images in front and side views
- Model a chair using Mirror (X axis for left-right symmetry) + Solidify (for seat and back thickness):
  1. Model the seat (box-shaped, thin)
  2. Add legs (cylinder or box, use Array for two legs, then Mirror for the other two)
  3. Add a back support
  4. Apply Scale and check normals

## Review

If you're modelling a car (symmetric left-right), which side do you model first and why? At what point in the workflow do you "Apply" the Mirror modifier?
`;export{e as default};