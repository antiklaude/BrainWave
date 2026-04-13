var e=`---
title: "Figma Fundamentals + Components + Auto Layout"
duration: 110
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "FTFaQWZBqQ8"
    title: "Figma Tutorial for Beginners — Figma"
  - id: "Zj163lgt_kI"
    title: "Figma Components and Auto Layout — DesignCourse"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is the difference between a Component and an Instance in Figma?"
      options: ["They are the same thing with different names", "The Component is the master — changes to it propagate to all Instances. An Instance is a copy that inherits from the Component but can have local overrides.", "Instances are read-only and cannot be edited", "Components can only be used once per file"]
      answer: 1
      explanation: "The Component (master) is the source of truth. Change the button colour on the Component and all 50 Instances on all 20 screens update instantly. An Instance can override specific properties locally (e.g. button text) without breaking the Component link."
    - type: multiple-choice
      question: "What problem does Auto Layout solve in Figma?"
      options: ["It automatically downloads fonts", "It makes frames resize dynamically based on their content — buttons grow with longer text, lists expand when items are added, without manual repositioning", "It automatically aligns all layers", "It generates code from designs"]
      answer: 1
      explanation: "Without Auto Layout, if you change a button's text from 'OK' to 'Submit Payment', the button doesn't resize — you have to manually adjust it. With Auto Layout, the button grows automatically. This is how real developers' components work, so designing with Auto Layout produces more realistic and implementable designs."
    - type: fill-blank
      question: "In Figma, the container type that defines a screen or section and has its own layout rules (unlike a Group) is called a ___"
      answer: "Frame"
      explanation: "Frames are the Figma equivalent of artboards. They define a fixed canvas size (e.g. iPhone 14 Pro: 393×852px) and can have independent layout grids, Auto Layout settings, and clipping. Groups are just organisational containers with no layout properties."
---

## Phase 1 — Learn (50 min)

**Why this matters:** Figma is the industry-standard design tool because it sits at the intersection of design and collaboration. Components and Auto Layout are not convenience features — they're how professional teams maintain consistency across hundreds of screens. Learning them properly is the difference between a prototype that looks right and a design system that actually scales.

- **Figma fundamentals:**
  - *Frames* — the container for a screen or section. Create with F (rectangle, then set frame). Set dimensions to device presets (e.g. iPhone 16 Pro: 393×852). Frames have their own layout grid and properties.
  - *The Layers panel* (left side) — hierarchy of every object. Rename layers (double-click) for cleaner organisation. Organise with frames and groups.
  - *Shapes and text* — R = rectangle, O = ellipse, L = line, T = text. Hold Shift while drawing to constrain proportions.
  - *Constraints* — how an element behaves when its parent frame is resized. Set to Left, Right, Centre, Scale in the right panel. Critical for responsive designs.
  - *Layout Grid* — set on a Frame. 12-column grid for desktop, 4-column for mobile. Use it to align elements consistently.
- **Components:**
  - Create a component: design an element (e.g. a button), select it, right-click → Create Component (or Ctrl+Alt+K).
  - The Component (master) has a purple icon. Use Ctrl+D or Option+drag to create Instances.
  - Editing the Component updates all Instances. Editing an Instance only changes that copy locally.
  - *Variants* — one component with multiple states (e.g. Button: Primary / Secondary / Disabled / Hover). Create by right-clicking → Add Variant. Define variant properties in the right panel.
- **Auto Layout:**
  - Select a frame or group, press Shift+A to add Auto Layout.
  - Set direction (horizontal or vertical), padding (space between content and edge), gap (space between items).
  - Items in the frame now stack and resize automatically. The frame grows to fit its content.
  - Set child elements to "Fill Container" to stretch to available width, or "Hug Contents" to shrink to fit.
  - Auto Layout is how you build components that behave like real CSS flexbox — because it mirrors how developers implement layouts.

> **Key insight:** Never duplicate UI elements manually. Create a Component once, use Instances everywhere. If you change a button's corner radius later, one edit updates your entire design. Manual duplication produces 50 slightly inconsistent buttons that each need fixing individually.

## Phase 2 — Do (50 min)

Build a basic UI component library:
1. Create a new Figma file called "[YourApp] Components"
2. **Button component with 3 variants:**
   - Design a primary button (filled background, white text, 8px radius)
   - Right-click → Create Component
   - Add Variant: create secondary (outlined) and disabled (grey, 50% opacity) versions
   - Set variant property: "Type" with values "Primary", "Secondary", "Disabled"
   - Add Auto Layout to each button state (padding: 12px vertical, 24px horizontal)
3. **Input field component:**
   - Design: 1px border, 8px radius, placeholder text, label above
   - Create Component with variants: Default, Focused (highlighted border), Error (red border + error text)
4. **Card component:**
   - Image placeholder (grey box), title, body text, a button at the bottom
   - Add Auto Layout: vertical, 16px gap, 16px padding
5. **Navigation bar:**
   - 4 tab icons (use Lucide icons from the Figma Community), active state highlighted
   - Auto Layout: horizontal, space between
6. Place Instances of all components on a test frame (any screen from Session 03) and verify they behave correctly

## Review

What is the difference between a Variant and a separate Component? When would you use variants vs separate components for the different states of a button?
`;export{e as default};