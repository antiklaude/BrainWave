# BrainWave — New Course Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create full course content (session `.md` files + ladder theory guides) for 7 coming-soon courses on BrainWave, with real curated YouTube videos, enriched theory in Phase 1, and quick-check quizzes per session.

**Architecture:** Each course is independent. For each course: (1) research agent finds best YouTube videos per session topic, (2) content is written as `.md` files following CONTENT-GUIDE.md format, (3) ladder guide written as a standalone theory doc, (4) peer review agent validates quality, (5) commit. Repeat per course.

**Tech Stack:** Markdown files, YAML frontmatter, YouTube video IDs, BrainWave CONTENT-GUIDE.md format

**Spec:** `docs/superpowers/specs/2026-04-06-new-courses-content-design.md`
**Content Guide:** `docs/CONTENT-GUIDE.md`

---

## File Map

```
src/data/courses/
  python-programming/sessions/
    01.md  02.md  03.md  04.md  05.md  06.md  07.md
    08.md  09.md  10.md  11.md  12.md  13.md  14.md  15.md

  web-dev/sessions/
    01.md  02.md  03.md  04.md  05.md  06.md
    07.md  08.md  09.md  10.md  11.md  12.md

  azure-devops/sessions/
    01.md  02.md  03.md  04.md  05.md  06.md
    07.md  08.md  09.md  10.md  11.md  12.md

  graphic-design/sessions/
    01.md  02.md  03.md  04.md  05.md
    06.md  07.md  08.md  09.md  10.md

  3d-modelling/sessions/
    01.md  02.md  03.md  04.md  05.md  06.md  07.md
    08.md  09.md  10.md  11.md  12.md  13.md  14.md  15.md

  3d-printing/sessions/
    01.md  02.md  03.md  04.md  05.md  06.md  07.md  08.md

  ui-ux-design/sessions/
    01.md  02.md  03.md  04.md  05.md
    06.md  07.md  08.md  09.md  10.md

docs/ladder-guides/
  python-programming.md
  web-dev.md
  azure-devops.md
  graphic-design.md
  3d-modelling.md
  3d-printing.md
  ui-ux-design.md
```

---

## Session File Format (reference for all tasks)

Every session file follows this exact structure. Do not deviate.

```markdown
---
title: "Session Title Here"
duration: 90
level: 1
levelLabel: "LVL 1"
levelColor: "#6ee7b7"
videos:
  - id: "YOUTUBE_ID_HERE"
    title: "Video Title — Channel Name"
  - id: "YOUTUBE_ID_HERE"
    title: "Video Title — Channel Name"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "Question text?"
      options: ["Option A", "Option B", "Option C", "Option D"]
      answer: 2
      explanation: "Why this answer is correct, explained simply."
    - type: fill-blank
      question: "The Python keyword to define a function is ___"
      answer: "def"
      explanation: "def is short for define."
---

## Phase 1 — Learn (X min)

**Why this matters:** 2–3 sentences explaining the real-world relevance of this topic in plain English. No jargon without explanation.

- **Concept name** — what it is and why it works, in one sentence
- **Concept name** — what it is and why it works, in one sentence
- **Concept name** — what it is and why it works, in one sentence

> **Key insight:** One memorable rule of thumb that a beginner will remember and apply immediately.

## Phase 2 — Do (X min)

- Specific, actionable task — no ambiguity about what to do
- Specific, actionable task — tool/command/action named explicitly
- Specific, actionable task — ends with something the learner can see or hear

## Review

One question the learner should be able to answer after this session. If they can't answer it, they should redo Phase 1 before continuing.
```

---

## Ladder Guide Format (reference for all tasks)

Each level gets this structure inside the ladder guide doc:

```markdown
## LVL N — [Level Title]

**Milestone:** [What the learner can do after this level]

### What this level is about

2–3 paragraph plain-English explanation of this level's theme. What problems does it solve? Why does this order make sense? What mental shift happens at this level?

### Core concepts

- **Concept name** — Full sentence explanation. Not a bullet list of jargon. Explain it like the reader is smart but has never encountered this domain.
- **Concept name** — Full sentence explanation with an analogy if the concept is abstract.
- **Concept name** — Full sentence explanation.

> **Key insight:** The one thing to remember from this level that will make the next level easier.

### What you will be able to do after this level

By the end of LVL N you will be able to: [3–5 specific, concrete capabilities listed as bullets]
```

---

## YouTube Sourcing Rules (apply to every task)

When researching videos for a session:
1. Search for the exact topic + the tool name (e.g. "Python f-strings tutorial", "Blender UV unwrapping beginner")
2. Prefer these channels in order: freeCodeCamp, Traversy Media, Kevin Stratvert, Fireship, Corey Schafer (Python), Blender Guru/CG Cookie (Blender), DesignCourse (design), NetworkChuck (DevOps)
3. Video must cover the session topic directly — not a 10-hour bootcamp where the topic appears at minute 45
4. Prefer videos under 30 min for concept sessions, under 60 min for project sessions
5. Extract only the video ID from the URL: `youtube.com/watch?v=VIDEO_ID` → use `VIDEO_ID`
6. Include 1–2 videos per session (never 0, rarely 3+)
7. Verify the video title and channel match the content described

---

## Peer Review Prompt (use this exact prompt for all review agents)

```
You are a curriculum quality reviewer for BrainWave, a free beginner learning platform.

Review the following course content. For each session file, answer:
1. Is the theory in Phase 1 accurate and explained clearly for a complete beginner?
2. Are the Phase 2 tasks specific enough that a beginner could follow them without help?
3. Are the YouTube videos a good match for the session topic?
4. Is there a simpler way to explain any concept that would deliver more value?
5. Are the quiz questions fair, specific, and testing the right things?

For the ladder guide, answer:
6. Does each level's prose clearly explain WHY this level matters, not just WHAT it covers?
7. Is there any jargon used without explanation?

Return: APPROVED or LIST OF SPECIFIC CHANGES NEEDED (file + line-level feedback).
```

---

## Task 1 — Python Programming (15 sessions)

**Spec reference:** Course 1 in `docs/superpowers/specs/2026-04-06-new-courses-content-design.md`
**Output dir:** `src/data/courses/python-programming/sessions/`
**Ladder guide:** `docs/ladder-guides/python-programming.md`

### Session specs

| File | Title | Level | Color | Duration | Key topics |
|---|---|---|---|---|---|
| 01.md | Variables, Data Types + f-strings | LVL 1 | #6ee7b7 | 90 | int, str, float, bool, print(), f-strings, type() |
| 02.md | Strings + Reading Error Messages | LVL 1 | #6ee7b7 | 90 | str methods, slicing, NameError/TypeError/IndentationError tracebacks |
| 03.md | Control Flow — if/else + loops | LVL 1 | #6ee7b7 | 90 | if/elif/else, for, while, range(), break, continue |
| 04.md | Functions + Scope | LVL 2 | #7dd3fc | 90 | def, return, parameters, local vs global scope |
| 05.md | Lists + Dictionaries | LVL 2 | #7dd3fc | 100 | list methods, dict methods, iteration, list comprehension |
| 06.md | Mini Project — Number Guesser CLI | LVL 2 | #7dd3fc | 120 | input(), random module, game loop, full CLI program |
| 07.md | Classes + Objects | LVL 3 | #fbbf24 | 100 | class, __init__, self, methods, instances |
| 08.md | Modules + pip + venv | LVL 3 | #fbbf24 | 90 | import, pip install, requirements.txt, venv, .gitignore |
| 09.md | File I/O + Exception Handling | LVL 3 | #fbbf24 | 90 | open(), read/write, with, try/except/finally |
| 10.md | APIs + JSON + requests | LVL 4 | #f472b6 | 100 | requests.get(), .json(), status codes, API keys, headers |
| 11.md | Intro to pandas + CSV Analysis | LVL 4 | #f472b6 | 100 | pd.read_csv(), df.head(), df.describe(), groupby, plot |
| 12.md | Data Project — Real Dataset | LVL 4 | #f472b6 | 120 | full analysis pipeline, matplotlib, insights from real CSV |
| 13.md | Web Scraping with BeautifulSoup | LVL 5 | #a78bfa | 110 | requests + bs4, find(), find_all(), CSV export |
| 14.md | Inheritance + Advanced OOP | LVL 5 | #a78bfa | 90 | super(), class hierarchy, method overriding, __str__ |
| 15.md | Final Project — CLI Tool | LVL 5 | #a78bfa | 120 | argparse, file I/O, class design, full working tool |

- [ ] **Step 1: Create output directory**
```bash
mkdir -p /Users/karthickragavr/src/BrainWave/src/data/courses/python-programming/sessions
mkdir -p /Users/karthickragavr/src/BrainWave/docs/ladder-guides
```

