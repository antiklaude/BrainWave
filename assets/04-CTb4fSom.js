var e=`---
title: "Flexbox — 1D Layouts"
duration: 90
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
videos:
  - id: "3JluqTojuME"
    title: "Flexbox Crash Course 2022 — Traversy Media"
  - id: "u044iM9xsjs"
    title: "Learn Flexbox the Easy Way — Kevin Powell"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does 'justify-content: space-between' do in a flex container?"
      options: ["Centres all items", "Distributes items with equal space around them", "Places items at each end with space between them", "Aligns items to the start"]
      answer: 2
      explanation: "space-between puts the first item at the start, last item at the end, and distributes remaining space equally between the middle items."
    - type: multiple-choice
      question: "What is the default flex-direction?"
      options: ["column", "row", "row-reverse", "column-reverse"]
      answer: 1
      explanation: "The default flex-direction is row — items line up horizontally. Use column to stack them vertically."
    - type: fill-blank
      question: "To enable Flexbox on a container, set its display property to ___"
      answer: "flex"
      explanation: "display: flex turns the element into a flex container. Its direct children automatically become flex items."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Before Flexbox (which landed in browsers in 2012), centering something vertically in CSS was a notorious hack. Flexbox changed everything. It's the tool you reach for to build navbars, card rows, centred layouts, and any one-directional alignment challenge.

- **display: flex** — applied to the container (the parent). Its direct children become flex items automatically.
- **flex-direction** — \`row\` (default, horizontal) or \`column\` (vertical). Controls the main axis direction.
- **justify-content** — alignment along the main axis: \`flex-start\`, \`flex-end\`, \`center\`, \`space-between\`, \`space-around\`, \`space-evenly\`.
- **align-items** — alignment along the cross axis (perpendicular to the main axis): \`stretch\` (default), \`flex-start\`, \`flex-end\`, \`center\`, \`baseline\`.
- **gap** — space between flex items: \`gap: 16px\`. Much cleaner than margins on individual items.
- **flex-wrap** — \`flex-wrap: wrap\` allows items to wrap to the next line when they don't fit. Default is \`nowrap\` (items shrink or overflow).
- **flex-grow / shrink / basis** — shorthand \`flex: 1\` makes an item grow to fill available space. \`flex: 0 0 200px\` fixes an item at 200px with no grow/shrink.

> **Key insight:** Flexbox is for one direction at a time — either a row OR a column. If you need both rows and columns simultaneously (like a full page layout), use CSS Grid. Use Flexbox for components (navbars, card rows, buttons with icons), use Grid for page structure.

## Phase 2 — Do (40 min)

- Build a navigation bar using Flexbox:
  - Logo on the left, nav links on the right: \`justify-content: space-between\`
  - Links should be spaced evenly with \`gap\`
  - Vertically centre everything with \`align-items: center\`
- Build a card row with 3 cards:
  - Use \`flex-wrap: wrap\` so they stack on narrow screens
  - Give each card \`flex: 1 1 250px\` so they grow equally but never go below 250px
- Centre a div both horizontally and vertically using Flexbox on its parent

## Review

What is the difference between \`justify-content\` and \`align-items\`? How do they change when you switch \`flex-direction\` from \`row\` to \`column\`?
`;export{e as default};