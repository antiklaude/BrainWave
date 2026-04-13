var e=`---
title: "DOM Manipulation + Events"
duration: 100
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "0ik6X4DJKCc"
    title: "JavaScript DOM Manipulation – Full Course for Beginners — freeCodeCamp"
  - id: "y17RuWkWdn8"
    title: "DOM Manipulation Basics — Web Dev Simplified"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does document.querySelector('.card') return?"
      options: ["All elements with class 'card'", "The first element with class 'card'", "The element with id 'card'", "An error if no match"]
      answer: 1
      explanation: "querySelector returns the first matching element. querySelectorAll returns all matches as a NodeList."
    - type: multiple-choice
      question: "Which property safely updates an element's visible text without interpreting markup?"
      options: ["element.html", "element.textContent", "element.source", "element.nodeText"]
      answer: 1
      explanation: "textContent sets plain text — any special characters are escaped automatically. It is the safe default for displaying user-provided content."
    - type: fill-blank
      question: "To listen for a button click and call a function 'handleClick', write ___"
      answer: "button.addEventListener('click', handleClick)"
      explanation: "addEventListener(event, callback) attaches a handler. The callback runs every time the event fires."
---

## Phase 1 — Learn (45 min)

**Why this matters:** The DOM (Document Object Model) is the browser's live representation of the HTML on the page. JavaScript can read and change any part of it at any time — updating text, toggling styles, creating new elements. This is how every interactive feature on the web works.

- **document.querySelector(selector)** — finds the first matching element using any CSS selector. Returns \`null\` if not found.
- **document.querySelectorAll(selector)** — returns a NodeList of all matches. Loop with \`forEach()\`.
- **element.textContent** — read or set the visible text of an element. Always prefer this for displaying content — it treats the value as plain text, never as markup.
- **element.classList** — \`.add('class')\`, \`.remove('class')\`, \`.toggle('class')\` — great for toggling visible states without writing inline style changes.
- **element.style** — \`element.style.backgroundColor = "red"\`. Use for dynamic, programmatic styles; use \`classList\` for predefined states.
- **createElement + appendChild** — create elements with \`document.createElement('div')\`, set their \`textContent\`, and add to the page with \`parent.appendChild(newEl)\`. This is the safe way to add dynamic content.
- **addEventListener(event, callback)** — \`button.addEventListener('click', () => { })\`. Events: \`click\`, \`input\`, \`change\`, \`submit\`, \`keydown\`, \`mouseover\`.
- **event.target** — inside an event handler, \`event.target\` is the element that triggered the event.
- **event.preventDefault()** — prevents the browser's default behaviour (e.g., stop a form from submitting and refreshing the page).

> **Key insight:** When displaying user-provided content, always use \`textContent\` or \`createElement\` + \`appendChild\`. This ensures the content is treated as plain text and cannot affect page behaviour — a critical habit for building secure websites.

## Phase 2 — Do (45 min)

- Build a **live character counter** for a textarea:
  - Show remaining characters as the user types: \`addEventListener('input', ...)\`
  - Colour turns red when fewer than 10 characters remain (use \`classList.toggle\`)
- Build a **dark/light mode toggle**:
  - A button that toggles a \`dark-mode\` class on the \`body\`
  - Define light/dark styles using CSS variables for each state

## Review

How do you create a new paragraph element, set its text, and add it to a div with the id "container"? Write the three lines of JavaScript required.
`;export{e as default};