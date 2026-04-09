var e=`---
title: "Troubleshooting + Post-Processing"
duration: 100
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "Im25_KpD5to"
    title: "3D Print Troubleshooting Guide — Thomas Sanladerer"
  - id: "Qzf2nHZ-7Kw"
    title: "3D Print Post Processing — Sanding, Priming, Painting — Maker's Muse"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What causes stringing between parts of a 3D print?"
      options: ["The bed temperature is too high", "The nozzle oozes molten filament during travel moves — caused by insufficient retraction, too high temperature, or too slow travel speed", "The layer height is too thick", "Infill percentage is too low"]
      answer: 1
      explanation: "Stringing happens when the nozzle travels over open space while still dripping molten plastic. Fixes: increase retraction distance (2–6mm for Bowden, 0.5–1.5mm for direct drive), lower print temperature by 5°C, increase travel speed, enable combing (travel avoids open areas where possible)."
    - type: multiple-choice
      question: "What is the most effective fix for warping of large PLA prints?"
      options: ["Printing faster", "Increasing layer height", "Increasing bed temperature, adding a brim, and ensuring no drafts reach the print", "Reducing infill percentage"]
      answer: 2
      explanation: "Warping is caused by the print cooling unevenly and shrinking. Fixes: increase bed temperature (PLA: 60–70°C), add a large brim (8–15mm) to anchor the edges, eliminate drafts (close windows/doors, use a cardboard enclosure), and clean the bed surface to improve adhesion."
    - type: fill-blank
      question: "The sandpaper grit progression for smoothing a 3D print from rough to fine is roughly: 80 → 120 → 220 → ___"
      answer: "400"
      explanation: "Start with 80 grit to remove large layer lines, move to 120 to smooth the scratches from 80, then 220 to refine further, then 400 for a smooth, paint-ready surface. Wet sanding from 400 upward produces an even smoother finish. Prime between stages to reveal remaining imperfections."
---

## Phase 1 — Learn (45 min)

**Why this matters:** Every 3D printing hobbyist hits failures. Parts warp, strings appear, layers separate. Knowing how to diagnose and fix failures is what separates people who get consistently good results from people who blame the printer. This session is a systematic troubleshooting reference — and a guide to making printed parts look finished and professional.

- **Warping** — corners or edges lift off the bed during printing.
  - Cause: uneven cooling causes contraction. Common with PLA on glass beds, severe with ABS.
  - Fix: higher bed temp (+5–10°C), add a Brim in Cura, clean the bed (IPA wipe), eliminate drafts, use an enclosure for ABS.
- **Stringing** — thin spider-web filament strands between parts.
  - Cause: nozzle oozes during travel moves.
  - Fix: increase retraction (direct drive: 1–2mm; Bowden: 4–7mm), lower print temp (5°C increments), increase travel speed, enable Cura's Combing (prevents travel over open space).
- **Layer delamination / weak layers** — layers separate or crack.
  - Cause: temperature too low, print speed too high, wet filament.
  - Fix: increase nozzle temp by 5°C, reduce speed, dry filament (oven at 50°C for 4–6 hours, or food dehydrator).
- **Under-extrusion** — missing lines, gapped infill, weak walls.
  - Cause: clogged nozzle, too fast print speed, filament grinding in extruder.
  - Fix: print slower, perform a cold pull (heat nozzle, push filament through, let cool to 90°C, pull firmly), check extruder tension.
- **Elephant foot** — the first layer(s) bulge outward.
  - Cause: nozzle too close to bed, bed too hot, first layer speed too fast.
  - Fix: increase Z-offset slightly (live Z adjust), reduce bed temp by 5°C, reduce first layer speed.
- **Blobs and zits** — small bumps on the surface where the extruder starts/stops a layer.
  - Fix: enable Coasting in Cura (reduces pressure slightly before layer end), adjust retraction.

**Post-Processing:**
- **Sanding** — work through grits: 80 → 120 → 220 → 400 → wet sand 600+. Always sand with the grain of layer lines, not against. Use water as lubricant for wet sanding. PLA sands well; PETG is tougher.
- **Priming** — spray primer (grey primer is most neutral) reveals remaining imperfections. Re-sand with 400 between primer coats. Two thin coats are better than one thick.
- **Painting** — acrylic paint adheres well. Spray paint for large areas, brush for detail. Apply a clear coat (matte or gloss) for durability.
- **Acetone smoothing (ABS only)** — ABS dissolves in acetone. Vapour from acetone in an enclosed container smooths the surface chemically to a near-injection-moulded finish. **Safety: highly flammable, use outdoors or in well-ventilated area only, no open flames.**

> **Key insight:** When a print fails, don't just reprint — diagnose first. Change one variable at a time (temperature, then retraction, then speed) so you know what actually fixed it. Guessing wastes filament; methodical testing builds skill.

## Phase 2 — Do (45 min)

Diagnose + post-process:
1. **Diagnose 3 failure scenarios** (use your own failed prints, or study the descriptions):
   - Scenario A: a print has thin hair-like strands connecting the main body to a separate pillar. The print temperature was 205°C. What do you change?
   - Scenario B: the corners of a 120×80mm flat panel are curling up 2mm after 20 layers. What are 3 specific changes you make?
   - Scenario C: the print's walls look gappy and the infill is weak, but the nozzle temperature and speed are within spec. What is likely causing this and how do you confirm?
2. **Post-process a completed print** (the phone stand or bracket from Sessions 04/05):
   - Sand through 120 → 220 → 400 grit
   - Apply spray primer, let dry, inspect
   - Sand again with 400 grit where primer revealed imperfections
   - Apply 2 coats of acrylic paint in your chosen colour
   - (Optional) apply a protective clear coat

## Review

You have a freshly printed part with visible layer lines that you want to use as a portfolio-quality display piece. Walk through the complete post-processing workflow from raw print to finished result, naming every material and step.
`;export{e as default};