var e=`---
title: "Developer Handoff + Design Specs"
duration: 90
level: 4
levelLabel: "LVL 4"
levelColor: "#f472b6"
videos:
  - id: "B242nuM3y2s"
    title: "Figma Developer Handoff Tutorial — Figma"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is Figma's Dev Mode and who uses it?"
      options: ["A mode for designers to write CSS", "A view optimised for developers that surfaces measurements, spacing values, colour tokens, and asset exports from the design without needing design tool knowledge", "A beta testing environment for Figma plugins", "A way to preview designs on a real device"]
      answer: 1
      explanation: "Dev Mode (toggle with Ctrl+Alt+D or the '</>' icon) shows the design from a developer's perspective. Clicking any element reveals: dimensions, padding, margin, font properties, colour values, and allows asset download. Developers use this instead of asking designers 'what's the padding on this button?'"
    - type: multiple-choice
      question: "What naming convention is most commonly used for design tokens and CSS variables?"
      options: ["PascalCase (ColorPrimary)", "kebab-case (color-primary) or camelCase (colorPrimary) depending on the development framework", "SCREAMING_SNAKE_CASE (COLOR_PRIMARY)", "No naming convention is standard"]
      answer: 1
      explanation: "CSS custom properties use kebab-case: --color-primary, --spacing-4. JavaScript frameworks often use camelCase: colorPrimary, spacing4. The key is consistency — pick one convention for your project and document it. Design tokens bridge Figma styles to code variables."
    - type: fill-blank
      question: "Annotations on a design file that specify dimensions, spacing, and component states for developers are called ___"
      answer: "redlines"
      explanation: "Redlines (or redline annotations) are measurement guides added to design files to communicate exact specifications to developers. The name comes from red ink used on paper blueprints. In Figma, Dev Mode largely automates this, but annotations are still valuable for interaction notes and non-obvious spacing decisions."
---

## Phase 1 — Learn (40 min)

**Why this matters:** A design is only complete when a developer can implement it correctly without guessing. The handoff is where many design decisions get lost — developers interpret ambiguous designs differently from what the designer intended. A clean handoff means the built product matches the design, reducing back-and-forth and accelerating delivery.

- **Figma Dev Mode:**
  - Toggle with Ctrl+Alt+D or click the \`</>\` icon in the toolbar.
  - Click any element: the right panel shows CSS properties (or platform-specific values), dimensions, padding, font specifications, and colours.
  - Click a colour swatch to copy in any format (HEX, RGB, HSL, CSS variable).
  - Developers can select their platform (Web, iOS, Android) to get platform-appropriate property names.
- **What to prepare for handoff:**
  - *Named styles* — all colours, text styles, and effects should be Figma Styles with names matching the design tokens. Developers see "color-primary" not "#3B82F6".
  - *Component documentation* — for each component, a documentation frame showing: all variants, the intended usage, what properties are configurable.
  - *Spacing annotations* — while Dev Mode shows spacing automatically, add explicit notes for anything non-obvious: "This card has 16px padding on all sides, except the bottom (12px) to align with the tab bar."
  - *Interaction notes* — what happens on tap, on long press, on swipe? Dev Mode doesn't capture intent — add interaction annotations as sticky notes or text labels.
- **Exporting assets:**
  - Select any layer → right panel → Export section → set format (PNG for rasterised, SVG for icons/vectors, PDF for documents).
  - Set export scales: 1x for standard, 2x and 3x for Retina screens.
  - Icons should always be SVG. Photos can be PNG (2x). Use WebP for web production.
  - Mark assets for export in advance (the developer should not have to ask "can you export this icon?").
- **Design Token to Code:**
  - Figma Tokens plugin (or Figma's native Variables feature) allows exporting design tokens as JSON, which developers can import into their CSS framework as variables.
  - Token format example: \`{ "color-primary": { "value": "#3B82F6", "type": "color" } }\`
  - This bridges the gap between Figma Styles and CSS custom properties — one source of truth for both.

> **Key insight:** The best handoff happens when the developer barely needs to ask anything. Name every style. Document every interaction. Export every asset in the right format. The time you spend organising the handoff is the time you save in revision rounds.

## Phase 2 — Do (40 min)

Prepare a developer handoff for your hi-fi prototype:
1. **Audit your Figma file:**
   - Are all colours applied as Styles (not raw hex values)? If not, fix it.
   - Are all text styles applied as Text Styles? If not, fix it.
   - Are all components named clearly? Is the component hierarchy logical?
2. **Add interaction annotations** to the 3 key screens:
   - Use a sticky note frame (press F, draw a small frame, fill yellow, add text) for each non-obvious interaction
   - e.g. "Tap card → expands with slide-up animation (200ms)" or "Swipe left on list item → shows Delete button (red, right-aligned)"
3. **Export all icons as SVG:**
   - Select each icon frame → right panel → Export → SVG → Export
   - Organise them in a folder named "assets/icons"
4. **Open Dev Mode** (Ctrl+Alt+D) and test it as a developer would:
   - Click the primary button — what does it show? Do values match your design tokens?
   - Click a card component — does the spacing match what you intended?
   - Check that your text styles appear with your token names
5. Write a brief "Handoff Notes" text frame in Figma:
   - 3 specific interaction behaviours that aren't self-evident
   - The font stack (Google Fonts name + fallbacks)
   - Any assets that need special treatment (e.g. "The logo must always be on white or dark backgrounds only")

## Review

What is the cost of a poorly prepared handoff? List 3 specific problems that occur when a developer receives an incomplete or inconsistently named design file.
`;export{e as default};