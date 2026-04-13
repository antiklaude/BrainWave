var e=`---
title: "Azure DevOps Overview + Navigation"
duration: 90
level: 1
levelLabel: "LVL 1"
levelColor: "#6ee7b7"
videos:
  - id: "4BibQ69MD8c"
    title: "Azure DevOps Tutorial for Beginners — TechWorld with Nana"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "Which Azure DevOps service handles CI/CD pipelines?"
      options: ["Azure Boards", "Azure Repos", "Azure Pipelines", "Azure Artifacts"]
      answer: 2
      explanation: "Azure Pipelines is the CI/CD service — it builds, tests, and deploys your code automatically on every commit."
    - type: multiple-choice
      question: "What is the correct hierarchy in Azure DevOps?"
      options: ["Project → Organisation → Team", "Organisation → Project → Team", "Team → Project → Organisation", "Organisation → Team → Project"]
      answer: 1
      explanation: "An Organisation is the top-level account. It contains Projects. Each Project can have multiple Teams."
    - type: fill-blank
      question: "The Azure DevOps service used for source code storage and version control is ___"
      answer: "Azure Repos"
      explanation: "Azure Repos provides Git repositories for hosting and versioning your code, integrated with the rest of the platform."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Azure DevOps is the glue between writing code and shipping it to users. Without a platform like this, deployments are manual, errors are hard to trace, and teams work in silos. Azure DevOps brings together source control, project management, CI/CD pipelines, testing, and package management in one integrated platform.

- **The 5 service areas** — Azure DevOps is not one tool; it's five tools with one login:
  - **Boards** — project management: track user stories, bugs, sprints, and backlogs
  - **Repos** — Git-based source control: host your code, manage branches, review pull requests
  - **Pipelines** — CI/CD: automatically build, test, and deploy on every code change
  - **Test Plans** — manual and exploratory testing management
  - **Artifacts** — private package feeds for npm, pip, NuGet, Maven
- **Organisation → Project → Team** — an Organisation is your top-level account (e.g., your company). Each Project is a codebase or product. Teams within a project divide work among people.
- **Free tier** — Azure DevOps is free for up to 5 users with unlimited private repos. You don't need a credit card to start.
- **Navigation** — the left sidebar shows the five service areas. The top bar has the organisation and project selector.

> **Key insight:** You don't need to use all 5 services. Most teams start with Repos + Pipelines + Boards and ignore the rest until they need it. Trying to adopt everything at once is the most common reason DevOps initiatives fail.

## Phase 2 — Do (40 min)

- Create a free Azure DevOps account at \`dev.azure.com\`
- Create a new Organisation and a new Project (choose Git as version control)
- Explore each of the 5 service areas: click into Boards, Repos, Pipelines, Test Plans, Artifacts — note what each one shows
- In Boards: change the process template to Scrum (if not already set) — note the Epic/Feature/User Story/Task hierarchy

## Review

What are the 5 service areas of Azure DevOps? Which 3 do most teams use for day-to-day development? What is the difference between a Project and a Team?
`;export{e as default};