- [ ] **Step 2: Research YouTube videos**

Dispatch a research agent with this prompt:
```
Search YouTube for the best beginner tutorial videos for each of these Python topics.
For each topic, find 1-2 videos. Prefer: freeCodeCamp, Corey Schafer, Traversy Media, Tech With Tim, Sentdex.
Videos must cover the topic directly (not buried in a longer course), under 30 min for concept topics, under 60 min for project topics.

Topics to research:
1. Python variables, data types, f-strings (beginner)
2. Python strings and string methods (beginner)
3. Python control flow if else loops (beginner)
4. Python functions and scope (beginner)
5. Python lists and dictionaries (beginner)
6. Python beginner project number guessing game CLI
7. Python classes and objects OOP (beginner)
8. Python modules pip virtual environment venv
9. Python file handling and exception handling
10. Python requests library API JSON tutorial
11. Python pandas tutorial beginner CSV analysis
12. Python data analysis project beginner
13. Python web scraping BeautifulSoup tutorial
14. Python inheritance OOP advanced
15. Python argparse CLI tool tutorial

Return format:
Session N — Topic
  Video 1: [YouTube URL] | [Channel] | [Title] | [Duration]
  Video 2: [YouTube URL] | [Channel] | [Title] | [Duration]
```

- [ ] **Step 3: Write sessions 01–03 (LVL 1)**

Write `src/data/courses/python-programming/sessions/01.md` following the session format above. Session 01 must:
- Explain why variables matter (store data so programs can remember things)
- Cover: int, str, float, bool, type(), print()
- Introduce f-strings immediately alongside print() — `print(f"Hello {name}")`
- Phase 2: create one variable of each type, use f-strings to print them all
- Quiz: 3 questions testing type recognition and f-string syntax

Write `02.md`:
- Why this matters: you will hit errors every session — learning to read them is the most valuable skill in Python
- Cover: str indexing (`s[0]`, `s[-1]`, `s[1:4]`), `.upper()`, `.lower()`, `.strip()`, `.split()`, `.replace()`
- Cover: how to read a traceback — line number, error type, error message
- Show examples of NameError, TypeError, IndentationError with plain-English explanation of each
- Phase 2: fix 3 intentionally broken code snippets using the traceback

Write `03.md`:
- Why this matters: programs without decisions are just calculators
- Cover: if/elif/else, comparison operators (==, !=, <, >), boolean logic (and, or, not), for loop with range(), while loop, break, continue
- Phase 2: FizzBuzz (the real one, explained step by step), then a number range loop

- [ ] **Step 4: Write sessions 04–06 (LVL 2)**

Write `04.md` (Functions):
- Why this matters: functions let you write code once and use it everywhere
- Cover: def, return, positional vs keyword arguments, default parameters, local vs global scope
- Key insight: if you copy-paste code twice, that's a function waiting to be written
- Phase 2: refactor the FizzBuzz from Session 03 into a function; write a temperature converter function

Write `05.md` (Lists + Dicts):
- Cover: list creation, append/remove/pop, indexing, slicing, iteration, len()
- Cover: dict creation, get(), keys(), values(), items(), updating values, checking existence
- Cover: one-line list comprehension `[x*2 for x in numbers]`
- Phase 2: build a simple contact book dict — add, look up, delete contacts

Write `06.md` (Mini Project — Number Guesser):
- This is a project session — Phase 1 is shorter (30 min), Phase 2 is longer (75 min)
- Phase 1: plan the game logic on paper first (pseudocode), introduce `import random`, `random.randint()`
- Phase 2: build the full game — random number, input loop, too high/too low hints, win condition, play again prompt
- Review: can you add a difficulty setting (easy = 10 tries, hard = 5)? Try it.
- Quiz: questions about random module and game loop logic

- [ ] **Step 5: Write sessions 07–09 (LVL 3)**

