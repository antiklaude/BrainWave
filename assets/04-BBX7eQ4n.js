var e=`---
title: "Functions + Scope"
duration: 90
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
videos:
  - id: "rfscVS0vtbw"
    title: "Learn Python – Full Course for Beginners — freeCodeCamp"
  - id: "_uQrJ0TkZlc"
    title: "Python Tutorial for Beginners — Programming with Mosh"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is the output of this code?\\ndef add(a, b=10):\\n    return a + b\\nprint(add(5))"
      options: ["Error", "5", "15", "10"]
      answer: 2
      explanation: "b has a default value of 10. Calling add(5) uses a=5, b=10, so returns 15."
    - type: multiple-choice
      question: "A variable defined inside a function is:"
      options: ["Global", "Local", "Universal", "Shared"]
      answer: 1
      explanation: "Variables defined inside a function are local — they only exist while the function runs and are invisible outside it."
    - type: fill-blank
      question: "The keyword used to define a function in Python is ___"
      answer: "def"
      explanation: "def is short for define. Every function definition starts with def, then the name, then parentheses."
---

## Phase 2 — Learn (40 min)

**Why this matters:** Functions let you write code once and call it everywhere. Without functions, every bug you fix requires you to find and fix the same code in 5 places. With functions, you fix it once.

- **def keyword** — defines a function: \`def greet(name):\` followed by an indented body.
- **return** — sends a value back to wherever the function was called. Without \`return\`, the function returns \`None\`.
- **Parameters vs arguments** — parameters are the names in the function definition (\`def add(a, b)\`), arguments are the values you pass when calling (\`add(3, 4)\`).
- **Default parameters** — \`def greet(name="friend"):\` makes \`name\` optional. If the caller doesn't pass it, "friend" is used.
- **Keyword arguments** — call with \`greet(name="Alice")\` to make the intent obvious, in any order.
- **Local scope** — variables created inside a function only exist inside that function. The function is a sealed room.
- **Global scope** — variables created at the top level of a file exist everywhere. Avoid modifying globals inside functions — it creates hidden dependencies that are hard to debug.

> **Key insight:** If you find yourself copying and pasting the same block of code twice, that's a function waiting to be written. Functions are the single biggest productivity unlock in programming.

## Phase 2 — Do (40 min)

- Take the FizzBuzz code from Session 03 and refactor it into a function \`fizzbuzz(n)\` that takes a number and returns the correct string. Test it with \`print(fizzbuzz(15))\`.
- Write a \`celsius_to_fahrenheit(temp)\` function that returns the converted value. Then write \`fahrenheit_to_celsius(temp)\`. Test both.
- Write a function \`greet(name, greeting="Hello")\` that prints the greeting. Call it with just a name, then with both arguments.

## Review

What is the difference between a local and a global variable? Why is it generally a bad idea to modify a global variable inside a function?
`;export{e as default};