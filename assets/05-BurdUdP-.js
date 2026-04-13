var e=`---
title: "Your First YAML Pipeline"
duration: 100
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
      question: "What does the 'trigger' section in azure-pipelines.yml control?"
      options: ["What the pipeline deploys", "Which branches cause the pipeline to run automatically on push", "The pipeline's build agent", "The pipeline's timeout"]
      answer: 1
      explanation: "trigger: - main means: run this pipeline whenever code is pushed to the main branch. You can list multiple branches or use paths to filter."
    - type: multiple-choice
      question: "What does 'pool: vmImage: ubuntu-latest' specify?"
      options: ["The programming language to use", "The cloud region to deploy to", "The operating system of the build agent that runs the pipeline", "The Docker image to build"]
      answer: 2
      explanation: "pool specifies the build agent. ubuntu-latest is a Microsoft-hosted Linux agent — fresh VM, pre-installed tools, free minutes included."
    - type: fill-blank
      question: "In a YAML pipeline, the keyword to run a shell command is ___"
      answer: "script"
      explanation: "The 'script' step type runs a shell command. On Linux/Mac agents it's bash; on Windows it's cmd. Use the 'bash' step type to force bash on all platforms."
---

## Phase 1 — Learn (45 min)

**Why this matters:** The moment you push code to a repository, a CI pipeline should run and tell you within minutes if you broke something. Without automation, testing is manual and deployments are nerve-racking. A YAML pipeline is the script that runs automatically every time code changes — it's the most important automation you'll ever write.

- **azure-pipelines.yml** — a file in the root of your repository. Azure Pipelines reads it and executes its instructions on every trigger. The file lives with the code, so pipeline changes go through PR review like everything else.
- **trigger** — which branches trigger the pipeline:
  \`\`\`yaml
  trigger:
    - main
  \`\`\`
- **pool** — which build agent to use:
  \`\`\`yaml
  pool:
    vmImage: 'ubuntu-latest'
  \`\`\`
  \`ubuntu-latest\`, \`windows-latest\`, \`macos-latest\` are Microsoft-hosted agents (free tier included).
- **steps** — the list of things to do:
  \`\`\`yaml
  steps:
    - script: echo "Pipeline is running!"
      displayName: 'Hello Pipeline'
  \`\`\`
- **Built-in variables** — \`$(Build.SourceBranchName)\`, \`$(Build.BuildId)\`, \`$(Build.SourceVersion)\` (commit SHA). Use these to print context information.
- **Minimal complete pipeline**:
  \`\`\`yaml
  trigger:
    - main
  pool:
    vmImage: 'ubuntu-latest'
  steps:
    - script: echo "Branch: $(Build.SourceBranchName)"
      displayName: 'Print build info'
    - script: echo "Commit: $(Build.SourceVersion)"
      displayName: 'Print commit'
  \`\`\`

> **Key insight:** The pipeline file lives in your repository. That means pipeline changes require a PR and code review, just like application code. You can't sneak a deploy script change past your team — it goes through the same process as everything else.

## Phase 2 — Do (45 min)

- Create \`azure-pipelines.yml\` in the root of your repository with the minimal pipeline above
- Push it to main (via PR and approval, as per Session 03 policies)
- In Azure Pipelines → Pipelines, select your repo to create the pipeline
- Observe the first run: click into the logs, see the output of each step
- Make a change to the pipeline (add a third step that prints the current date) and push — watch the second run complete

## Review

Where must the \`azure-pipelines.yml\` file live in your repository? Why is it better to define pipelines in code (YAML) rather than using a visual UI pipeline editor?
`;export{e as default};