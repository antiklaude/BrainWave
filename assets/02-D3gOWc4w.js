var e=`---
title: "Materials (PLA, PETG, ABS) + Settings"
duration: 90
level: 1
levelLabel: "LVL 1"
levelColor: "#6ee7b7"
videos:
  - id: "B84CgaPdixc"
    title: "3D Printing Materials Guide: PLA vs PETG vs ABS — CNC Kitchen"
  - id: "nb-Bzf4nQdE"
    title: "3D Printing 101 — Thomas Sanladerer"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "Which filament material is the easiest to print for beginners?"
      options: ["ABS", "PETG", "PLA", "TPU"]
      answer: 2
      explanation: "PLA is the most beginner-friendly: low temperature (200°C nozzle, 60°C bed), no warping, no enclosure needed, biodegradable. It's the right choice for 95% of hobby prints."
    - type: multiple-choice
      question: "What type of bed adhesion works best for ABS?"
      options: ["PEI sheet", "Glass bed only", "Glass + hairspray or ABS slurry", "Blue painter's tape"]
      answer: 2
      explanation: "ABS notoriously warps. A heated glass bed with hairspray or an ABS slurry (dissolved ABS in acetone) provides the adhesion and temperature retention needed. An enclosure to keep ambient temperature stable is also essential."
    - type: fill-blank
      question: "The recommended standard nozzle temperature for printing PETG is around ___°C"
      answer: "230"
      explanation: "PETG typically prints at 230-250°C nozzle and 80-90°C bed temperature. It prints slightly hotter than PLA and needs a warmer bed to prevent warping and improve adhesion."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Choosing the wrong material for a print is one of the most common reasons prints fail or produce usable but suboptimal parts. PLA doesn't survive in a hot car. ABS without a ventilated enclosure is a health and safety issue. PETG strings badly if you don't tune retraction. The right material for the right application prevents wasted prints.

- **PLA (Polylactic Acid)**:
  - Temp: ~200°C nozzle / 60°C bed
  - Pros: easy to print, biodegradable, many colours, rigid, good detail
  - Cons: brittle, low heat resistance (deforms above ~55°C in the sun or a hot car), not UV stable long-term
  - Best for: toys, prototypes, display models, desktop objects, anything that doesn't need heat resistance

- **PETG (Polyethylene Terephthalate Glycol)**:
  - Temp: ~230°C nozzle / 80°C bed
  - Pros: tougher than PLA, heat resistant to ~80°C, food-safe (if printed on clean equipment with food-safe pigments), flexible
  - Cons: strings more than PLA (tune retraction), slightly harder to tune, bonds aggressively to some surfaces
  - Best for: functional parts, outdoor use, water contact, mechanical components

- **ABS (Acrylonitrile Butadiene Styrene)**:
  - Temp: ~240°C nozzle / 100°C bed
  - Pros: strong, heat resistant (~100°C), acetone-smoothable, machinable
  - Cons: **warps badly** without enclosure, requires heated enclosure, emits strong VOC fumes (styrene), harder to print
  - ⚠️ Safety: never print ABS without ventilation to outside air or an activated carbon filter
  - Best for: professional functional parts, car components, high-temperature applications

- **Bed adhesion methods**:
  - PEI sheet — best for PLA/PETG. Parts pop off when cooled. No glue needed.
  - Glass + glue stick — general purpose. Remove glue residue between prints.
  - Glass + hairspray — for ABS and PETG. Aquanet or similar unscented hairspray works.

> **Key insight:** When in doubt, use PLA. It prints at the lowest risk, produces great results, and is right for 80% of hobby applications. Move to PETG when you need toughness or heat resistance. Only move to ABS when you specifically need its properties and have proper ventilation set up.

## Phase 2 — Do (40 min)

- Match these 5 print scenarios to the correct material and justify your choice:
  1. A decorative figurine for a bookshelf
  2. A bracket to mount a camera inside a car dashboard
  3. A replacement handle for a refrigerator door
  4. A cookie cutter that will touch food
  5. A structural drone frame exposed to sunlight and mechanical stress
- Look up your printer's recommended temperature ranges in its manual — do they match the ranges above?

## Review

Why does PETG string more than PLA? What slicer setting addresses stringing and how does it work?
`;export{e as default};