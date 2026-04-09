var e=`---
title: "Usability Testing + Heuristic Evaluation"
duration: 90
level: 4
levelLabel: "LVL 4"
levelColor: "#f472b6"
videos:
  - id: "0YL0xoSmyZI"
    title: "Usability Testing Tutorial — NNGroup"
  - id: "6Bw0n6Fl5Lw"
    title: "Nielsen's 10 Usability Heuristics Explained — CareerFoundry"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "According to Nielsen's research, how many users are needed to find approximately 85% of usability problems in a product?"
      options: ["1–2 users", "5 users", "20 users", "100 users"]
      answer: 1
      explanation: "Nielsen's research shows that 5 users typically reveal ~85% of usability problems. Testing with more users finds diminishing returns — problems 6, 7, and 8 are often the same as problems 1–5 with different users. The remaining budget is better spent fixing the found problems and testing again."
    - type: multiple-choice
      question: "What is the 'think-aloud protocol' in usability testing?"
      options: ["The facilitator explains the design to the user", "The user verbalises their thoughts, decisions, and reactions in real time as they use the product — without being helped or corrected by the facilitator", "The user reads the design brief aloud", "The team discusses findings out loud after testing"]
      answer: 1
      explanation: "Think-aloud means asking users to say what they're thinking as they interact with the product: 'I'm looking for the settings... I'd expect it to be in the top right... there it is.' This stream of consciousness reveals the user's mental model and exactly where they get confused."
    - type: fill-blank
      question: "The Nielsen heuristic that states users should always be able to undo an action and leave an unwanted state is called 'User Control and ___'"
      answer: "Freedom"
      explanation: "'User Control and Freedom' means users need a clear exit — an undo button, a cancel option, a back arrow. Users who feel trapped in a flow (can't undo, can't go back) lose trust in the product. Provide clear emergency exits."
---

## Phase 1 — Learn (40 min)

**Why this matters:** A prototype is just a hypothesis. Usability testing is how you find out if your hypothesis is right. Most first prototypes are wrong in at least one important way — the designers who build successful products are not the ones who guess correctly, they're the ones who find out what's wrong early and fix it before development.

- **The 5-User Rule:**
  - Testing with 5 users reveals ~85% of usability problems. Each additional user after that returns fewer new findings.
  - The practical implication: run 3–5 user tests, find and fix problems, then test 3–5 more. Repeated small tests beat one large test.
- **Task-Based Testing Script:**
  - Never ask "is this easy to use?" — users will say yes to please you.
  - Give tasks: "Please show me how you would [complete a specific goal]." The task must be realistic and specific.
  - Example tasks: "You've just installed the app. Show me how you'd add your first item." "You want to change your account email. How would you do that?"
  - Write 4–6 tasks per session. Each should cover a different part of the product.
  - Script the intro: "We're testing the design, not you. There are no right or wrong answers. If anything is confusing, that's useful feedback for us."
- **Think-Aloud Protocol:**
  - Ask the user to narrate their thoughts as they interact. "Tell me what you're thinking as you go."
  - The facilitator's job: observe, take notes, don't help. If the user gets stuck, wait 30 seconds before asking "what would you do next?" Not "try tapping there."
- **Analysing findings:**
  - After testing, write down every observation (not interpretation). "User tapped back arrow 3 times on checkout screen" — not "user found checkout confusing."
  - Categorise by frequency (how many users) and severity (how much it blocks the task).
  - Prioritise: fix high-frequency + high-severity problems first.
- **Nielsen's 10 Usability Heuristics** — Jakob Nielsen's principles for evaluating interface usability:
  1. *Visibility of system status* — always show users what's happening (loading spinners, progress bars)
  2. *Match between system and real world* — use user language, not developer jargon
  3. *User control and freedom* — provide undo, cancel, back
  4. *Consistency and standards* — same actions should look and work the same way across the app
  5. *Error prevention* — prevent errors before they happen (confirmation dialogs, format hints)
  6. *Recognition over recall* — show options rather than requiring users to remember them
  7. *Flexibility and efficiency* — expert users need shortcuts; beginners need guidance
  8. *Aesthetic and minimalist design* — every unnecessary element competes for attention
  9. *Help users recognise, diagnose, and recover from errors* — error messages must be specific and actionable
  10. *Help and documentation* — if users need documentation, something in the design failed

> **Key insight:** The most important skill in usability testing is staying quiet. Every time you explain something or hint at the answer, you lose the feedback. Real users won't have you there to help them — if they can't figure it out alone, that's exactly what you need to know.

## Phase 2 — Do (40 min)

Run a usability test on your hi-fi prototype:
1. Write a 4-task test script for the prototype from Session 07:
   - Task 1: an onboarding or sign-up action
   - Task 2: the core task of the app
   - Task 3: a secondary action (settings, search, filter)
   - Task 4: an error recovery or cancel action
2. Find one real person (not a designer, ideally not a close friend — someone who will actually get confused)
3. Run the test:
   - Read them the intro script (you're testing the design, not them)
   - Ask them to think aloud
   - Give each task one at a time
   - Take notes — what they say, what they do, where they stop
4. After the session: write 3 specific findings in the format:
   - "When [user did X], they [got confused / could not complete / did unexpected action] because [the design did Y]."
5. For each finding, identify which Nielsen heuristic it violates.

## Review

Why is observing users more valuable than asking users what they think of the design? What specifically do you learn from observation that you can't learn from a survey or interview?
`;export{e as default};