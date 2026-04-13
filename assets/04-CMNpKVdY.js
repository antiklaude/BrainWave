var e=`---
title: "TinkerCAD Fundamentals"
duration: 100
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
videos:
  - id: "60xfIu-lqAs"
    title: "TinkerCAD Tutorial for Complete Beginners — Maker's Muse"
  - id: "RND5ublVFE4"
    title: "TinkerCAD Full Beginners Course — Kevin Stratvert"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "In TinkerCAD, what does setting a shape to 'Hole' do?"
      options: ["Deletes the shape from the workspace", "Marks the shape as transparent", "When grouped with another solid shape, it subtracts its volume — creating a hole in the solid", "It exports the shape as a hollow STL"]
      answer: 2
      explanation: "Hole is TinkerCAD's boolean subtraction tool. Make a shape (like a cylinder), set it to Hole, overlap it with a solid, then Group them (Ctrl+G). The hole shape carves its volume out of the solid. This is how you add screw holes, cable cutouts, and recesses."
    - type: multiple-choice
      question: "What file format should you export from TinkerCAD to slice in Cura?"
      options: ["OBJ", "FBX", "STL", "STEP"]
      answer: 2
      explanation: "STL (Standard Tessellation Language) is the universal format for 3D printing. TinkerCAD exports STL directly (Export button → .STL). Cura, PrusaSlicer, and all common slicers import STL files."
    - type: fill-blank
      question: "The TinkerCAD keyboard shortcut to group selected shapes into one object is ___"
      answer: "Ctrl+G"
      explanation: "Ctrl+G groups all selected shapes. When a Hole shape is grouped with a solid, the subtraction is applied. Ungrouping (Ctrl+Shift+G) separates them again. Always group before exporting to ensure the design is one unified object."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Most 3D printing beginners download someone else's designs. The moment you can design your own — a custom bracket, a replacement part, a gift with someone's name on it — the whole hobby changes. TinkerCAD is the fastest path from idea to printable object. It runs in a browser, requires no installation, and teaches solid modelling fundamentals that apply to more advanced tools like Fusion 360.

- **TinkerCAD basics:**
  - Access at tinkercad.com (free Autodesk account)
  - The workspace is a grid. Objects sit on the workplane.
  - Left-click to select, drag to move. Right-drag to orbit the camera. Scroll to zoom.
  - The ruler icon on the left lets you type exact dimensions.
- **Primitives** — the building blocks: Box, Cylinder, Sphere, Cone, Torus, Text, Tube. Drag from the right panel onto the workplane. Resize by dragging the white handles (or type values in the dimension boxes for precision).
- **Align tool** — select multiple objects → Align button (top toolbar). Centres objects on any axis. Essential for precise positioning.
- **Group (Ctrl+G) and Ungroup (Ctrl+Shift+G)** — Group merges multiple shapes into one. Required to apply Hole subtractions. Ungroup separates a group back into individual shapes.
- **Hole workflow:**
  1. Add a solid shape (e.g., a Box for a wall)
  2. Add another shape (e.g., a Cylinder for a bolt hole)
  3. Position the cylinder where you want the hole
  4. With the cylinder selected, click "Hole" in the shape inspector (right side)
  5. Select both objects, press Ctrl+G to group — the cylinder is subtracted from the box
- **Ruler and snapping** — hold Shift while dragging to constrain to grid. Use the ruler tool for precise measurement. TinkerCAD defaults to 1mm grid snapping.
- **Exporting for printing** — click Export (top-right) → .STL. Open the STL in Cura, set print settings, slice, and print.

> **Key insight:** TinkerCAD is the fastest path from idea to printable object. It won't build an engine block, but it will build 80% of what hobbyists need — phone stands, wall brackets, custom labels, cable holders, costume props, replacement clips. If a shape fits in a box, TinkerCAD can probably make it.

## Phase 2 — Do (50 min)

Design and print a phone stand:
1. Sign in to TinkerCAD, create a New Design
2. **Base:** add a Box, set dimensions to 80mm wide × 40mm deep × 5mm tall (the base plate)
3. **Stand support:** add a Box, 80mm wide × 4mm deep × 60mm tall. Position it at the back of the base, flush with the back edge.
4. **Phone ledge:** add a Box, 80mm wide × 10mm deep × 5mm tall. Position it 15mm in front of the support at the base level (this holds the phone bottom).
5. **Angle:** select the support box, rotate it 10–15° backward (tilts the phone back for a comfortable view angle)
6. **Cable cutout:** add a Cylinder, diameter 15mm, height 10mm. Set it to Hole. Position it in the centre of the phone ledge. Group with the ledge.
7. Group all components (Ctrl+A to select all → Ctrl+G)
8. Export as STL, open in Cura, slice with standard PLA settings, print

## Review

What is the difference between Grouping and Aligning in TinkerCAD? At what point in the workflow does the Hole subtraction actually happen, and why does the order of operations matter?
`;export{e as default};