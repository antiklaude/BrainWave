var e=`---
title: "Reverb, Delay + Return Tracks"
duration: 120
level: 4
levelLabel: "LVL 4"
levelColor: "#f472b6"
videos:
  - id: "m53xk6hJZB0"
    title: "Make Reverbs Sound Better in Ableton Live — Seed To Stage"
  - id: "5yrSu9NFJ_4"
    title: "Ableton Live Mix Deconstruction: Part 3 — Vocals, Stereo, Master — Pointblank"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is a Return Track in Ableton?"
      options: ["A track that loops back", "A shared FX bus that any track can send to", "The master track", "An automation lane"]
      answer: 1
      explanation: "Return tracks are shared effect buses. You route signals to them via Send knobs on each track, allowing multiple tracks to share one reverb or delay."
    - type: fill-blank
      question: "The Ableton reverb device that combines algorithmic and convolution reverb is ___"
      answer: "hybrid reverb"
      explanation: "Hybrid Reverb combines algorithmic (adjustable) and convolution (sampled spaces) reverb in one device."
---

## Phase 1 — Learn (40 min)

- Return tracks (A, B) are shared FX buses. Send any track to them using the Send knob.
- Put Hybrid Reverb on Return A. Put Echo on Return B (sync tempo, 1/4 note delay).
- Rule: reverb on the master is lazy. Send individual tracks to a reverb return instead — more control.

## Phase 2 — Do (65 min)

- Set up 2 return tracks: one with Hybrid Reverb (1.5s decay), one with Echo (1/4 note, 25% feedback).
- Send the melody to the reverb return at 30%. Send a hi-hat to the echo return at 15%.
- Build an ambient pad: any synth + Send A at 100% (reverb only output). That IS ambient music.

## 15-Min Review

Turn down all reverb sends to zero. Play the track dry. Does it still feel musical? It should. Reverb is seasoning, not the meal. If the dry track falls apart, the arrangement itself is the problem — not the reverb.
`;export{e as default};