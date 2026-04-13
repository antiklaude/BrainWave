var e=`---
title: "Animations, Transitions + CSS Variables"
duration: 90
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
videos:
  - id: "yfoY53QXEnI"
    title: "CSS Crash Course For Absolute Beginners — Traversy Media"
  - id: "1Rs2ND1ryYc"
    title: "Learn CSS in 20 Minutes — Web Dev Simplified"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does 'transition: all 0.3s ease' do?"
      options: ["Animates all CSS property changes over 0.3 seconds with an ease timing", "Transitions between 3 different states", "Delays all animations by 0.3 seconds", "Repeats all animations 3 times"]
      answer: 0
      explanation: "transition tells the browser to animate changes to CSS properties. 'all' means any property, '0.3s' is the duration, 'ease' is the timing function (starts fast, slows down)."
    - type: multiple-choice
      question: "Where should CSS custom properties (variables) be defined to be available globally?"
      options: ["In body { }", "In html { }", "In :root { }", "In * { }"]
      answer: 2
      explanation: ":root is the topmost element (the document itself). Variables defined there are available everywhere in the stylesheet."
    - type: fill-blank
      question: "To use a CSS variable called --primary-color, write ___"
      answer: "var(--primary-color)"
      explanation: "var() is the function that reads a CSS custom property. The property name must start with --."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Transitions and animations are what make a website feel alive instead of static. CSS variables eliminate repetition — define a colour once, use it 50 times, change it in one place. Together, they're what separates a professional-looking site from a basic one.

- **transition** — applied to an element, smoothly animates changes caused by state changes (like \`:hover\`). Format: \`transition: property duration timing-function\`. Example: \`transition: background-color 0.2s ease\`.
- **:hover / :focus** — pseudo-classes that apply styles when the user hovers over or focuses on an element. Combined with \`transition\`, these create smooth interactive effects.
- **@keyframes** — defines a multi-step animation. \`from\` (0%) and \`to\` (100%) are the minimum; you can add any percentage in between.
- **animation** — applies the keyframes: \`animation: fade-in 0.5s ease forwards\`. Properties: \`animation-name\`, \`animation-duration\`, \`animation-timing-function\`, \`animation-fill-mode\` (\`forwards\` keeps the final state).
- **CSS custom properties (variables)** — define with \`--\` prefix inside \`:root {}\`: \`--color-primary: #6ee7b7;\`. Use anywhere with \`var(--color-primary)\`. Changing one variable updates every element using it.
- **Practical variables** — define your entire colour palette and spacing scale as variables. Then redesigning the whole site's look is a single \`:root\` block edit.

> **Key insight:** Transitions are for state changes (hover, focus, active). Animations are for things that happen automatically without user interaction (entrance animations, loading spinners). Use the right tool for the job.

## Phase 2 — Do (40 min)

- Add CSS variables for your entire colour scheme: \`--bg-primary\`, \`--text-primary\`, \`--accent\`, \`--border\` in \`:root\`
- Replace all hardcoded colour values in your CSS with \`var()\` references
- Add hover transitions to all your cards: \`transform: translateY(-4px)\` + \`box-shadow\` change on hover, transitioned over 0.2s
- Write one entrance animation: a \`fade-in\` keyframe from \`opacity: 0\` to \`opacity: 1\` — apply it to your hero section

## Review

If you change \`--accent\` in \`:root\` from blue to orange, how many places in your CSS need to be updated? What was the answer before you used CSS variables?
`;export{e as default};