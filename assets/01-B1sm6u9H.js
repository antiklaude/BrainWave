var e=`---
title: "How FDM Works + Printer Parts + Safety"
duration: 90
level: 1
levelLabel: "LVL 1"
levelColor: "#6ee7b7"
videos:
  - id: "GJ98Lydc54k"
    title: "How Does 3D Printing Work? — Maker's Muse"
  - id: "nb-Bzf4nQdE"
    title: "3D Printing 101 — The Basics — Thomas Sanladerer"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does FDM stand for?"
      options: ["Fixed Deposition Method", "Fused Deposition Modeling", "Filament Deposit Machine", "Fluid Design Manufacture"]
      answer: 1
      explanation: "FDM — Fused Deposition Modeling — is the most common 3D printing technology. Filament is melted (fused) and deposited (layered) to build up a model."
    - type: multiple-choice
      question: "Why must ABS plastic always be printed with ventilation?"
      options: ["It clogs the nozzle without airflow", "It emits volatile organic compounds (VOCs) that are harmful to breathe", "It requires cooling to adhere to the bed", "It prints better with air circulation"]
      answer: 1
      explanation: "ABS emits styrene and other VOCs when heated. These can cause headaches, eye irritation, and long-term health issues with repeated exposure. Always vent to outside air or use a HEPA/activated carbon filter."
    - type: fill-blank
      question: "The component that melts and extrudes the filament in an FDM printer is called the ___"
      answer: "hotend"
      explanation: "The hotend (or hot end) contains the heating block, heat break, and nozzle. The extruder feeds filament into it; the hotend melts and extrudes it."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Before you print anything, you need to understand what you're working with. An FDM printer is a machine that gets very hot, runs unattended for hours, and uses materials that release fumes when heated. Understanding how it works and how to use it safely prevents equipment damage, failed prints, and health risks.

- **FDM process** — filament (a plastic string on a spool) is fed through an extruder into a heated nozzle (hotend). The nozzle melts the plastic and deposits it in a precise path. The print bed moves down by one layer height after each layer. The model is built bottom-up, layer by layer.
- **Layer height** — each deposited layer is typically 0.1–0.3mm. Thinner layers = smoother surface but longer print time. 0.2mm is the standard all-rounder.
- **Printer anatomy** — core components you need to know:
  - **Frame** — the structural chassis (Cartesian or CoreXY)
  - **Print bed** — the flat surface the model is built on. Heated for most materials.
  - **Hotend** — heating block + nozzle. Melts and deposits filament.
  - **Extruder** — grips and pushes filament into the hotend. Bowden = extruder is away from hotend; Direct Drive = extruder is on the hotend carriage.
  - **Cooling fan** — blows air on freshly deposited plastic to harden it quickly.

- **⚠️ SAFETY — read and follow these:**
  - **Ventilation required** — all heated plastics release particles and fumes. PLA is relatively benign but still releases ultrafine particles. ABS and ASA emit styrene — a known respiratory irritant. Always print in a well-ventilated space or use a printer enclosure with a HEPA + activated carbon filter.
  - **Never leave unattended overnight** — thermal runaway protection has improved, but print failures (knocking the print off the bed) can cause the nozzle to continuously extrude onto one spot, creating a fire risk. Install a smoke detector near the printer.
  - **Enclosure for ABS** — ABS requires consistent temperature and emits significant fumes. An enclosure with filtered exhaust is not optional for ABS/ASA printing indoors.
  - **Keep flammables away** — filament spools and packaging material are flammable. Keep them away from the heated bed and nozzle.

> **Key insight:** Most 3D printer fires and health issues are preventable. Ventilation costs nothing if you open a window. A smoke detector costs less than the printer itself. Set these up before your first print.

## Phase 2 — Do (40 min)

- Identify every major component on your printer (or reference images of a Creality Ender 3, Bambu X1, or Prusa MK4)
- Check your printing space: is there airflow to the outside? Is the printer on a non-flammable surface? Is there a working smoke detector nearby?
- Find and read the \`robots.txt\` equivalent for your printer — the safety section of the manual. What temperatures does it recommend for each filament?

## Review

What are the three non-negotiable safety steps before printing ABS? Why does FDM print bottom-up rather than top-down?
`;export{e as default};