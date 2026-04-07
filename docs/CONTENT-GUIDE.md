# BrainWave — Content Authoring Guide

How to add courses, sessions, and quizzes without touching any React code.

---

## Adding a new course

### Step 1 — Add it to the catalog

Open `src/data/catalog.js` and add an entry:

```js
{
  id: 'python-programming',       // URL slug: /courses/python-programming
  title: 'Python Programming',
  subtitle: 'Zero to Hero',
  category: 'code',               // 'music' | 'code' | 'design' | '3d' | 'devops'
  categoryLabel: 'Programming',
  accent: '#34d399',              // hex color for this course's accent
  hours: 30,
  sessionCount: 15,
  levels: 5,
  status: 'available',            // 'available' | 'coming-soon'
  tags: ['Python', 'Automation', 'OOP', 'Data'],
  description: 'Learn Python from scratch...',
}
```

### Step 2 — Create the session files

Create a folder: `src/data/courses/python-programming/sessions/`

Then create one `.md` file per session: `01.md`, `02.md`, ... `15.md`

That's it. The app auto-discovers and loads all `.md` files in that folder.

---

## Session file format

Each session is a single Markdown file with a YAML frontmatter block at the top.

### Minimal session (no quiz, no videos)

```markdown
---
title: "Variables and Data Types"
duration: 60
level: 1
levelLabel: "LVL 1"
levelColor: "#34d399"
---

## Phase 1 — Learn (20 min)

- What is a variable?
- Python data types: int, str, float, bool, list, dict
- How Python handles types differently from other languages

## Phase 2 — Do (30 min)

- Open a Python REPL or create a new `.py` file
- Create one variable of each type
- Print them all with `print()`

## Review

Can you explain the difference between a list and a dict in one sentence?
If not, re-read the data types section before moving on.
```

### Session with videos

```markdown
---
title: "Variables and Data Types"
duration: 60
level: 1
levelLabel: "LVL 1"
levelColor: "#34d399"
videos:
  - id: "rfscVS0vtbw"
    title: "Python Variables — freeCodeCamp"
  - id: "W8KRzm-HUcc"
    title: "Python Data Types — Corey Schafer"
---

(rest of content...)
```

The `id` is the YouTube video ID from the URL. For `youtube.com/watch?v=rfscVS0vtbw`, the ID is `rfscVS0vtbw`.

### Session with a quiz

Add a `quiz` block to the frontmatter. The quiz renders as a "Quick Check" button at the bottom of the session.

```markdown
---
title: "Variables and Data Types"
duration: 60
level: 1
levelLabel: "LVL 1"
levelColor: "#34d399"
videos:
  - id: "rfscVS0vtbw"
    title: "Python Variables — freeCodeCamp"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "Which of these is a valid Python variable name?"
      options: ["2name", "my-var", "my_var", "class"]
      answer: 2
      explanation: "Variable names can't start with a number, use hyphens, or be reserved keywords."

    - type: multiple-choice
      question: "What does print(type(3.14)) output?"
      options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'number'>"]
      answer: 2
      explanation: "3.14 is a float in Python."

    - type: fill-blank
      question: "Complete the code: x ___ 5"
      answer: "="
      explanation: "The single = is the assignment operator in Python."
---

(rest of content...)
```

---

## Quiz question types

### `multiple-choice`

```yaml
- type: multiple-choice
  question: "Question text here?"
  options: ["Option A", "Option B", "Option C", "Option D"]
  answer: 0          # zero-based index of the correct option
  explanation: "Why this answer is correct."   # shown after answering
```

### `fill-blank`

```yaml
- type: fill-blank
  question: "The Python keyword to define a function is ___"
  answer: "def"      # exact string match (case-insensitive)
  hint: "It's 3 letters"       # optional
  explanation: "def is short for 'define'."
```

---

## Course-level final assessment

To add a final assessment to a course, create a file:
`src/data/courses/{course-id}/final-quiz.md`

Same format as a session quiz, but with `type: final-assessment` and more questions:

```markdown
---
type: final-assessment
title: "Python Fundamentals — Final Assessment"
passMark: 70
questions:
  - type: multiple-choice
    question: "..."
    options: [...]
    answer: 0
    explanation: "..."
  # ... 10-15 questions
---
```

No body content needed in this file — only the frontmatter matters.

---

## Content writing tips

### For session body (markdown)

Use `##` for phase headers:
```markdown
## Phase 1 — Learn (45 min)
## Phase 2 — Do (60 min)
## 15-Min Review
```

Use bullet lists (`-`) for tasks:
```markdown
- First task here
- Second task here
```

Use `>` for callout boxes:
```markdown
> **Pro tip:** Always name your projects before you start. FL Studio auto-saves to a temp file otherwise.
```

Use `**bold**` for emphasis on key terms.

### For quizzes

- Keep questions short and specific — one concept per question
- Write the explanation as if you're explaining to a complete beginner
- For `multiple-choice`, make the wrong answers plausible (not obviously wrong)
- For `fill-blank`, accept only one correct answer or use `multiple-choice` instead
- Quick check: 3–5 questions max
- Final assessment: 10–15 questions

---

## Frontmatter field reference

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | ✓ | Session title shown in sidebar and accordion header |
| `duration` | number | ✓ | Session duration in minutes |
| `level` | number | ✓ | Level number (1–5) |
| `levelLabel` | string | ✓ | Display label e.g. `"LVL 1"` |
| `levelColor` | string | ✓ | Hex color for the level badge |
| `videos` | array | — | List of `{id, title}` objects |
| `quiz` | object | — | Quick check quiz (see format above) |

---

## File naming

Session files must be named with a two-digit prefix so they sort correctly:

```
01.md   02.md   03.md  ...  10.md  11.md  12.md
```

Not `1.md` or `session-1.md` — the two-digit prefix ensures alphabetical sort = correct order.

---

## Example: full session file

```markdown
---
title: "First Full LoFi Track — Arrangement"
duration: 120
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "bTYkuS0Ea5o"
    title: "Make LoFi Hip Hop in FL Studio"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is the typical structure of a LoFi track?"
      options:
        - "Intro → Drop → Outro"
        - "Intro → Main → Bridge → Main → Outro"
        - "Verse → Chorus → Verse → Chorus"
        - "Build → Drop → Breakdown → Drop"
      answer: 1
      explanation: "LoFi tracks rarely have dramatic drops. The flow is gentle: Intro → Main → Bridge → Main → Outro."
    - type: fill-blank
      question: "The FL Studio view used for track arrangement (not just looping) is the ___ view."
      answer: "playlist"
      explanation: "The Playlist is where you arrange your patterns into a full track."
---

## Phase 1 — Learn (30 min)

- Track structure: Intro (8 bars) → Main (16) → Bridge (8) → Main (16) → Outro
- LoFi essentials: vinyl crackle sample, lo-pass filter, tape warble
- Using the Playlist for arrangement, not just looping

## Phase 2 — Do (75 min)

- Take sessions 1–3 loops and arrange into a 2-min LoFi track
- Add a vinyl crackle sample looped across the full track
- Add a low-pass filter sweep going into the main section
- Export. This is your first real finished track.

## 15-Min Review

Play the full track start to finish. Does it build and release?
Where did you get bored? That section needs something added or removed.
```
