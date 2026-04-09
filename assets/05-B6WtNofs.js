var e=`---
title: "Figma Fundamentals"
duration: 100
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "FTFaQWZBqQ8"
    title: "Figma Tutorial for Beginners: Complete 2024 Guide — DesignCourse"
  - id: "jwCmIBJ8Jtc"
    title: "Learn Figma — Full Course for Beginners — freeCodeCamp"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is the difference between a Frame and a Group in Figma?"
      options: ["They are identical", "Frames have fixed dimensions, auto layout, and constraints; Groups are just a container that resizes to fit content", "Groups are for components, Frames are for pages", "Frames can only contain images"]
      answer: 1
      explanation: "Frames are the fundamental building block — they define screen/section boundaries, support constraints, auto layout, and clipping. Groups are a quick way to organise layers but have no layout properties."
    - type: multiple-choice
      question: "What does 'Auto Layout' do in Figma?"
      options: ["Automatically aligns elements to a grid", "Makes a frame dynamically resize based on its content, with configurable padding and gap", "Creates responsive breakpoints", "Generates layouts from wireframes automatically"]
      answer: 1
      explanation: "Auto Layout makes frames behave like CSS Flexbox — content drives the size, with padding and gap between items. Resize the text and the button grows with it."
    - type: fill-blank
      question: "A reusable design element in Figma that can be instantiated many times is called a ___"
      answer: "component"
      explanation: "Components are master templates. Instances are copies that inherit the master's properties but can have individual overrides. Change the master and all instances update."
---

## Phase 1 — Learn (45 min)

**Why this matters:** Figma is the industry-standard design tool because it works in the browser, supports real-time collaboration, and is free for individuals. Learning Figma fundamentals unlocks every professional UI/UX and graphic design workflow — brand design, web design, app design, presentations.

- **Frames** — the container for every design in Figma. Not a div, not an artboard — a Frame. Each screen or section of your design lives in a Frame. Frames support constraints (how content moves when the frame resizes), Auto Layout, and clip content.
- **Layers panel** — shows every element in your file, nested inside Frames and Groups. Naming layers clearly is not optional in professional work — it's how you communicate with developers and teammates.
- **Basic shapes** — Rectangle (R), Ellipse (O), Line (L), Vector (V). Hold Shift to constrain proportions. Use the Fill, Stroke, and Effects properties on the right panel.
- **Text tool** — T key. Set font, weight, size, line height in the right panel. Text in Figma is live and selectable.
- **Components** — create a master component (Ctrl+Alt+K / Cmd+Option+K). Instances are copies. Change the master → all instances update. Override instance-level properties (text, colour) without affecting other instances.
- **Auto Layout** — add it to any Frame: Shift+A. Configures padding (space inside), gap (space between items), direction (row/column), and resizing behaviour. Makes components respond to content changes like CSS Flexbox.
- **Styles** — define reusable colour, text, and effect styles. Apply them to elements. Change the style definition → all elements using it update.
- **Exporting** — select anything → Export in the right panel. PNG (raster, for screens), SVG (vector, for icons), PDF (for print and presentations).

> **Key insight:** Build everything with Auto Layout from the start. It takes 10 extra seconds to set up and saves 10 minutes of manual resizing every time you change the content. Designers who don't use Auto Layout spend most of their time pixel-nudging.

## Phase 2 — Do (45 min)

- Create a new Figma file for a simple mobile app (use a Phone frame: 390×844)
- Build a screen with:
  - A header bar (Frame with Auto Layout): back arrow + title + action icon
  - Two cards (each a Frame with Auto Layout and a filled background): image placeholder, title, description, a "Read more" button
  - A bottom navigation bar: 4 icons with labels, Auto Layout, spaced evenly
- Create a Button component with Primary and Secondary variants
- Apply it as instances in the cards

## Review

If you update the master Button component to change its border-radius from 4px to 8px, how many instances on the screen need to be manually updated?
`;export{e as default};