Write `07.md` (Classes + Objects):
- Why this matters: classes let you model real-world things as code — a Bank Account, a User, a Product
- Cover: class keyword, __init__, self, instance methods, creating instances, accessing attributes
- Avoid: inheritance (that's Session 14), class methods, static methods — keep it minimal
- Phase 2: build a `BankAccount` class with deposit(), withdraw(), get_balance() methods

Write `08.md` (Modules + pip + venv):
- Cover: import (stdlib — math, datetime, random, os), from X import Y, creating your own module
- Cover: pip install, pip list, requirements.txt (pip freeze > requirements.txt)
- Cover: venv creation (python -m venv venv), activation (Windows vs Mac/Linux), why it matters
- Key insight: always create a venv before pip installing anything — your future self will thank you
- Phase 2: create a venv, install requests, write a requirements.txt, add venv/ to .gitignore

Write `09.md` (File I/O + Exceptions):
- Cover: open() with 'r', 'w', 'a' modes, with statement (context manager), read(), write(), readlines()
- Cover: try/except, specific exception types (FileNotFoundError, ValueError), else, finally
- Key insight: always use `with open()` — it closes the file automatically even if something crashes
- Phase 2: read a CSV manually (no pandas), parse it line by line, write a summary to a new file

- [ ] **Step 6: Write sessions 10–12 (LVL 4)**

Write `10.md` (APIs + JSON):
- Cover: what an API is (a menu you order data from), HTTP requests, response codes (200, 404, 429)
- Cover: requests.get(), response.json(), response.status_code, passing params and headers
- Use a real free API with no auth required for Phase 2: Open-Meteo (weather) or JSONPlaceholder
- Phase 2: fetch live weather data for a city, parse the JSON, print temp + description

Write `11.md` (pandas intro):
- Cover: pd.read_csv(), df.head(), df.tail(), df.shape, df.describe(), df.columns
- Cover: filtering (`df[df['age'] > 30]`), groupby, df.plot()
- Use a real publicly available CSV (e.g. titanic.csv from GitHub, or a cities dataset)
- Phase 2: load the dataset, answer 3 specific questions using pandas (e.g. average age by class)

Write `12.md` (Data Project):
- This is a project session — learner picks a real dataset and analyses it end to end
- Phase 1: how to find datasets (Kaggle, data.gov, Our World in Data), what makes a good question
- Phase 2: load dataset → clean (drop nulls) → explore → answer one real question → one matplotlib plot → export findings to a .txt file
- Review: what surprised you in the data? What would you investigate next?

- [ ] **Step 7: Write sessions 13–15 (LVL 5)**

Write `13.md` (Web Scraping):
- Cover: what scraping is and when it's legal (robots.txt, terms of service — be explicit), requests + BeautifulSoup
- Cover: bs4 install, BeautifulSoup(html, 'html.parser'), find(), find_all(), .text, .get('href')
- Phase 2: scrape a simple, scrapable site (e.g. books.toscrape.com — it exists for this purpose), extract titles + prices, save to CSV

Write `14.md` (Inheritance + Advanced OOP):
- Now that learner has used libraries, they understand what inheritance looks like in the wild
- Cover: super().__init__(), method overriding, why inheritance (don't repeat shared logic), __str__, __repr__
- Phase 2: extend the BankAccount from Session 07 — add a SavingsAccount subclass with interest_rate, apply_interest() method

Write `15.md` (Final Project — CLI Tool):
- Cover: argparse basics — ArgumentParser, add_argument(), parse_args(), subparsers
- Phase 2: build a CLI tool that does something the learner finds useful — suggested options: (a) a todo list CLI that saves to JSON, (b) a currency converter using an API, (c) a file renaming tool
- Scaffold the structure in Phase 1, learner picks and builds in Phase 2
- Review: run `python tool.py --help`. Does it explain itself? That's your quality bar.

- [ ] **Step 8: Write Python ladder guide**

Write `docs/ladder-guides/python-programming.md` with 5 level sections following the ladder guide format.

LVL 1 prose must explain: Python runs top-to-bottom like a recipe, variables are labelled boxes, why types exist
LVL 2 prose must explain: why functions are the biggest productivity unlock in programming, how lists and dicts are the two data structures you'll use 90% of the time
LVL 3 prose must explain: what OOP actually solves (organising code that belongs together), why modules exist (don't rebuild what already exists), why error handling matters (programs that crash silently are worse than programs that crash loudly)
LVL 4 prose must explain: the internet is a giant database you can query, what a data pipeline looks like from load → clean → analyse → output
LVL 5 prose must explain: projects are where everything integrates — scraping + file I/O + OOP + CLI all in one place; inheritance is the last OOP piece and only makes sense once you've seen it in a library

- [ ] **Step 9: Peer review Python content**

Dispatch a peer review agent using the exact prompt from the "Peer Review Prompt" section of this plan. Provide it with the content of all 15 session files and the ladder guide. Apply any changes it requests before committing.

- [ ] **Step 10: Commit Python course**
```bash
git add src/data/courses/python-programming/ docs/ladder-guides/python-programming.md
git commit -m "content: add Python Programming course — 15 sessions + ladder guide"
```

---

## Task 2 — Web Development (12 sessions)

**Output dir:** `src/data/courses/web-dev/sessions/`
**Ladder guide:** `docs/ladder-guides/web-dev.md`

### Session specs

| File | Title | Level | Color | Duration | Key topics |
|---|---|---|---|---|---|
| 01.md | HTML Structure + Semantic Elements | LVL 1 | #6ee7b7 | 90 | DOCTYPE, head/body, semantic tags, accessibility basics |
| 02.md | CSS Basics + Box Model + DevTools | LVL 1 | #6ee7b7 | 100 | selectors, properties, box model, Chrome DevTools |
| 03.md | Forms, Tables + Media | LVL 1 | #6ee7b7 | 90 | input types, labels, form structure, img, video, table |
| 04.md | Flexbox — 1D Layouts | LVL 2 | #7dd3fc | 90 | display:flex, direction, justify, align, gap, wrap |
| 05.md | CSS Grid + Responsive Design | LVL 2 | #7dd3fc | 100 | grid-template, fr unit, media queries, mobile-first |
| 06.md | Animations, Transitions + CSS Variables | LVL 2 | #7dd3fc | 90 | transition, @keyframes, animation, --variable, :root |
| 07.md | JavaScript Fundamentals | LVL 3 | #fbbf24 | 100 | let/const, types, functions, arrays, objects, template literals |
| 08.md | DOM Manipulation + Events | LVL 3 | #fbbf24 | 100 | querySelector, textContent, classList, addEventListener |
| 09.md | Fetch API + Async/Await + JSON | LVL 3 | #fbbf24 | 100 | fetch(), .then(), async/await, JSON.parse, error handling |
| 10.md | Project — Landing Page | LVL 4 | #f472b6 | 120 | full HTML/CSS page with nav, hero, cards, footer |
| 11.md | Project — Weather App (Live API) | LVL 4 | #f472b6 | 120 | API fetch, dynamic DOM, user input, live data display |
| 12.md | Project — Personal Portfolio | LVL 4 | #f472b6 | 120 | full portfolio site, deploy to GitHub Pages |

- [ ] **Step 1: Create output directory**
```bash
mkdir -p /Users/karthickragavr/src/BrainWave/src/data/courses/web-dev/sessions
```

- [ ] **Step 2: Research YouTube videos**

Dispatch a research agent to find videos for these topics. Prefer: Kevin Stratvert, Traversy Media, DesignCourse, Web Dev Simplified, freeCodeCamp, Kevin Powell (CSS):
1. HTML structure semantic elements beginners
2. CSS basics box model beginners + Chrome DevTools
3. HTML forms tables media elements
4. CSS Flexbox complete guide beginner
5. CSS Grid complete guide beginner + responsive design
6. CSS animations transitions keyframes
7. JavaScript fundamentals beginners (variables, functions, arrays, objects)
8. JavaScript DOM manipulation beginners
9. JavaScript Fetch API async await beginners
10. HTML CSS landing page project tutorial
11. JavaScript weather app project API
12. HTML CSS portfolio website GitHub Pages deploy

- [ ] **Step 3: Write sessions 01–03 (LVL 1)**

Write `01.md` (HTML Structure):
- Why this matters: HTML is the skeleton — CSS is the skin, JS is the muscle. Nothing works without a solid skeleton.
- Cover: DOCTYPE, html/head/body, meta charset, title, semantic tags (header, nav, main, section, article, footer), h1-h6, p, a, ul/ol/li
- Cover: why semantic HTML matters (screen readers, SEO, other developers)
- Phase 2: build a personal bio page — name, about section, skills list, contact link

Write `02.md` (CSS Basics + Box Model + DevTools):
- Why this matters: every layout bug you will ever have comes from misunderstanding the box model
- Cover: linking a CSS file, selectors (element, class, id), color, font-size, font-family, margin/padding/border, box-sizing: border-box
- Cover: Chrome DevTools — right click → Inspect, Elements panel, editing styles live
- Key insight: add `* { box-sizing: border-box; }` to every project. Always. It prevents 80% of sizing confusion.
- Phase 2: style the bio page from Session 01 — colors, fonts, spacing

Write `03.md` (Forms, Tables, Media):
- Cover: input (text, email, number, checkbox, radio), label (for attribute), button, textarea, select
- Cover: img (src, alt — accessibility), figure/figcaption, video (controls, autoplay)
- Cover: table, thead/tbody, tr/th/td
- Phase 2: add a contact form to the bio page

- [ ] **Step 4: Write sessions 04–06 (LVL 2)**

Write `04.md` (Flexbox):
- Why this matters: Flexbox is how you stop fighting CSS and start controlling it
- Cover: display:flex, flex-direction (row/column), justify-content, align-items, gap, flex-wrap, flex-grow/shrink/basis shorthand
- Key insight: Flexbox is for one direction at a time. Use it for navbars, card rows, centring anything.
- Phase 2: build a navigation bar with Flexbox; build a card row that wraps on mobile

Write `05.md` (CSS Grid + Responsive):
- Cover: display:grid, grid-template-columns (repeat, fr, auto), grid-template-rows, gap, grid-column/row spanning
- Cover: media queries (@media), mobile-first approach (min-width not max-width), common breakpoints (640px, 768px, 1024px)
- Cover: when to use Flexbox vs Grid — Flexbox for components (nav, card), Grid for page layout
- Phase 2: convert the card row to a Grid, add media queries so it goes 1-col on mobile

Write `06.md` (Animations + CSS Variables):
- Cover: transition (property, duration, timing-function), :hover/:focus states
- Cover: @keyframes, animation-name/duration/iteration-count/fill-mode
- Cover: CSS custom properties (--color-primary: #6ee7b7; in :root, usage with var())
- Phase 2: add hover transitions to cards, one entrance animation, convert all colors to CSS variables

- [ ] **Step 5: Write sessions 07–09 (LVL 3)**

Write `07.md` (JS Fundamentals):
- Why this matters: HTML + CSS build the page. JS makes it respond to the user.
- Cover: let/const (never var), string/number/boolean/null/undefined, template literals, if/else, for loop, arrow functions, arrays (push/pop/map/filter), objects ({key: value})
- Phase 2: build a tip calculator — input bill amount and tip %, output tip and total

Write `08.md` (DOM + Events):
- Cover: document.querySelector() / querySelectorAll(), .textContent, .innerHTML (and why to be careful with it), .classList.add/remove/toggle, .style
- Cover: addEventListener('click'), addEventListener('input'), event.target, preventing default
- Phase 2: build a live character counter for a textarea; build a dark/light mode toggle

Write `09.md` (Fetch + Async):
- Cover: what async means (waiting without blocking), fetch(url), .then().catch(), async function, await, try/catch
- Cover: JSON.parse, JSON.stringify, reading response headers, handling 404s
- Use JSONPlaceholder (free, no API key) for Phase 2
- Phase 2: fetch a list of posts from JSONPlaceholder, display them in a dynamically built list

- [ ] **Step 6: Write sessions 10–12 (LVL 4)**

Write `10.md` (Project — Landing Page):
- Phase 1 (20 min): plan the page structure on paper — sections, content, colours
- Phase 2 (85 min): build a complete landing page with: sticky nav, hero section with CTA button, features cards grid (CSS Grid), testimonials, footer. Must be mobile responsive.
- Review: view it on your phone. Does anything break? Fix it.

Write `11.md` (Project — Weather App):
- Use Open-Meteo API (free, no API key required): `https://api.open-meteo.com/v1/forecast`
- Geocoding API to convert city name to lat/lon: `https://geocoding-api.open-meteo.com/v1/search`
- Phase 2: input field for city name, fetch button, display: city, temperature, weather condition, wind speed. Handle errors (city not found, network error).

Write `12.md` (Project — Portfolio):
- Phase 1: what makes a good developer portfolio (clear name/role, 2-3 projects, contact link)
- Phase 2: build a personal portfolio with: hero (name, title, tagline), projects section (3 cards with links), skills section, contact section. Deploy to GitHub Pages.
- Cover: GitHub Pages setup — Settings → Pages → Deploy from branch → main → /root
- Review: share the URL with one person. Does it load on their device?

- [ ] **Step 7: Write Web Dev ladder guide**

Write `docs/ladder-guides/web-dev.md`:
- LVL 1 prose: HTML is structure, CSS is style — they do completely different jobs and need to stay separate
- LVL 2 prose: layout is the hardest part of CSS because browsers had no good tools for it until Flexbox (2009) and Grid (2017); this is why old CSS feels like fighting
- LVL 3 prose: JavaScript is a full programming language that happens to run in the browser — it's not a styling language, it's a logic language
- LVL 4 prose: projects are where you find your gaps — you can follow tutorials forever and never feel ready; the only cure is building something broken and fixing it

- [ ] **Step 8: Peer review Web Dev content**

Dispatch peer review agent with the exact prompt from this plan. Apply requested changes.

- [ ] **Step 9: Commit Web Dev course**
```bash
git add src/data/courses/web-dev/ docs/ladder-guides/web-dev.md
git commit -m "content: add Web Development course — 12 sessions + ladder guide"
```

---

## Task 3 — Azure DevOps (12 sessions)

**Output dir:** `src/data/courses/azure-devops/sessions/`
**Ladder guide:** `docs/ladder-guides/azure-devops.md`

### Session specs

| File | Title | Level | Color | Duration | Key topics |
|---|---|---|---|---|---|
| 01.md | Azure DevOps Overview + Navigation | LVL 1 | #6ee7b7 | 90 | What ADO is, org/project structure, 5 service areas |
| 02.md | Git + Azure Repos + Branching | LVL 1 | #6ee7b7 | 100 | git init, clone, commit, push, branch, merge, PR flow |
| 03.md | Pull Requests + Branch Policies | LVL 1 | #6ee7b7 | 90 | creating PRs, reviewers, required reviewers, branch protection |
| 04.md | Boards + Work Items + Sprints | LVL 2 | #7dd3fc | 90 | Epics, User Stories, Tasks, Sprint planning, Kanban |
| 05.md | Your First YAML Pipeline | LVL 2 | #7dd3fc | 100 | azure-pipelines.yml, trigger, pool, steps, echo task |
| 06.md | Build + Test Automation | LVL 2 | #7dd3fc | 100 | build tasks (DotNet/Node/Python), test tasks, publish results |
| 07.md | Artifacts + Package Management | LVL 3 | #fbbf24 | 90 | Azure Artifacts feed, publish/consume packages, upstream sources |
| 08.md | Azure Infra Basics | LVL 3 | #fbbf24 | 100 | subscriptions, resource groups, App Service, Azure CLI |
| 09.md | Service Connections + Environments | LVL 3 | #fbbf24 | 90 | service connections, environment resource, agent pools |
| 10.md | Release Pipelines + Deploy Strategies | LVL 4 | #f472b6 | 110 | stages, blue-green, rolling, canary, deployment jobs |
| 11.md | Approvals + Gates + Protection | LVL 4 | #f472b6 | 90 | pre/post approval, branch protection, required checks |
| 12.md | Monitoring + App Insights + Secrets | LVL 4 | #f472b6 | 100 | App Insights, variable groups, Key Vault linking, secret masking |

- [ ] **Step 1: Create output directory**
```bash
mkdir -p /Users/karthickragavr/src/BrainWave/src/data/courses/azure-devops/sessions
```

- [ ] **Step 2: Research YouTube videos**

Dispatch research agent. Prefer: NetworkChuck, TechWorld with Nana, Microsoft Developer YouTube, Azure Academy, Pixel Robots:
1. Azure DevOps overview beginners what is it
2. Git Azure Repos branching strategy tutorial
3. Azure DevOps pull requests branch policies
4. Azure DevOps Boards sprint planning Kanban tutorial
5. Azure Pipelines YAML tutorial beginners first pipeline
6. Azure Pipelines build and test automation CI
7. Azure Artifacts feed package management tutorial
8. Azure App Service resource groups beginners
9. Azure DevOps service connections environments tutorial
10. Azure Pipelines release pipeline deployment stages
11. Azure Pipelines approvals gates environment protection
12. Azure Application Insights monitoring / Azure Key Vault pipeline secrets

- [ ] **Step 3: Write sessions 01–03 (LVL 1)**

Write `01.md` (Azure DevOps Overview):
- Why this matters: Azure DevOps is the glue between writing code and shipping it to users
- Cover: the 5 areas — Boards (project management), Repos (source control), Pipelines (CI/CD), Test Plans (quality), Artifacts (packages)
- Cover: org → project → team hierarchy
- Key insight: you don't need to use all 5 areas. Most teams use Repos + Pipelines + Boards. Start there.
- Phase 2: create a free Azure DevOps organisation, create a project, explore the navigation

Write `02.md` (Git + Azure Repos):
- Assume learner has never used Git — explain commits as save points in a video game
- Cover: git init, git clone, git add, git commit -m, git push, git pull, git branch, git checkout -b, git merge
- Cover: branching strategy — main is sacred, always branch for features, merge via PR
- Phase 2: clone a repo, create a feature branch, make a change, push, observe in Azure Repos UI

Write `03.md` (Pull Requests + Branch Policies):
- Why this matters: PRs are how teams review code before it hits main — the gatekeeper before production
- Cover: creating a PR in ADO, adding reviewers, writing a PR description, commenting on code, approving, completing
- Cover: branch policies — require PR before merge, minimum reviewers, linked work items
- Phase 2: configure a branch policy on main, raise a PR, have it reviewed (use a second account or approve your own for practice)

- [ ] **Step 4: Write sessions 04–06 (LVL 2)**

Write `04.md` (Boards + Sprints):
- Now the learner knows repos and PRs — Boards tracks the work that drives those PRs
- Cover: Epic → Feature → User Story → Task hierarchy, creating work items, moving through states, sprint planning, capacity
- Cover: Kanban view vs Sprint view, linking work items to commits and PRs
- Phase 2: create a sprint with 3 user stories and tasks, move one to Done, link a commit to a work item

Write `05.md` (First YAML Pipeline):
- Why this matters: every time you push code, the pipeline runs and tells you if you broke something
- Cover: `azure-pipelines.yml` structure — trigger, pool (ubuntu-latest), steps, script task
- Show a complete minimal pipeline:
```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - script: echo "Pipeline is running!"
    displayName: 'Hello Pipeline'
  - script: |
      echo "Branch: $(Build.SourceBranchName)"
      echo "Commit: $(Build.SourceVersion)"
    displayName: 'Print build info'
```
- Phase 2: create this pipeline, trigger it by pushing a commit, read the pipeline logs

Write `06.md` (Build + Test Automation):
- Cover: language-specific build tasks (use Python as the example — simpler to demo):
```yaml
steps:
  - task: UsePythonVersion@0
    inputs:
      versionSpec: '3.11'
  - script: pip install pytest
    displayName: 'Install dependencies'
  - script: pytest tests/ --junitxml=results.xml
    displayName: 'Run tests'
  - task: PublishTestResults@2
    inputs:
      testResultsFiles: 'results.xml'
```
- Phase 2: add a failing test, push, see the pipeline fail. Fix it. See it pass. This is CI.

- [ ] **Step 5: Write sessions 07–09 (LVL 3)**

Write `07.md` (Artifacts):
- Cover: what Azure Artifacts is (private npm/pip/NuGet feed), creating a feed, publishing a package, consuming from a pipeline
- Phase 2: create an Artifacts feed, publish a simple Python package to it from a pipeline

Write `08.md` (Azure Infra Basics):
- Cover: Azure subscription → resource group → resources (App Service, Storage Account, etc.)
- Cover: Azure CLI basics: `az login`, `az group create`, `az webapp create`, `az webapp deploy`
- Cover: App Service Plans (pricing tiers), deployment slots concept
- Phase 2: create a resource group and App Service via Azure CLI, deploy a Hello World app manually

Write `09.md` (Service Connections + Environments):
- Cover: service connections — how pipelines authenticate to Azure (Workload Identity Federation recommended)
- Cover: environments in ADO — what they are, adding a VM or Kubernetes resource, using them in a deployment job
- Cover: agent pools (Microsoft-hosted vs self-hosted)
- Phase 2: create an Azure service connection in ADO, reference it in a pipeline stage that deploys to the App Service from Session 08

- [ ] **Step 6: Write sessions 10–12 (LVL 4)**

Write `10.md` (Release Pipelines + Deploy Strategies):
- Cover: multi-stage YAML pipeline structure, stages, jobs, dependsOn
- Cover: deployment strategies — runOnce (simple), rolling (gradual), canary (% traffic)
- Show a two-stage pipeline (build → deploy):
```yaml
stages:
  - stage: Build
    jobs:
      - job: BuildJob
        steps:
          - script: echo "Building..."

  - stage: Deploy
    dependsOn: Build
    jobs:
      - deployment: DeployApp
        environment: 'production'
        strategy:
          runOnce:
            deploy:
              steps:
                - script: echo "Deploying..."
```

Write `11.md` (Approvals + Gates):
- Cover: pre-deployment approvals (environment settings), required reviewers, approval timeout
- Cover: gates — invoke REST API gate (check an external health endpoint before deploying)
- Phase 2: add a pre-deployment approval to the production environment, trigger a deployment, approve it

Write `12.md` (Monitoring + Secrets):
- Cover: Application Insights — connecting to an App Service, Live Metrics, failures, performance
- Cover: variable groups — creating a variable group, referencing in pipeline (`group: my-vars`)
- Cover: Azure Key Vault integration — link a Key Vault to a variable group, use secrets in pipeline without ever seeing the value
- Key insight: secrets must never appear in pipeline logs — Key Vault + masked variables is the only correct approach

- [ ] **Step 7: Write Azure DevOps ladder guide**

Write `docs/ladder-guides/azure-devops.md`:
- LVL 1 prose: DevOps is not a tool — it's a practice of automating the journey from code to production. Azure DevOps is one platform that supports that journey end to end.
- LVL 2 prose: CI means every commit gets built and tested automatically. This sounds simple but it fundamentally changes how a team works — bugs get caught in minutes, not weeks.
- LVL 3 prose: before you can deploy from a pipeline, you need to know where you're deploying to (Azure infra) and how the pipeline proves it's allowed to deploy there (service connections).
- LVL 4 prose: CD is more than "push to prod automatically" — it's about deploying with confidence: controlled strategies, human approval gates, and the ability to see immediately if something went wrong.

- [ ] **Step 8: Peer review Azure DevOps content**

Dispatch peer review agent. Apply changes.

- [ ] **Step 9: Commit Azure DevOps course**
```bash
git add src/data/courses/azure-devops/ docs/ladder-guides/azure-devops.md
git commit -m "content: add Azure DevOps course — 12 sessions + ladder guide"
```

---

## Task 4 — Graphic Design (10 sessions)

**Output dir:** `src/data/courses/graphic-design/sessions/`
**Ladder guide:** `docs/ladder-guides/graphic-design.md`

### Session specs

| File | Title | Level | Color | Duration | Key topics |
|---|---|---|---|---|---|
| 01.md | Color Theory + Psychology | LVL 1 | #6ee7b7 | 90 | color wheel, hue/sat/value, warm/cool, color schemes, psychology |
| 02.md | Typography Fundamentals | LVL 1 | #6ee7b7 | 90 | typefaces, serif/sans, hierarchy, pairing, kerning, leading |
| 03.md | Layout + Grid + CARP Principles | LVL 2 | #7dd3fc | 100 | 12-col grid, alignment, repetition, proximity, contrast |
| 04.md | Contrast, White Space + Visual Hierarchy | LVL 2 | #7dd3fc | 90 | size contrast, colour contrast (WCAG), negative space, hierarchy |
| 05.md | Figma Fundamentals | LVL 3 | #fbbf24 | 100 | frames, shapes, text, components, auto layout, styles |
| 06.md | Canva for Rapid Design | LVL 3 | #fbbf24 | 90 | templates, brand kit, resizing, export, when to use vs Figma |
| 07.md | Asset Preparation + Photo Editing | LVL 3 | #fbbf24 | 90 | background removal, resizing, export for web/print, file formats |
| 08.md | Brand Identity Design | LVL 4 | #f472b6 | 110 | logo design, color palette, type system, brand guidelines |
| 09.md | Social Media Graphics + Poster Design | LVL 4 | #f472b6 | 100 | sizing by platform, visual hierarchy in posters, templates |
| 10.md | Presentation Design + Portfolio | LVL 4 | #f472b6 | 90 | slide hierarchy, consistency, portfolio layout, case study format |

- [ ] **Step 1: Create output directory**
```bash
mkdir -p /Users/karthickragavr/src/BrainWave/src/data/courses/graphic-design/sessions
```

- [ ] **Step 2: Research YouTube videos**

Dispatch research agent. Prefer: DesignCourse, Flux Academy, Canva, Figma official, Juanita Explains:
1. Color theory beginners design
2. Typography fundamentals beginners graphic design
3. Grid layout alignment design principles CARP
4. Visual hierarchy contrast white space design
5. Figma tutorial complete beginners 2024
6. Canva tutorial beginners full guide
7. Background removal photo editing free tools beginners
8. Logo design brand identity Figma tutorial
9. Social media graphic design tutorial poster design
10. Presentation design tips PowerPoint or Figma

- [ ] **Step 3: Write all 10 sessions**

Write `01.md` (Color Theory):
- Cover: color wheel (primary/secondary/tertiary), hue/saturation/value, warm vs cool colors
- Cover: color schemes (monochromatic, analogous, complementary, triadic), how to pick a palette
- Cover: color psychology (blue = trust, red = urgency, green = growth — cultural context matters)
- Phase 2: choose a business type (coffee shop, tech startup, health brand), pick a 3-color palette that fits the brand personality. Justify each choice.

Write `02.md` (Typography):
- Cover: typeface categories (serif, sans-serif, monospace, display), when to use each
- Cover: typographic hierarchy (H1 > H2 > body), font pairing rules (max 2 fonts, one personality + one neutral)
- Cover: kerning (space between letters), leading (line height), tracking (letter-spacing)
- Phase 2: pick 2 font pairs from Google Fonts. Create a simple text layout showing H1/H2/body hierarchy for both.

Write `03.md` (Layout + Grid + CARP):
- Cover: the 4 CARP principles — Contrast (make different things look different), Alignment (nothing placed arbitrarily), Repetition (repeat visual elements for consistency), Proximity (group related things)
- Cover: the 12-column grid, gutters, margins, how columns create alignment
- Phase 2: take a bad layout (provide a description of a cluttered, misaligned flyer) and redesign it applying all 4 CARP principles

Write `04.md` (Contrast + White Space):
- Cover: size contrast (big headline vs small body), colour contrast (WCAG AA = 4.5:1 for body text)
- Cover: negative space — it's not empty, it's breathing room that directs attention
- Cover: visual hierarchy — what the eye sees first, second, third
- Phase 2: check 3 real websites with a contrast checker tool (WebAIM), find one that fails, redesign the problem element

Write `05.md` (Figma Fundamentals):
- Cover: frames vs groups, the layers panel, basic shapes (rectangle, ellipse, line), text tool, colours + fill styles
- Cover: components — creating a button component, instances, overrides
- Cover: auto layout — making frames that resize automatically, padding, gap
- Cover: exporting (PNG, SVG, PDF — when to use each)
- Phase 2: build a simple mobile app screen in Figma with a header, 2 cards, and a bottom nav. Use components for repeated elements.

Write `06.md` (Canva):
- Open with: Canva is not for professional brand work, but it's the fastest tool for getting things out the door when you're not a full-time designer
- Cover: templates (don't start from scratch), brand kit (upload logo, set colors and fonts), resizing (magic resize for different platforms), export formats
- Phase 2: create 3 social media posts for an imaginary event (Instagram square, Instagram story, Twitter header) using Canva's resize feature from a single starting design

Write `07.md` (Asset Preparation):
- Cover: removing backgrounds (Canva, remove.bg, Photopea), cropping for different ratios
- Cover: file formats — JPEG (photos), PNG (transparency), SVG (vectors, scalable), WebP (web optimized), PDF (print)
- Cover: export resolution — 72 DPI for web, 300 DPI for print
- Phase 2: take 3 product images, remove backgrounds, export at correct resolution for web and print

Write `08.md` (Brand Identity):
- Phase 1: what brand identity is — the visual language of a company (logo, colors, fonts, tone)
- Phase 2: design a complete brand identity for an imaginary company: logo mark + wordmark in Figma, primary + secondary + neutral color palette, heading + body font pair, one example mockup (business card or social header)

Write `09.md` (Social Media + Poster):
- Cover: platform sizing guide — Instagram (1080×1080, 1080×1920), Twitter/X (1500×500), LinkedIn (1200×628), Facebook (1200×630)
- Cover: poster hierarchy — title (largest), subtitle, supporting info, call to action, date/location
- Phase 2: design a poster and 2 social media assets for an imaginary event. Use the brand from Session 08.

Write `10.md` (Presentation + Portfolio):
- Cover: slide design principles — one idea per slide, title + visual > title + bullet list, consistent master slide
- Cover: portfolio case study format — problem, process, outcome (not just "here's what I made")
- Phase 2: create a 5-slide presentation using Figma or Google Slides that presents the brand identity from Session 08 as a client deliverable

- [ ] **Step 4: Write Graphic Design ladder guide**

Write `docs/ladder-guides/graphic-design.md`:
- LVL 1 prose: design is a language. Color and type are its two most fundamental vocabularies. Good design is not about making things pretty — it's about making things clear.
- LVL 2 prose: layout is where most non-designers fail. They arrange things randomly. Professionals arrange things according to principles. CARP is the shorthand for those principles.
- LVL 3 prose: tools are not the skill. A bad designer with Figma makes bad work. But knowing your tools means you can execute ideas quickly.
- LVL 4 prose: projects teach you what tutorials can't — what it feels like to make a hundred decisions with no rubric, and how to know when something is done.

- [ ] **Step 5: Peer review Graphic Design content**

Dispatch peer review agent. Apply changes.

- [ ] **Step 6: Commit Graphic Design course**
```bash
git add src/data/courses/graphic-design/ docs/ladder-guides/graphic-design.md
git commit -m "content: add Graphic Design course — 10 sessions + ladder guide"
```

---

## Task 5 — 3D Modelling in Blender (15 sessions)

**Output dir:** `src/data/courses/3d-modelling/sessions/`
**Ladder guide:** `docs/ladder-guides/3d-modelling.md`

### Session specs

| File | Title | Level | Color | Duration | Key topics |
|---|---|---|---|---|---|
| 01.md | Blender Interface + Navigation | LVL 1 | #6ee7b7 | 90 | viewport nav, panels, modes, numpad shortcuts |
| 02.md | Basic Objects + Transforms + Apply | LVL 1 | #6ee7b7 | 90 | add mesh, G/R/S, X/Y/Z axis, Apply Scale/Rotation |
| 03.md | Edit Mode — Verts, Edges, Faces + Normals | LVL 1 | #6ee7b7 | 100 | Tab to edit, select modes, extrude, loop cut, normals |
| 04.md | Modelling Workflow + Modifiers | LVL 2 | #7dd3fc | 100 | reference images, modifiers (Mirror, Array, Solidify) |
| 05.md | Hard Surface Modelling | LVL 2 | #7dd3fc | 110 | booleans, bevel, Ctrl+R, inset, box modelling |
| 06.md | Organic Modelling + Subdivision | LVL 2 | #7dd3fc | 110 | Subdivision Surface, Sculpt mode basics, smooth shading |
| 07.md | UV Unwrapping | LVL 3 | #fbbf24 | 100 | seams, unwrap, UV editor, stretching check, atlas packing |
| 08.md | Shader Editor + PBR Materials | LVL 3 | #fbbf24 | 110 | Principled BSDF, Base Color/Roughness/Metallic, image textures |
| 09.md | Procedural Textures + Node Groups | LVL 3 | #fbbf24 | 100 | Noise/Voronoi/Wave textures, Mix nodes, node groups |
| 10.md | Lighting — 3-Point + HDRI | LVL 4 | #f472b6 | 100 | Point/Sun/Area lights, 3-point setup, HDRI world lighting |
| 11.md | Cycles vs EEVEE — Settings + Use Cases | LVL 4 | #f472b6 | 90 | render engine comparison, samples, denoising, render time |
| 12.md | Basic Compositing for Render Output | LVL 4 | #f472b6 | 90 | compositor basics, color grading, glare, Denoise node |
| 13.md | Keyframes + Graph Editor + Timeline | LVL 5 | #a78bfa | 100 | I key to keyframe, Graph Editor curves, interpolation |
| 14.md | Rigging + Armatures | LVL 5 | #a78bfa | 110 | Add Armature, pose mode, IK, weight painting basics |
| 15.md | Final Animation Project | LVL 5 | #a78bfa | 120 | plan → model → rig → animate → light → render 10s clip |

- [ ] **Step 1: Create output directory**
```bash
mkdir -p /Users/karthickragavr/src/BrainWave/src/data/courses/3d-modelling/sessions
```

- [ ] **Step 2: Research YouTube videos**

Dispatch research agent. Prefer: Blender Guru, CG Cookie, Ducky 3D, Grant Abbitt, YanSculpts:
1. Blender interface navigation beginners
2. Blender objects transforms apply scale beginners
3. Blender edit mode vertices edges faces normals
4. Blender modifiers mirror array solidify workflow
5. Blender hard surface modelling booleans bevel beginners
6. Blender organic modelling subdivision surface sculpting
7. Blender UV unwrapping tutorial beginners seams
8. Blender shader editor PBR materials principled BSDF
9. Blender procedural textures nodes tutorial
10. Blender lighting tutorial 3 point HDRI
11. Blender Cycles vs EEVEE comparison settings
12. Blender compositor color grading render output
13. Blender animation keyframes graph editor tutorial
14. Blender rigging armatures weight painting beginners
15. Blender animation project tutorial complete

- [ ] **Step 3: Write all 15 sessions**

Follow the session format. Key notes per session:

`01.md`: Cover the numpad navigation (numpad 1/3/7 for front/right/top, numpad 5 for ortho, middle mouse to orbit). Key insight: Blender's interface is modal — what your keyboard does depends on where your mouse is.

`02.md`: Cover G/R/S + axis (G then X to move on X axis), precise transforms (G then X then type 2 to move 2 units). **Apply Scale and Apply Rotation must be named and explained.** Key insight: always Apply Scale before using modifiers or sculpting — it's the #1 beginner trap.

`03.md`: Tab to toggle Edit Mode, vertex/edge/face select (1/2/3), E to extrude, Ctrl+R for loop cut, I for inset. **Normals must be named** — show Face Orientation overlay (blue = correct, red = flipped), show Recalculate Normals (Shift+N). Phase 2: model a low-poly house from a cube using only extrude and loop cut.

`04.md`: Cover Mirror modifier (mirror across X axis for symmetrical objects), Array (repeating elements), Solidify (add thickness to flat surfaces). Cover using reference images (set in camera properties as background image). Phase 2: model a chair using a reference image and Mirror modifier.

`05.md`: Cover boolean modifier (Union, Difference, Intersect), Bevel modifier vs manual Ctrl+B bevel, inset (I), loop cut placement. Phase 2: model a game-ready crate with panels, bolts (boolean), and edge bevels.

`06.md`: Cover Subdivision Surface modifier (level 2 is usually enough), smooth shading (right click → Shade Smooth), sculpt mode basics (Grab, Clay, Smooth brushes). Phase 2: model a simple organic creature head using sculpt mode.

`07.md` (UV Unwrapping — comes BEFORE shaders): Cover seams (mark seam on edges that will be "cut"), U → Unwrap, UV Editor, checking for stretching with Checker Texture, texture atlas packing (U → Pack Islands). Key insight: UV maps control where your texture image lands on your mesh. Get this wrong and your material will look stretched or tiled incorrectly.

`08.md` (Shader Editor + PBR — comes AFTER UV): Cover Principled BSDF (Base Color, Roughness, Metallic — these 3 control 90% of materials), Image Texture node connected to Base Color, Normal Map node. Phase 2: apply a full PBR material set (colour, roughness, normal) from Poly Haven (free textures) to the crate from Session 05.

`09.md`: Cover Noise Texture (organic patterns), Voronoi (cell patterns), Wave Texture (wood grain), ColorRamp for controlling output, Mix Shader for layering materials, creating a reusable node group. Phase 2: create a procedural rock material and a procedural wood material.

`10.md`: Cover Point light (omni), Sun light (directional, infinite), Area light (soft, photographic), 3-point lighting setup (key, fill, rim). Cover HDRI world lighting (download from Poly Haven, set in World Properties). Phase 2: light the textured crate with a 3-point setup and an HDRI, compare renders.

`11.md`: Cover Cycles (path tracing, photorealistic, slower) vs EEVEE (rasterization, real-time speed, less accurate). Cover samples (Cycles: 128 for preview, 512+ for final), denoising (Intel Open Image Denoise), EEVEE settings (Screen Space Reflections, Ambient Occlusion). Phase 2: render the same scene in both engines side by side. Identify the tradeoff.

`12.md`: Scope this explicitly to BASIC compositing — do not teach the full Compositor. Cover: enabling compositor (Use Nodes checkbox), Render Layers node, Color Balance node (lift/gamma/gain), Glare node (streaks on highlights), Denoise node. Phase 2: composite the render — color grade it slightly warmer, add subtle glare on the brightest point.

`13.md`: Cover I key to insert keyframe (Location, Rotation, Scale), Timeline panel (playhead, frame range), Graph Editor (F-curves, handles, easing — linear vs bezier). Phase 2: animate a ball bouncing 3 times with squash and stretch. Use the Graph Editor to make it feel physical.

`14.md`: Cover Add Armature (Shift+A → Armature), Edit Mode for bone placement, Pose Mode (Ctrl+Tab), parenting mesh to armature (Ctrl+P → With Automatic Weights), weight painting basics (checking and fixing automatic weights). Phase 2: rig a simple humanoid (use the Rigify add-on or a manual 5-bone spine+arm rig).

`15.md`: Final project — learner designs and builds a 10-second animation from scratch. Phase 1 (30 min): plan it — what's the subject, what's the story, what camera movement. Phase 2 (75 min): model → rig (if needed) → animate → light → render. Review: watch it back. Does it have a beginning, middle, and end — even at 10 seconds?

- [ ] **Step 4: Write Blender ladder guide**

Write `docs/ladder-guides/3d-modelling.md`:
- LVL 1 prose: Blender's interface is unlike any software you've used. Don't try to memorise it — learn the shortcuts for the 10 actions you do constantly, and let the rest reveal itself when you need it.
- LVL 2 prose: 3D modelling is topological problem-solving — you're controlling how triangles connect on a surface. Hard surface and organic are two fundamentally different workflows, and knowing which to use is half the battle.
- LVL 3 prose: materials are not colours — they're physical simulations of how light bounces off surfaces. UV maps are the bridge between a 3D mesh and a 2D image — without them, materials are guessing.
- LVL 4 prose: rendering is where your model becomes an image. The lighting determines more of the final mood than the model itself.
- LVL 5 prose: animation adds time as the fourth dimension. A static model tells you what something looks like — animation tells you how it moves, and that communicates character.

- [ ] **Step 5: Peer review Blender content**

Dispatch peer review agent. Apply changes.

- [ ] **Step 6: Commit Blender course**
```bash
git add src/data/courses/3d-modelling/ docs/ladder-guides/3d-modelling.md
git commit -m "content: add 3D Modelling (Blender) course — 15 sessions + ladder guide"
```

---

## Task 6 — 3D Printing (8 sessions)

**Output dir:** `src/data/courses/3d-printing/sessions/`
**Ladder guide:** `docs/ladder-guides/3d-printing.md`

### Session specs

| File | Title | Level | Color | Duration | Key topics |
|---|---|---|---|---|---|
| 01.md | How FDM Works + Printer Parts + Safety | LVL 1 | #6ee7b7 | 90 | FDM process, printer anatomy, fumes/fire safety |
| 02.md | Materials (PLA, PETG, ABS) + Settings | LVL 1 | #6ee7b7 | 90 | material properties, temp settings, bed adhesion types |
| 03.md | Cura Basics + Bed Levelling + First Print | LVL 1 | #6ee7b7 | 110 | Cura interface, slicing, g-code, manual bed level, first print |
| 04.md | TinkerCAD Fundamentals | LVL 2 | #7dd3fc | 100 | browser-based CAD, primitives, group/hole, export STL |
| 05.md | Fusion 360 Intro + Parametric Design | LVL 2 | #7dd3fc | 110 | sketches, extrude, parameters, fillets, export STL |
| 06.md | Design Rules for 3D Printing | LVL 2 | #7dd3fc | 90 | overhangs (45° rule), supports, tolerances, wall thickness |
| 07.md | Advanced Slicing + Support Strategies | LVL 3 | #fbbf24 | 100 | tree vs linear supports, interface layers, ironing, variable layer height |
| 08.md | Troubleshooting + Post-Processing | LVL 3 | #fbbf24 | 100 | warping, stringing, layer adhesion, sanding, painting, acetone |

- [ ] **Step 1: Create output directory**
```bash
mkdir -p /Users/karthickragavr/src/BrainWave/src/data/courses/3d-printing/sessions
```

- [ ] **Step 2: Research YouTube videos**

Dispatch research agent. Prefer: Maker's Muse, Thomas Sanladerer, The 3D Print General, CNC Kitchen, Prusa Official:
1. How FDM 3D printing works explained beginners
2. 3D printing materials PLA PETG ABS comparison beginners
3. Cura slicer tutorial beginners first print bed levelling
4. TinkerCAD tutorial complete beginners
5. Fusion 360 beginners tutorial parametric design
6. 3D printing design rules overhangs supports tolerances
7. Cura advanced settings supports tree support ironing
8. 3D printing troubleshooting warping stringing common problems

- [ ] **Step 3: Write all 8 sessions**

`01.md` (How FDM Works + Safety):
- Cover: FDM process — filament → heated nozzle → deposited in layers, layer height, print head XYZ movement
- Cover: printer anatomy — frame, print bed, hotend, extruder, cooling fan, build plate
- Cover: **safety explicitly** — adequate ventilation for all filaments (ABS/ASA especially toxic), never leave a print unattended overnight, fire risk from failed prints, enclosure guidelines for ABS
- Phase 2: identify all parts on your printer model (or a reference image if no printer yet), set up ventilation

`02.md` (Materials):
- Cover: PLA (easy, biodegradable, low temp 200°C/60° bed, brittle), PETG (tougher, food-safe, 230°C/80° bed, strings more), ABS (strong, high temp, warps, needs enclosure)
- Cover: bed adhesion — PEI sheet (best for PLA/PETG), glass + hairspray (ABS), glue stick (general)
- Phase 2: match 3 print scenarios to the right material (a phone stand = PLA, a car part = PETG, an outdoor bracket = ASA/ABS)

`03.md` (Cura + First Print):
- Cover: Cura interface — open STL, layer view, key settings: layer height (0.2mm standard), infill (15-20% for most prints), supports (when to use), print speed, temperature
- Cover: slicing → g-code → send to printer (SD card, USB, or OctoPrint)
- Cover: manual bed levelling — paper method, repeat 4 corners until correct
- Phase 2: download a test print STL (Benchy is the standard), slice it in Cura with default settings, print it

`04.md` (TinkerCAD):
- Cover: browser-based (no install), workspace, primitives (box, cylinder, sphere), group (combine) vs hole (subtract), export STL
- Key insight: TinkerCAD is the fastest path from idea to printable object. It won't build an engine block, but it will build 80% of what hobbyists need.
- Phase 2: design a phone stand — specific dimensions, hole for cable, export STL, slice and check in Cura

`05.md` (Fusion 360):
- Cover: parametric design (change a number, the whole model updates), sketch → extrude workflow, constraints (fully defined sketches), fillet/chamfer for edges, export STL for printing
- Cover: why Fusion over TinkerCAD — precision, parametric, can handle complex mechanical parts
- Phase 2: design a simple bracket with 2 bolt holes — sketch dimensions, extrude, fillet edges, export

`06.md` (Design Rules):
- Cover: overhang rule (45° max without supports), bridging (gaps with no support below, up to ~50mm ok)
- Cover: tolerance for fit — if a peg needs to fit a hole, design the hole 0.2-0.4mm bigger than the peg
- Cover: wall thickness (minimum 0.8mm = 2 perimeters at 0.4mm nozzle), layer orientation for strength (layers parallel to stress = weak, perpendicular = strong)
- Phase 2: take the bracket from Session 05 and evaluate it — does it need supports? Is the tolerance correct for a bolt?

`07.md` (Advanced Slicing):
- Cover: tree supports vs linear supports (tree = easier removal, less scarring), support interface layers (smooth top of support = better surface quality)
- Cover: ironing (super smooth top surfaces), variable layer height (thicker layers for bulk, thinner for detail areas)
- Cover: Cura profiles — save and reuse settings for different filaments/printers
- Phase 2: slice a model with an overhang using tree supports + interface layers. Compare to the same model with linear supports. Check support removal marks.

`08.md` (Troubleshooting + Post-Processing):
- Cover common failures: warping (solution: brim, higher bed temp, enclosure), stringing (solution: retraction settings, temperature), layer delamination (solution: higher temp, slower speed, dry filament)
- Cover: post-processing — sanding (80 → 120 → 220 → 400 grit), priming, painting, acetone smoothing (ABS only)
- Phase 2: diagnose 3 printed failure examples (provide descriptions), identify the cause and the fix

- [ ] **Step 4: Write 3D Printing ladder guide**

Write `docs/ladder-guides/3d-printing.md`:
- LVL 1 prose: FDM printing is a process of turning filament into layers. Understanding the machine before you model for it saves hours of failed prints.
- LVL 2 prose: printing a design you made yourself is a completely different feeling from printing someone else's STL. Design for print from the start — don't model something then wonder why it won't print.
- LVL 3 prose: most printing problems are settings problems, not hardware problems. Knowing how to read a failed print and fix the slicer settings is the skill that separates people who get good prints consistently from people who blame the machine.

- [ ] **Step 5: Peer review 3D Printing content**

Dispatch peer review agent. Apply changes.

- [ ] **Step 6: Commit 3D Printing course**
```bash
git add src/data/courses/3d-printing/ docs/ladder-guides/3d-printing.md
git commit -m "content: add 3D Printing course — 8 sessions + ladder guide"
```

---

## Task 7 — UI/UX Design (10 sessions)

**Output dir:** `src/data/courses/ui-ux-design/sessions/`
**Ladder guide:** `docs/ladder-guides/ui-ux-design.md`

### Session specs

| File | Title | Level | Color | Duration | Key topics |
|---|---|---|---|---|---|
| 01.md | UX vs UI + Design Thinking + User Research | LVL 1 | #6ee7b7 | 90 | UX vs UI distinction, 5-stage design thinking, research methods |
| 02.md | Personas + Journey Maps + Competitor Analysis | LVL 1 | #6ee7b7 | 100 | user persona template, journey map, benchmarking competitors |
| 03.md | Information Architecture + Wireframes | LVL 2 | #7dd3fc | 100 | IA, card sorting, sitemap, low-fi wireframe conventions |
| 04.md | Low-Fidelity Prototyping | LVL 2 | #7dd3fc | 90 | paper prototype, clickable lo-fi in Figma, user flow |
| 05.md | Figma Fundamentals + Components + Auto Layout | LVL 3 | #fbbf24 | 110 | frames, components, variants, auto layout, styles |
| 06.md | Design Systems + Style Guides + Accessibility | LVL 3 | #fbbf24 | 100 | design system anatomy, tokens, WCAG contrast, focus states |
| 07.md | Hi-Fi Prototyping + Interactions | LVL 3 | #fbbf24 | 110 | hi-fi design, Figma prototype mode, smart animate, overlays |
| 08.md | Usability Testing + Heuristic Evaluation | LVL 4 | #f472b6 | 90 | 5-user rule, task-based testing script, Nielsen's 10 heuristics |
| 09.md | Developer Handoff + Design Specs | LVL 4 | #f472b6 | 90 | Figma Dev Mode, redlines, spacing tokens, asset export |
| 10.md | Portfolio Case Study | LVL 4 | #f472b6 | 100 | case study structure, process documentation, portfolio presentation |

- [ ] **Step 1: Create output directory**
```bash
mkdir -p /Users/karthickragavr/src/BrainWave/src/data/courses/ui-ux-design/sessions
```

- [ ] **Step 2: Research YouTube videos**

Dispatch research agent. Prefer: AJ&Smart, Mike Locke, Figma official, DesignCourse, CareerFoundry, NNGroup:
1. UX vs UI design thinking user research beginners
2. User personas journey mapping UX tutorial
3. Information architecture card sorting wireframing beginners
4. Low fidelity prototype paper prototype Figma beginners
5. Figma tutorial complete beginners components auto layout 2024
6. Design systems style guide Figma accessibility WCAG
7. Figma prototyping interactions smart animate tutorial
8. Usability testing tutorial beginners heuristic evaluation Nielsen
9. Figma developer handoff dev mode design specs
10. UX portfolio case study how to write structure

- [ ] **Step 3: Write all 10 sessions**

`01.md` (UX vs UI + Design Thinking):
- Cover: UX = how it works (the experience, the logic, the flow), UI = how it looks (the colours, the type, the components). A beautiful app with bad UX fails. An ugly app with great UX succeeds.
- Cover: the 5-stage design thinking process — Empathise, Define, Ideate, Prototype, Test (not linear — loop back)
- Cover: user research methods — interviews, surveys, contextual observation (pick one, explain it properly)
- Phase 2: choose a real app you use daily. Write down 3 things that frustrate you about it and 3 things that work well. This is your first UX audit.

`02.md` (Personas + Journey Maps + Competitor Analysis):
- Cover: user persona template — name, age, role, goals, frustrations, tech comfort level. Personas must be based on research, not assumptions.
- Cover: journey map — stages (Awareness → Consideration → Use → Return), actions, feelings, pain points per stage
- Cover: competitor analysis — pick 3 competitors, evaluate each on: onboarding, core task flow, visual design, accessibility. Identify gaps.
- Phase 2: create one persona and a journey map for the app you audited in Session 01

`03.md` (IA + Wireframes):
- Cover: information architecture — how content is organised, labelled, and navigated. Card sorting (open vs closed) as a method.
- Cover: sitemap — visual hierarchy of all screens/pages
- Cover: wireframe conventions — grey boxes for images, X for video, lines for text, no colours, no real fonts
- Phase 2: create a sitemap for a simple app (recipe app or task manager), then wireframe 3 key screens

`04.md` (Lo-fi Prototyping):
- Cover: paper prototyping — fast, disposable, great for early feedback. Describe the test setup (print screens, user points and clicks)
- Cover: Figma lo-fi clickable prototype — connect frames with arrows (Prototype panel), set interaction trigger (On Click → Navigate To)
- Cover: user flow diagramming — boxes for screens, diamonds for decisions
- Phase 2: make the wireframes from Session 03 clickable in Figma. Test it on one person. Note what confused them.

`05.md` (Figma Fundamentals + Components):
- Cover: frames (not artboards), the layers panel, shapes, text, constraints, grid/layout guides
- Cover: components — creating a master component, instances, props (variant properties), overrides
- Cover: auto layout — makes components responsive, padding, gap, direction, resizing
- Phase 2: build a component library for the app — button (3 variants: primary/secondary/disabled), input field, card, navigation bar

`06.md` (Design Systems + Accessibility):
- Cover: design system anatomy — tokens (colour, spacing, type), components, documentation
- Cover: colour tokens (primary, secondary, neutral, semantic — error/warning/success/info)
- Cover: **WCAG accessibility** — AA requires 4.5:1 contrast for body text, 3:1 for large text. Touch targets minimum 44×44px. Focus states must be visible. Test with Figma's Contrast plugin.
- Phase 2: define the design system tokens for the app. Check every colour combination for contrast compliance.

`07.md` (Hi-Fi Prototyping):
- Cover: applying the design system to the wireframes — add real colours, real type, real components
- Cover: Figma prototype mode — Smart Animate transitions, overlays (modals, drawers), scrolling frames
- Cover: interactive states — hover, pressed, focused — use component variants
- Phase 2: produce hi-fi designs for the 3 key screens from Session 03, connected as a working prototype

`08.md` (Usability Testing):
- Cover: the 5-user rule (5 users find ~85% of usability problems), task-based testing script structure
- Cover: moderated testing — think-aloud protocol, how to facilitate without leading
- Cover: Nielsen's 10 Heuristics — summarise each with one practical example
- Phase 2: write a 5-task test script for the prototype from Session 07. Run it with one real person. Document 3 findings.

`09.md` (Dev Handoff):
- Cover: Figma Dev Mode — how developers use it, inspecting spacing/colours/styles, export assets
- Cover: redlines — annotating spacing, defining component states, naming conventions (BEM or camelCase)
- Cover: design tokens export — how design decisions become CSS variables or design system code
- Phase 2: annotate the hi-fi screens with spacing, font specs, and interaction notes. Export all icons as SVG.

`10.md` (Portfolio Case Study):
- Cover: case study structure — Problem, Research (what you learned), Process (what you tried), Solution (what you built), Outcome (what you measured or would measure)
- Cover: what NOT to do — don't just show screenshots. Show your thinking. Show the before and after. Show what failed.
- Phase 2: write a full case study for the app project from Sessions 01–09. Minimum: problem statement, 1 research insight, 1 wireframe, 1 hi-fi screen, 1 usability finding, final prototype link.

- [ ] **Step 4: Write UI/UX ladder guide**

Write `docs/ladder-guides/ui-ux-design.md`:
- LVL 1 prose: most people think UX design means making apps look nice. It doesn't. It means understanding what a specific person needs to do a specific task, then removing every obstacle between them and that task.
- LVL 2 prose: wireframes feel reductive — why draw grey boxes when you could be designing? Because grey boxes force you to make decisions about structure without being distracted by colour and polish. Fix structure first.
- LVL 3 prose: Figma is the industry standard tool because it sits at the intersection of design and collaboration. Components and auto layout are not convenience features — they're how professional teams maintain consistency across hundreds of screens.
- LVL 4 prose: a prototype is just a hypothesis. Usability testing is how you find out if your hypothesis is right. Most first prototypes are wrong in at least one important way — the designers who succeed are the ones who find out early.

- [ ] **Step 5: Peer review UI/UX content**

Dispatch peer review agent. Apply changes.

- [ ] **Step 6: Commit UI/UX course**
```bash
git add src/data/courses/ui-ux-design/ docs/ladder-guides/ui-ux-design.md
git commit -m "content: add UI/UX Design course — 10 sessions + ladder guide"
```

---

## Self-Review Checklist

- [x] All 7 courses from the spec are covered
- [x] All sessions have: title, level, color, duration, key topics
- [x] Session file format reference is included and complete
- [x] Ladder guide format reference is included and complete
- [x] YouTube sourcing rules defined
- [x] Peer review prompt defined and consistent
- [x] Execution order matches spec (Python first, 3D Printing last)
- [x] All peer-reviewed revisions are applied (Python strings/errors to LVL1, Azure infra order fix, Blender UV/shader swap, 3D Printing slicing in LVL1)
- [x] No TBD or placeholders — every session has key topics and Phase 1/2 content described
- [x] Git commit commands are provided for each course
