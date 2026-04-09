var e=`---
title: "Build + Test Automation"
duration: 100
level: 2
levelLabel: "LVL 2"
levelColor: "#7dd3fc"
videos:
  - id: "4BibQ69MD8c"
    title: "Azure DevOps Tutorial for Beginners — TechWorld with Nana"
  - id: "jBbvBqyUMH0"
    title: "Azure DevOps Full Course — Microsoft Developer"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is Continuous Integration (CI)?"
      options: ["Deploying code continuously to production", "Automatically building and testing code on every commit", "Integrating multiple repos into one", "Running tests only before a release"]
      answer: 1
      explanation: "CI means every commit triggers an automated build and test run. Issues are caught in minutes, not weeks later when the code is merged and everyone has moved on."
    - type: multiple-choice
      question: "What does 'PublishTestResults' task do in an Azure Pipeline?"
      options: ["Emails test results to the team", "Uploads test result XML to Azure DevOps so results appear in the pipeline UI", "Publishes tests to NuGet", "Runs the tests"]
      answer: 1
      explanation: "PublishTestResults reads a JUnit/NUnit/xUnit XML file and displays pass/fail results visually in the pipeline run summary. Without it, test results are buried in logs."
    - type: fill-blank
      question: "A build that fails because tests fail is described as ___"
      answer: "a broken build"
      explanation: "When tests fail, the pipeline fails — this is called a broken build. The standard response is to fix it before merging anything else to main."
---

## Phase 1 — Learn (45 min)

**Why this matters:** CI is the difference between finding a bug in 5 minutes (when the pipeline catches it) and finding it in production 3 weeks later. Once you've had CI prevent a production incident, you'll never work without it. This session shows you the exact YAML to build and test a Python application automatically.

- **UsePythonVersion task** — ensures the correct Python version is installed on the agent:
  \`\`\`yaml
  - task: UsePythonVersion@0
    inputs:
      versionSpec: '3.11'
  \`\`\`
- **Install dependencies** — run pip just like locally:
  \`\`\`yaml
  - script: pip install -r requirements.txt
    displayName: 'Install dependencies'
  \`\`\`
- **Run tests with pytest** — output JUnit XML for results publishing:
  \`\`\`yaml
  - script: pytest tests/ --junitxml=test-results.xml
    displayName: 'Run tests'
  \`\`\`
- **PublishTestResults** — uploads results to the pipeline UI:
  \`\`\`yaml
  - task: PublishTestResults@2
    inputs:
      testResultsFormat: 'JUnit'
      testResultsFiles: 'test-results.xml'
    condition: succeededOrFailed()
  \`\`\`
  \`condition: succeededOrFailed()\` ensures results are published even if tests fail (so you can see which tests failed).
- **Failing the build** — if any test fails, pytest exits with code 1. Azure Pipelines sees a non-zero exit code and marks the step (and the build) as failed.

> **Key insight:** Add a branch policy that requires the pipeline to pass before a PR can be merged. Now every PR guarantees tests pass on the target branch. Breaking tests blocks the merge. This is CI in practice, not just theory.

## Phase 2 — Do (45 min)

- Create a simple Python project with \`requirements.txt\`, a \`src/calculator.py\` with \`add(a, b)\` and \`subtract(a, b)\` functions, and a \`tests/test_calculator.py\` with pytest tests
- Update your \`azure-pipelines.yml\` to install deps, run tests, and publish results
- Commit and push — watch the pipeline pass
- Introduce a deliberate failing test (change an assertion to \`assert result == 999\`), push — watch the pipeline fail and show the failing test in the results UI
- Fix the test, push again — confirm the build goes green

## Review

Where in the Azure DevOps UI do you see which specific tests passed and which failed? How do you add a branch policy that blocks PRs from merging if the pipeline fails?
`;export{e as default};