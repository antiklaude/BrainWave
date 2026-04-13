var e=`---
title: "Boards + Work Items + Sprints"
duration: 90
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
videos:
  - id: "4BibQ69MD8c"
    title: "Azure DevOps Tutorial for Beginners — TechWorld with Nana"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is the correct hierarchy of work items in Azure Boards (Scrum)?"
      options: ["Task → Story → Feature → Epic", "Epic → Feature → User Story → Task", "Sprint → Epic → Story → Task", "Story → Epic → Feature → Task"]
      answer: 1
      explanation: "Epic is the largest unit (a major initiative). It breaks into Features (capabilities), which break into User Stories (user-facing requirements), which break into Tasks (individual work items)."
    - type: multiple-choice
      question: "What is the purpose of a Sprint in Azure Boards?"
      options: ["A fast build process", "A fixed time period (usually 2 weeks) during which a specific set of work is completed", "A way to run tests faster", "A type of deployment pipeline"]
      answer: 1
      explanation: "A Sprint is a time-boxed iteration — typically 1-4 weeks. The team commits to completing a defined set of work items within the sprint."
    - type: fill-blank
      question: "To link a commit or PR to a work item in Azure DevOps, include the work item ID in the commit message prefixed with ___"
      answer: "#"
      explanation: "Mentioning #123 in a commit message or PR description automatically links it to work item 123. This creates traceability between code changes and requirements."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Boards connects the what (work items) to the how (code). Without Boards, teams lose track of what's being worked on, duplicate efforts, and have no way to measure progress. When you link a PR to a work item, the commit history tells the story of why code was written — a critical audit trail in professional environments.

- **Work item hierarchy (Scrum)** — Epic (large initiative, months) → Feature (capability, weeks) → User Story (user-facing requirement, days) → Task (specific technical work, hours).
- **User Story format** — "As a [user], I want to [action] so that [benefit]." This format keeps the team focused on user value, not technical tasks.
- **Sprint planning** — a Sprint is a time-box (1–4 weeks). During planning, the team pulls User Stories from the backlog into the sprint, estimates effort, and assigns tasks.
- **Kanban view** — columns represent states (To Do, In Progress, Done). Drag cards to update status. Great for visualising flow and identifying bottlenecks.
- **Sprint view** — shows the current sprint's work items, capacity, and burndown chart.
- **Linking work items to code** — include \`#ID\` in commit messages or PR descriptions to link automatically. Example: \`git commit -m "Add login form #42"\`.
- **Capacity** — in sprint planning, set your team's working hours to see if the committed work fits. Azure Boards shows a burndown chart as work is completed.

> **Key insight:** The link between a work item and a commit is the answer to "why was this code written?" Three months later, when a bug appears in the login form, you click the work item link in the commit and find the original user story, acceptance criteria, and design decisions.

## Phase 2 — Do (40 min)

- Create an Epic: "User Authentication System"
- Create a Feature under it: "Login Page"
- Create 3 User Stories under that feature
- Create Tasks under each User Story (e.g., "Write HTML form", "Add CSS styling", "Implement validation")
- Create a 2-week Sprint and drag your User Stories into it
- Simulate progress: move one User Story to "In Progress", one to "Done"
- Make a commit to your repo with \`#ID\` in the message — verify the link appears in the work item

## Review

What is the difference between a Sprint and a Backlog? What is the purpose of the Sprint burndown chart?
`;export{e as default};