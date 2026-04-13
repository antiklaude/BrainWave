var e=`---
title: "Low-Fidelity Prototyping"
duration: 90
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
videos:
  - id: "yafaGNFu8Eg"
    title: "Lo-Fi Prototype Testing — UX Playground"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "Why is a low-fidelity prototype more valuable for early user testing than a high-fidelity one?"
      options: ["Because it's quicker to load", "Because users focus their feedback on flows and structure rather than visual details — they're less likely to comment on button colour when buttons are grey boxes", "Because developers prefer grey wireframes", "Because high-fidelity prototypes can't be tested with users"]
      answer: 1
      explanation: "High fidelity triggers aesthetic feedback ('I don't like that font'). Low fidelity forces structural feedback ('I can't find the settings'). You want structural feedback first because structure is expensive to change later. Polish only once the structure is validated."
    - type: multiple-choice
      question: "In Figma, how do you connect two frames to create a prototype link?"
      options: ["Draw a line between them with the Pen tool", "Switch to Prototype mode in the right panel, hover over an element, drag the blue connection handle to the destination frame", "Use the Link tool in the toolbar", "Add a hyperlink to the text"]
      answer: 1
      explanation: "In Figma's Prototype panel (right sidebar), click an element in a frame. A blue circle appears on the right edge. Drag it to the destination frame to create an interaction. Set the trigger (On Click, On Hover) and action (Navigate To, Open Overlay, etc.)."
    - type: fill-blank
      question: "A diagram that shows all screens as boxes connected by arrows indicating user navigation paths is called a ___ flow"
      answer: "user"
      explanation: "A user flow diagram maps the steps a user takes through a product to complete a task. Boxes = screens/steps, arrows = navigation actions, diamonds = decision points (yes/no, logged in or not). It shows the designer every path a user can take."
---

## Phase 1 — Learn (40 min)

**Why this matters:** A prototype is a testable hypothesis. It simulates the experience of using a product without building the actual product. The faster you can get a prototype in front of a real user, the sooner you discover what's wrong — and the cheaper it is to fix. Low-fidelity prototypes take minutes to create and hours to learn from.

- **Paper prototyping:**
  - Draw screens on paper or index cards. When a user "taps" on something, you swap the card for the next screen by hand.
  - Setup: print or draw 5–10 key screens. Sit with the user, give them a task ("find your order history"). Watch and listen — don't help or explain.
  - Record: what did they tap first? Where did they pause or look confused? What did they say out loud?
  - This is the cheapest form of testing — 10 minutes of paper prototyping can invalidate an entire navigation structure.
- **Figma clickable lo-fi prototype:**
  - Use the wireframes from Session 03 as frames in Figma.
  - Switch to the Prototype tab in the right panel.
  - Click an element (button, navigation item), drag the blue connector to the destination frame.
  - Set the interaction: On Click → Navigate To [frame name].
  - Press Play (▷ in the top-right) to view the clickable prototype. Share the link to test with others.
- **User Flow Diagrams:**
  - Boxes = screens, arrows = navigation actions, diamonds = decision points (e.g. "Is the user logged in?")
  - Draw the happy path (the most common successful task completion) first.
  - Then add alternative paths (errors, edge cases, back navigation).
  - Keep it task-focused — one flow per user goal.
- **Prototype scope** — do not prototype everything. Focus on the 3 most critical user tasks. Unused parts of the prototype waste time and confuse testers ("what happens if I tap here?").

> **Key insight:** The only way to know if a prototype works is to watch someone use it. Don't ask "do you like it?" — ask them to complete a specific task and watch what they do. Silence and hesitation are data. Confusion is feedback. You're testing the design, not the user.

## Phase 2 — Do (40 min)

Make your wireframes clickable and test them:
1. Open your Figma wireframes from Session 03
2. Switch to Prototype mode in the right panel
3. Connect the frames:
   - Home screen buttons → appropriate destination screens
   - Back arrows → previous screens
   - Any navigation bar items → their screens
4. Set all interactions to On Click → Navigate To
5. Preview the prototype (press ▷) and walk through it yourself
6. Find one person (family member, friend, colleague) and ask them to try one task: "Without me explaining anything, can you [core task]?"
7. Watch without helping. Note:
   - Where did they hesitate?
   - What did they tap that you didn't expect?
   - What did they say?
8. Write down 2 things you would change based on what you observed.

## Review

What is the difference between asking a user "Is this easy to use?" and watching them try to complete a task? Why does the second approach produce better feedback?
`;export{e as default};