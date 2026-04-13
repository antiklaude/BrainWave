var e=`---
title: "Lists + Dictionaries"
duration: 100
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
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
      question: "What does ['a', 'b', 'c'].pop() return?"
      options: ["'a'", "'b'", "'c'", "None"]
      answer: 2
      explanation: "pop() without an argument removes and returns the last element — 'c' in this case."
    - type: multiple-choice
      question: "How do you safely get a dict value that might not exist?"
      options: ["dict[key]", "dict.get(key)", "dict.find(key)", "dict.fetch(key)"]
      answer: 1
      explanation: "dict.get(key) returns None if the key doesn't exist, instead of raising a KeyError like dict[key] would."
    - type: fill-blank
      question: "The list comprehension to double every number in a list called nums is ___"
      answer: "[x * 2 for x in nums]"
      explanation: "List comprehension syntax: [expression for item in iterable]. It builds a new list."
---

## Phase 1 — Learn (45 min)

**Why this matters:** Lists and dictionaries are the two data structures you'll use in 90% of real Python programs. Lists store ordered sequences; dicts store named data. Everything from API responses to CSV files maps to one of these two.

- **List basics** — \`fruits = ["apple", "banana", "cherry"]\`. Ordered, changeable, allows duplicates.
- **List methods** — \`.append(item)\` adds to the end, \`.remove(item)\` removes by value, \`.pop()\` removes the last item and returns it, \`.insert(index, item)\` inserts at a position.
- **List indexing and slicing** — same as strings: \`fruits[0]\`, \`fruits[-1]\`, \`fruits[1:3]\`.
- **Iterating a list** — \`for fruit in fruits:\` gives you each item in order. \`for i, fruit in enumerate(fruits):\` also gives the index.
- **len()** — works on both lists and dicts: \`len(fruits)\` returns the count.
- **Dict basics** — \`person = {"name": "Alice", "age": 30}\`. Keys are unique labels, values can be anything.
- **Accessing dict values** — \`person["name"]\` raises a KeyError if the key doesn't exist. \`person.get("name")\` returns \`None\` instead — safer.
- **Dict methods** — \`.keys()\`, \`.values()\`, \`.items()\` (returns key-value pairs for iteration), \`.update({"age": 31})\` to modify.
- **List comprehension** — \`[x * 2 for x in numbers]\` builds a new list in one line. Equivalent to a for loop that appends to a new list.

> **Key insight:** Use a list when order matters and items are all the same kind of thing. Use a dict when each piece of data has a name. If you're storing "five scores" it's a list. If you're storing "name, age, city" it's a dict.

## Phase 2 — Do (45 min)

- Build a simple contact book using a list of dicts: each contact is \`{"name": "Alice", "phone": "555-1234"}\`. Write functions to: add a contact, look up a contact by name (using \`.get()\`), delete a contact, and print all contacts.
- Use list comprehension to: (a) filter only even numbers from a list, (b) convert a list of names to uppercase.

## Review

What is the difference between \`list.remove("x")\` and \`list.pop()\`? What happens if you call \`dict["missing_key"]\` vs \`dict.get("missing_key")\`?
`;export{e as default};