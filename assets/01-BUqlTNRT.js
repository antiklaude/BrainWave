var e=`---
title: "UX vs UI + Design Thinking + User Research"
duration: 90
level: 1
levelLabel: "LVL 1"
levelColor: "#6ee7b7"
videos:
  - id: "5CxXhyhT6Fc"
    title: "UX Design Explained — AJ&Smart"
  - id: "SRec90j6lTY"
    title: "Design Thinking Explained — IDEO"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is the key difference between UX Design and UI Design?"
      options: ["UX is only for mobile apps, UI is for web", "UX focuses on the experience and logic of how a product works; UI focuses on the visual appearance of the interface", "UI design requires coding knowledge, UX does not", "They are the same thing with different names"]
      answer: 1
      explanation: "UX (User Experience) covers the entire experience: can users find what they need, does the flow make sense, are there frustrations? UI (User Interface) covers the visual layer: typography, colour, spacing, component design. A product needs both — great UX with bad UI looks amateurish; great UI with bad UX fails users."
    - type: multiple-choice
      question: "In the Design Thinking process, what is the purpose of the 'Empathise' stage?"
      options: ["To start sketching solutions immediately", "To understand users' real needs, frustrations, and context through observation and interviews — before defining the problem", "To evaluate finished prototypes", "To test competitors' products"]
      answer: 1
      explanation: "Empathise comes before defining the problem because you can't define the right problem without first understanding users. Many bad products are excellent solutions to the wrong problem. Empathise involves real users — interviews, observation, shadowing — not assumptions."
    - type: fill-blank
      question: "The Design Thinking stage where designers rapidly generate many possible solutions without judgement is called ___"
      answer: "Ideate"
      explanation: "Ideation is divergent thinking — generate as many ideas as possible (brainstorming, Crazy 8s, mind mapping) without evaluating them. Quantity over quality at this stage. Convergence (choosing which ideas to prototype) comes after."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Most people think UX design means making apps look nice. It doesn't. It means understanding what a specific person needs to do a specific task, then removing every obstacle between them and that task. A beautiful app that users can't navigate is a failure. An ugly app that helps users achieve their goals effortlessly is a success. This distinction is the entire foundation of UX.

- **UX vs UI:**
  - *UX (User Experience)* — the experience of using a product. Covers information architecture, task flows, user research, and whether the product solves the right problems. UX designers ask: "Can the user achieve their goal?"
  - *UI (User Interface)* — the visual and interactive layer. Typography, colour palettes, component design, spacing, animations. UI designers ask: "Does this look and feel right?"
  - Both roles collaborate closely. In small teams, one person does both. In large companies, they're separate specialisations.
- **Why UX fails without research:** assumptions kill products. You are not your user. Your preferences, tech comfort level, and context are not representative. Research replaces assumptions with data.
- **The 5-Stage Design Thinking Process:**
  1. *Empathise* — understand users through interviews, observation, surveys. Discover what they actually do, not what they say they do.
  2. *Define* — synthesise your research into a clear problem statement: "User X needs a way to [goal] because [insight from research]."
  3. *Ideate* — generate many possible solutions. No judgment. Volume is the goal.
  4. *Prototype* — build low-fidelity, fast representations of ideas to test assumptions.
  5. *Test* — put prototypes in front of users. Observe. Take notes. Loop back to any stage.
  - This is not a waterfall — great designers move back and forth between stages based on what they learn.
- **User Research Methods:**
  - *Interviews* (the most valuable) — one-on-one conversations. Ask open-ended questions: "Tell me about the last time you..." Avoid leading questions. Listen more than you talk.
  - *Surveys* — quantitative. Good for scale (hundreds of responses). Bad for depth (can't ask follow-up questions). Use for validation after qualitative research.
  - *Contextual observation* — watch users in their real environment doing real tasks. Users often don't do what they think they do or say they do.

> **Key insight:** Good UX starts with a genuine question — "what do users actually need?" not "how do I build what I imagined?" The biggest UX mistake is skipping research and designing from assumptions. Even one user interview changes your perspective more than 10 hours of solo brainstorming.

## Phase 2 — Do (40 min)

Conduct your first UX audit:
1. Choose a real app or website you use regularly (e.g. a banking app, recipe site, transport app)
2. **Evaluate it as a user:** open it and try to complete 3 specific tasks (e.g. "find the transaction history for last month", "find a pasta recipe under 30 minutes")
3. **Write down:**
   - 3 things that frustrated you or slowed you down (UX problems)
   - 3 things that worked well (UX successes)
   - 1 specific user need the product serves well and 1 need it doesn't address
4. **Frame the problem** using this template: "A user who wants to [goal] struggles because [specific obstacle], which means they [resulting frustration or workaround]."
5. Keep these notes — they're the seed of your project for the rest of this course.

## Review

What is the difference between a usability problem and a visual design problem? Give one example of each from the app you audited. Why does it matter which type it is?
`;export{e as default};