var e=`---
title: "Bass + Sidechain Compression"
duration: 120
level: 2
levelLabel: "LVL 2"
levelColor: "#38bdf8"
videos:
  - id: "Fglyu4PFQwY"
    title: "Ableton Live Mix Deconstruction: Part 1 — Drums & Bass — Pointblank"
  - id: "TD74lrVmMoE"
    title: "Ableton Live Mix Deconstruction: Part 2 — Synths & FX — Pointblank"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "How do you set up sidechain compression in Ableton?"
      options:
        - "Put EQ on bass track, link to kick"
        - "Put Compressor on bass track, enable Sidechain, set source to kick track"
        - "Put Compressor on kick track, link to bass"
        - "Use the Auto Filter on bass"
      answer: 1
      explanation: "Put Ableton's Compressor on the bass track, enable the Sidechain input, and select the kick track as the source."
    - type: multiple-choice
      question: "For pumping EDM sidechain, what ratio should you use?"
      options: ["2:1", "4:1", "8:1", "10:1 or higher"]
      answer: 3
      explanation: "Pumping EDM sidechain needs aggressive ratios (10:1+) with fast attack and medium release to create the ducking effect."
---

## Phase 1 — Learn (40 min)

- Bass note = root of your scale. C minor = bass plays C, Eb, F, G, Bb. Nothing else.
- Sidechain in Ableton: put Compressor on bass track → enable Sidechain → set source to kick track.
- Pumping EDM sidechain: fast attack (0.1ms), medium release (200ms), ratio 10:1 or higher.

## Phase 2 — Do (65 min)

- Add a new MIDI track. Load Wavetable. Design a simple bass patch (sine/saw, low filter cutoff).
- Draw a bass line that follows the kick rhythm closely.
- Set up the sidechain. Toggle it on and off. Hear the difference. Adjust until it pumps cleanly.

## 15-Min Review

Turn everything off except kick and bass. Do they fight each other or work together? The kick should cut through the bass like a punch, not sit on top of mud. If they fight, your sidechain ratio needs to go higher.
`;export{e as default};