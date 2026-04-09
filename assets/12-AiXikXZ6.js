var e=`---
title: "Data Project — Real Dataset"
duration: 120
level: 4
levelLabel: "LVL 4"
levelColor: "#f472b6"
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
      question: "What does df.dropna() do?"
      options: ["Fills missing values with 0", "Removes all rows with any missing value", "Removes only columns with missing values", "Raises an error on missing data"]
      answer: 1
      explanation: "df.dropna() removes any row that contains at least one NaN (missing) value. Use df.fillna(value) to fill instead."
    - type: multiple-choice
      question: "Which site is the largest source of free, real datasets for analysis projects?"
      options: ["GitHub", "Stack Overflow", "Kaggle", "PyPI"]
      answer: 2
      explanation: "Kaggle hosts thousands of free, real-world datasets and runs data science competitions. It's the go-to for practice datasets."
    - type: fill-blank
      question: "The matplotlib function to display a chart is ___"
      answer: "plt.show()"
      explanation: "After building a chart with plt.plot() or df.plot(), call plt.show() to render and display it."
---

## Phase 1 — Learn (30 min)

**Why this matters:** Tutorials give you controlled, clean datasets. Real datasets are messy — missing values, inconsistent formats, columns you don't need. This session teaches you the full pipeline from finding raw data to presenting a conclusion. That pipeline is what data analysts do every day.

- **Where to find datasets** — Kaggle (kaggle.com/datasets), data.gov (US government data), Our World in Data (ourworldindata.org), Google Dataset Search. Pick something you're curious about — curiosity improves the quality of your analysis.
- **What makes a good question** — "What is the average value?" is weak. "Do countries with higher GDP spend more on education as a percentage?" is specific, answerable, and interesting. Define your question before loading any data.
- **Data cleaning pipeline** — standard steps: load → check shape and dtypes → find nulls (\`df.isnull().sum()\`) → drop or fill nulls → remove duplicates (\`df.drop_duplicates()\`) → verify column types are correct.
- **matplotlib** — \`import matplotlib.pyplot as plt\`. Use \`df.plot()\` for quick charts, or \`plt.plot()\` / \`plt.bar()\` / \`plt.hist()\` for custom ones. Always label axes: \`plt.xlabel()\`, \`plt.ylabel()\`, \`plt.title()\`.

> **Key insight:** The question drives the analysis, not the other way around. If you start by exploring data without a question, you'll produce a list of statistics nobody asked for. Start with "I want to know X", then find the data and code that answers it.

## Phase 2 — Do (75 min)

- Find a CSV dataset on Kaggle or Our World in Data that covers a topic you find interesting
- Run the full pipeline:
  1. Load it with \`pd.read_csv()\`
  2. Run \`df.describe()\` and \`df.isnull().sum()\` — understand what you have
  3. Drop rows with nulls in the columns you'll use
  4. Answer one specific question using groupby, filtering, or aggregation
  5. Create one matplotlib plot that visualises the answer
  6. Write your finding to a \`findings.txt\` file using Python's file I/O from Session 09
- Keep the analysis focused — one question, one chart, one paragraph of findings

## Review

What surprised you in the data? What question would you investigate next if you had more time? Write this in \`findings.txt\` too.
`;export{e as default};