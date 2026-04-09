var e=`---
title: "Approvals + Gates + Protection"
duration: 90
level: 4
levelLabel: "LVL 4"
levelColor: "#f472b6"
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
      question: "Where do you configure pre-deployment approvals in Azure DevOps?"
      options: ["In the YAML file under the stage", "In Pipelines → Environments → [environment name] → Approvals and checks", "In the Service Connection settings", "In Branch Policies"]
      answer: 1
      explanation: "Approval gates are configured on the Environment resource, not in the YAML file. This separates the deployment configuration (YAML) from the governance configuration (Environment)."
    - type: multiple-choice
      question: "What is an 'Invoke REST API' gate used for?"
      options: ["Calling your application's API to check its health before deploying", "Authenticating to Azure", "Triggering a webhook notification", "Running unit tests"]
      answer: 0
      explanation: "The Invoke REST API gate calls any HTTP endpoint and checks if it returns a success response. Commonly used to check a health endpoint — if staging is unhealthy, the gate blocks the production deployment."
    - type: fill-blank
      question: "The minimum time an approval gate waits before timing out is configurable with the ___ setting"
      answer: "timeout"
      explanation: "Approval gates have a timeout — if nobody approves within the configured time, the deployment is automatically rejected. This prevents pipelines from hanging indefinitely."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Automated deployment is powerful. Automated deployment to production without any human checkpoint is dangerous. Approval gates are the governance layer that ensures a human sees and confirms each production deployment — while automation handles everything else. Gates also let you run programmatic checks (is the service healthy? did the integration tests pass?) before allowing a deployment to proceed.

- **Pre-deployment approvals** — on a production environment, configure: Approvals and checks → Approvals → Add required approvers. The pipeline pauses before the deployment job runs and sends a notification to the approvers. The deployment proceeds only when approved.
- **Approval timeout** — set a maximum wait time (e.g., 24 hours). If nobody approves within the timeout, the pipeline fails. This prevents deployments from hanging in a waiting state indefinitely.
- **Required reviewers vs notify-only** — required reviewers must approve before the pipeline proceeds. Notify-only approvers receive the notification but their approval isn't blocking.
- **Invoke REST API gate** — calls an HTTP endpoint and evaluates the response. Use it to check your staging health endpoint before deploying to production:
  - Gate type: Invoke REST API
  - URL: \`https://your-staging-app.azurewebsites.net/health\`
  - Success criteria: \`eq(root['status'], 'healthy')\`
- **Branch protection + required builds** — combine with Session 03 branch policies to enforce: every commit to main must pass the pipeline AND every production deployment must have a human approval.

> **Key insight:** Approval gates should protect production, not every environment. Requiring approvals for dev or staging slows down the team without adding safety. The pattern: dev (no approvals) → staging (maybe approval) → production (required approval from a named list).

## Phase 2 — Do (40 min)

- On your production environment, configure a pre-deployment approval:
  - Add yourself as a required approver
  - Set a 1-hour timeout
- Trigger a deployment — the pipeline pauses. Observe the approval notification.
- Add an Invoke REST API gate that checks a simple health endpoint (add \`/health\` that returns \`{"status": "healthy"}\` to your Flask app first)
- Approve the deployment — verify it proceeds and completes

## Review

What is the difference between a gate and an approval? Gates are automated checks; approvals are manual. Name one scenario where you would use a gate instead of an approval.
`;export{e as default};