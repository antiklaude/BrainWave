var e=`---
title: "Intro to Mixing — EQ + Compression"
duration: 120
level: 4
levelLabel: "LVL 4"
levelColor: "#f472b6"
videos:
  - id: "f1wVqmhLxUc"
    title: "FL Studio Basics — The Mixer — In The Mix"
  - id: "DsG_l0dKBBE"
    title: "How to make Lofi Hip Hop | EQ & Mixing — J. Rent"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does EQ stand for?"
      options: ["Equal Quality", "Equalizer", "Electronic Quality", "Equal Query"]
      answer: 1
      explanation: "EQ stands for Equalizer — it allows you to boost or cut specific frequency ranges in your audio."
    - type: multiple-choice
      question: "What is a high-pass filter used for?"
      options: ["Boosting high frequencies", "Cutting low frequencies below a threshold", "Adding reverb", "Increasing volume"]
      answer: 1
      explanation: "A high-pass filter removes (cuts) low-end frequencies below the cutoff point, cleaning up mud."
---

## Phase 1 — Learn (45 min)

- FL Mixer: route each instrument to its own channel.
- EQ: cut below 40Hz on everything except bass/kick. Cut 200–400Hz mud.
- Compression on drums: attack 10ms, release 60ms, ratio 4:1.

## Phase 2 — Do (60 min)

- Open your LoFi track. Route all instruments to the mixer.
- Apply EQ cuts to kick, snare, melody. Listen before and after.
- Add light compression to the drum bus. Compare bypass vs active.

## 15-Min Review

Solo each instrument. Does anything sound harsh, boxy, or muddy on its own? A good mix starts with each element sounding clean in isolation.
`;export{e as default};