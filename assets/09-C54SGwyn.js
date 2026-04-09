var e=`---
title: "Service Connections + Environments"
duration: 90
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
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
      question: "What is a Service Connection in Azure DevOps?"
      options: ["A network link between Azure regions", "Stored credentials that allow a pipeline to authenticate to an external service like Azure", "A connection between two pipelines", "An API rate limit setting"]
      answer: 1
      explanation: "A Service Connection stores the authentication credentials needed for a pipeline to deploy to Azure, push to a registry, or call another service — securely, without hardcoding secrets."
    - type: multiple-choice
      question: "What is the recommended authentication method for Azure service connections?"
      options: ["Username and password", "Personal Access Token", "Workload Identity Federation", "SSH key"]
      answer: 2
      explanation: "Workload Identity Federation (WIF) is passwordless — no secret to rotate or leak. It uses Azure AD federated identity. Microsoft recommends it as the most secure option."
    - type: fill-blank
      question: "An Azure DevOps Environment is used in a YAML pipeline within a ___ job type"
      answer: "deployment"
      explanation: "Deployment jobs (job type: deployment) are the only job type that references an Environment. They also support deployment strategies (runOnce, rolling, canary)."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Without service connections, your pipeline can't touch Azure. It's running in a virtual machine with no Azure credentials. Service connections are the secure bridge that gives your pipeline the permission to deploy — without ever storing a password in your YAML file.

- **Service Connection** — a named set of stored credentials in Azure DevOps. Created once, referenced by name in any pipeline. Types: Azure Resource Manager (most common), Docker Registry, GitHub, etc.
- **Creating an Azure RM service connection** — Project Settings → Service Connections → New → Azure Resource Manager → Workload Identity Federation. Select your subscription and resource group. Give it a name like \`sc-azure-prod\`.
- **Workload Identity Federation** — the modern, passwordless approach. Azure AD issues a short-lived token to the pipeline agent for each run. No client secret to manage or expire.
- **Using in a pipeline**:
  \`\`\`yaml
  - task: AzureWebApp@1
    inputs:
      azureSubscription: 'sc-azure-prod'    # service connection name
      appName: 'myapp-unique-name'
      package: '$(System.DefaultWorkingDirectory)/app.zip'
  \`\`\`
- **Environments** — a named deployment target in Azure DevOps (Pipelines → Environments). Environments track deployment history, support approval gates, and are referenced in \`deployment\` jobs.
- **Agent pools** — Microsoft-hosted (fresh VM each run, free tier) vs self-hosted (your own machine, faster for large builds, required for private network access).

> **Key insight:** Service connections have scope — you can restrict a connection to a specific resource group. A pipeline deploying to dev should not have permission to touch prod. Create separate service connections for each environment.

## Phase 2 — Do (40 min)

- In Project Settings → Service Connections, create an Azure Resource Manager connection using Workload Identity Federation
- Create an Environment called \`staging\` in Pipelines → Environments
- Update your pipeline from Session 06 to add a deployment job that uses the service connection to deploy your Flask app to the App Service from Session 08
- Verify: the deployment appears in the Environment's deployment history

## Review

Why should the service connection used for staging have different permissions than the one used for production? What would happen if a dev accidentally had write access to the production resource group?
`;export{e as default};