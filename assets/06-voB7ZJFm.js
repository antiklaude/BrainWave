var e=`---
title: "Design Rules for 3D Printing"
duration: 90
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
videos:
  - id: "HYnm2MD8Nws"
    title: "Design for FDM 3D Printing — Maker's Muse"
  - id: "AmEigW5o7lE"
    title: "3D Printing Design Rules — CNC Kitchen"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is the maximum overhang angle that FDM prints can typically handle without supports?"
      options: ["30° from vertical", "45° from vertical (or 45° from horizontal)", "60° from vertical", "Any angle if printed slowly"]
      answer: 1
      explanation: "The 45° rule: an overhang leaning more than 45° from vertical (equivalently, an underside that is more than 45° from horizontal) will usually require supports or will sag and string. At 45°, each new layer has enough of the layer below to hang onto. Beyond that, layers are printing onto air."
    - type: multiple-choice
      question: "If you're designing a peg that needs to fit snugly into a hole, how should you size the hole?"
      options: ["Make the hole exactly the same diameter as the peg", "Make the hole 0.2–0.4mm larger than the peg diameter to account for FDM dimensional variation and achieve a snug fit", "Make the hole 1mm larger — FDM shrinks a lot", "It doesn't matter — 3D printers are perfectly precise"]
      answer: 1
      explanation: "FDM printers have dimensional variation (typically ±0.1–0.2mm) and molten plastic slightly expands into openings. A hole printed at 10mm diameter will measure slightly smaller in reality. Add 0.2–0.4mm tolerance to the hole (not the peg) for a good fit. Test with a calibration print first."
    - type: fill-blank
      question: "The minimum recommended wall thickness for a structurally sound FDM print with a 0.4mm nozzle is ___mm"
      answer: "0.8"
      explanation: "A 0.4mm nozzle extrudes a 0.4mm wide line. A single wall is 0.4mm — fragile. Two perimeters (0.8mm) is the minimum for a functional wall. Three perimeters (1.2mm) is recommended for most structural parts. More perimeters = stronger and better surface quality."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Designing for 3D printing is different from designing for injection moulding or machining. FDM has specific constraints: it prints layer by layer from the bottom up, can't print in mid-air, has limited resolution, and is weaker across layers than within them. Understanding these constraints before designing saves hours of failed prints and poorly fitting parts.

- **The 45° overhang rule** — FDM prints layer by layer. Each layer must have at least 50% of the previous layer to rest on. Overhangs under 45° from horizontal can print unsupported. Beyond 45°, material sags and strings. Design parts to stay within this angle where possible — or add supports in the slicer.
- **Bridging** — printing horizontal spans between two support points with no material below. FDM can bridge gaps up to ~50mm cleanly (fan cooling helps). Design small bridges to avoid sagging; use supports for longer ones.
- **Tolerance for fit — clearance and interference:**
  - *Clearance fit* (peg slides freely in hole): add 0.3–0.5mm to the hole diameter
  - *Press fit* (peg held firmly by friction): add 0.1–0.15mm to the hole diameter
  - *Interference fit* (requires force to insert): same size as peg or slightly smaller — prints usually need slight filing
  - Print a tolerance test (a set of identical holes at 0.0, 0.1, 0.2, 0.3, 0.4mm offset) to find your printer's sweet spot.
- **Wall thickness** — minimum 0.8mm (2× nozzle width for 0.4mm nozzle). 1.2mm (3 perimeters) for functional parts. Slicer will ignore geometry thinner than the nozzle diameter.
- **Layer orientation for strength** — FDM parts are significantly weaker in the Z direction (between layers) than in the XY plane (within a layer). Design load-bearing features to avoid Z-axis stress: print a beam lying flat (not standing upright) if it will be bent.
- **Chamfer the first layer** — the bottom edge of a print tends to curl or "elephant foot" slightly. Add a 0.5mm chamfer to the bottom edge of your model so the slight expansion doesn't affect the fit of the part.
- **Feature minimums:**
  - Holes: minimum 1mm diameter (small holes often close up — use a drill for precise holes)
  - Pins: minimum 3mm diameter for functional pins
  - Text: minimum 3mm letter height for legible embossed text; 4mm for debossed

> **Key insight:** Think about how the part will sit on the print bed before you start modelling. Orient the part so the weakest direction (Z) carries the least load. If a bracket screws to a wall, the screw direction should be in the XY plane, not Z.

## Phase 2 — Do (40 min)

Evaluate the bracket from Session 05 for printability:
1. Open the Fusion 360 bracket model
2. **Check overhangs:** are there any faces that overhang more than 45°? (The chamfered edges — check their angle)
3. **Check tolerance:** the bolt holes are 4mm diameter. Look up a standard M4 bolt — it's 4mm nominal. What tolerance should you add for a clearance fit? Update the \`hole_diameter\` parameter.
4. **Check wall thickness:** is the 4mm bracket thick enough to be strong? What forces will it experience?
5. **Check orientation:** which face would you put face-down on the print bed? Why?
6. **Import into Cura:** slice the bracket. Rotate it to the optimal orientation. Check the layer view for any overhangs needing supports. Turn on supports if needed.
7. Note any design changes you would make and update the model before printing.

## Review

A part has a 60° overhang and a 40mm bridge. You want to print it without any supports. What design changes could you make to stay within FDM printability constraints while keeping the part functional?
`;export{e as default};