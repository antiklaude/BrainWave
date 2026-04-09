var e=`---
title: "File I/O + Exception Handling"
duration: 90
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "rfscVS0vtbw"
    title: "Learn Python – Full Course for Beginners — freeCodeCamp"
  - id: "JJmcL1N2KQs"
    title: "Python Crash Course for Beginners — Traversy Media"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What file mode is used to append to an existing file without overwriting it?"
      options: ["'r'", "'w'", "'a'", "'x'"]
      answer: 2
      explanation: "'a' (append) mode adds to the end of the file. 'w' (write) would overwrite everything."
    - type: multiple-choice
      question: "What is the advantage of using 'with open()' instead of just 'open()'?"
      options: ["It runs faster", "It automatically closes the file even if an error occurs", "It allows reading and writing at the same time", "It's shorter to write"]
      answer: 1
      explanation: "The 'with' statement is a context manager — it guarantees the file is closed when the block exits, even if an exception is raised."
    - type: fill-blank
      question: "To catch only a FileNotFoundError, you write ___"
      answer: "except FileNotFoundError:"
      explanation: "Specifying the exception type means only that specific error is caught. A bare 'except:' catches everything, which can hide bugs."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Real programs don't just run in memory — they read config files, process CSV data, save results, and log errors. File I/O is how your programs interact with the file system. Exception handling is how your programs stay alive when something goes wrong, instead of crashing silently and leaving you with no information.

- **open() modes** — \`'r'\` (read), \`'w'\` (write, creates/overwrites), \`'a'\` (append, adds to end), \`'x'\` (create only, fails if exists).
- **with open() as f:** — the context manager pattern. The file is automatically closed when you leave the \`with\` block, even if an error occurs inside it.
- **Reading** — \`f.read()\` returns the entire file as a string. \`f.readlines()\` returns a list where each item is a line. \`for line in f:\` iterates lazily (memory-efficient for large files).
- **Writing** — \`f.write("text")\` writes a string. Add \`"\\n"\` explicitly for newlines — Python doesn't add them automatically.
- **try / except / else / finally** — \`try\` runs the risky code, \`except ExceptionType:\` handles that specific error, \`else\` runs only if no exception occurred, \`finally\` runs always (good for cleanup).
- **Common exceptions** — \`FileNotFoundError\` (file doesn't exist), \`PermissionError\` (no access), \`ValueError\` (bad data format), \`IOError\` (general I/O problem).

> **Key insight:** Always use \`with open()\`. Never use bare \`open()\` and then \`f.close()\` — if an error happens between them, the file never closes. Context managers were invented specifically to solve this problem.

## Phase 2 — Do (40 min)

- Create a CSV file manually with 5 rows: \`name,score\` format (e.g. \`Alice,85\`)
- Read the file with \`with open()\`, skip the header row, parse each line by splitting on \`","\`, and calculate the average score
- Write the result to a new file \`summary.txt\`
- Wrap your reading code in \`try/except FileNotFoundError\` so the program prints a helpful message instead of crashing if the file doesn't exist
- Verify: rename the CSV file, run your script, confirm the error message appears

## Review

What is the difference between \`f.read()\` and \`f.readlines()\`? When would you prefer iterating \`for line in f:\` over loading the whole file at once?
`;export{e as default};