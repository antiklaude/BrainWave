var e=`---
title: "Control Flow — if/else + Loops"
duration: 90
level: 1
levelLabel: "LVL 1"
levelColor: "#6ee7b7"
videos:
  - id: "rfscVS0vtbw"
    title: "Learn Python – Full Course for Beginners — freeCodeCamp"
  - id: "t8pPdKYpowI"
    title: "Python Tutorial for Beginners (Learn Python in 5 Hours) — TechWorld with Nana"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does range(3) produce?"
      options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 2, 3]", "[1, 2]"]
      answer: 1
      explanation: "range(3) produces 0, 1, 2 — it starts at 0 and stops before 3."
    - type: multiple-choice
      question: "Which keyword immediately exits a loop?"
      options: ["exit", "stop", "break", "return"]
      answer: 2
      explanation: "break immediately terminates the enclosing loop. continue skips to the next iteration instead."
    - type: fill-blank
      question: "The keyword used for 'otherwise if' in Python is ___"
      answer: "elif"
      explanation: "elif (else if) lets you chain multiple conditions. Only the first True branch runs."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Programs without decisions are just calculators. Decisions and loops are what let a program respond differently to different inputs, repeat actions without you typing them 100 times, and actually do useful work.

- **if / elif / else** — executes a block only when a condition is \`True\`. The \`elif\` (else-if) lets you chain conditions. The \`else\` catches everything that didn't match.
- **Comparison operators** — \`==\` (equal), \`!=\` (not equal), \`<\`, \`>\`, \`<=\`, \`>=\`. Note: \`==\` is comparison, \`=\` is assignment.
- **Boolean logic** — combine conditions with \`and\` (both must be True), \`or\` (at least one must be True), \`not\` (inverts the result).
- **for loop with range()** — \`for i in range(5):\` runs the body 5 times with \`i\` going 0, 1, 2, 3, 4. \`range(start, stop)\` and \`range(start, stop, step)\` give more control.
- **while loop** — keeps running as long as a condition is True. Use it when you don't know how many iterations you need in advance.
- **break** — immediately exits the loop, regardless of the condition.
- **continue** — skips the rest of the current iteration and goes to the next one.

> **Key insight:** A \`while True:\` loop with a \`break\` inside is the standard pattern for "keep asking until valid input." You'll use this pattern every time you build an interactive CLI program.

## Phase 2 — Do (40 min)

- Write FizzBuzz: for numbers 1–100, print "Fizz" if divisible by 3, "Buzz" if divisible by 5, "FizzBuzz" if both, otherwise the number. This is a real interview question — get it working step by step, not all at once.
- Write a while loop that keeps asking the user \`input("Guess a number: ")\` until they enter 7. Print "You got it!" when correct.
- Use a for loop with range() to print a multiplication table for 7 (7×1 through 7×10)

## Review

What is the difference between \`break\` and \`continue\`? Write a loop that uses each one and describe what happens at each step.
`;export{e as default};