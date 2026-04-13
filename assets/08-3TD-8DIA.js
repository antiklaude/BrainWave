var e=`---
title: "Azure Infra Basics"
duration: 100
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "4BibQ69MD8c"
    title: "Azure DevOps Tutorial for Beginners — TechWorld with Nana"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is the correct Azure resource hierarchy?"
      options: ["Resource → Resource Group → Subscription", "Subscription → Resource Group → Resource", "Resource Group → Subscription → Resource", "Subscription → Resource → Resource Group"]
      answer: 1
      explanation: "A Subscription is the billing boundary. Resource Groups are logical containers within a subscription. Resources (App Services, databases, VMs) live inside Resource Groups."
    - type: multiple-choice
      question: "What does 'az webapp create' do?"
      options: ["Creates a local web server", "Creates an Azure App Service instance in the cloud", "Deploys your application code", "Creates a virtual machine"]
      answer: 1
      explanation: "az webapp create provisions an App Service — the hosting environment. It doesn't deploy your code; az webapp deploy (or a pipeline) does that separately."
    - type: fill-blank
      question: "The Azure CLI command to log in to your Azure account is ___"
      answer: "az login"
      explanation: "az login opens a browser for authentication. For non-interactive scenarios (CI pipelines), use az login --service-principal with a service principal credential."
---

## Phase 1 — Learn (45 min)

**Why this matters:** A pipeline without a deployment target is just a build pipeline. To deploy, you need to understand what you're deploying to. Azure App Service is the simplest way to host a web application on Azure — no VMs, no Kubernetes, no infrastructure management. You focus on the app; Azure handles the runtime.

- **Subscription** — the billing container. All resources you create belong to a subscription. Your Azure account may have multiple subscriptions (e.g., dev/prod split).
- **Resource Group** — a logical container for related resources. Create one per project: \`rg-myapp-prod\`. Everything in it can be managed and deleted together.
- **App Service** — a fully managed platform for hosting web apps. Supports Python, Node, .NET, Java, and containers. Azure handles the OS, patching, and scaling.
- **App Service Plan** — defines the CPU/memory resources. Free (F1) is fine for testing. B1/B2 for light production. The Plan is billed separately from the App Service.
- **Azure CLI commands**:
  \`\`\`bash
  az login                                   # authenticate
  az group create --name rg-myapp --location australiaeast
  az appservice plan create --name myplan --resource-group rg-myapp --sku F1
  az webapp create --name myapp-unique-name --resource-group rg-myapp --plan myplan --runtime "PYTHON:3.11"
  az webapp deploy --resource-group rg-myapp --name myapp-unique-name --src-path ./app.zip
  \`\`\`
- **Deployment slots** — App Service supports staging slots. Deploy to staging, test it, then swap to production. Zero-downtime deployment.

> **Key insight:** Resource Groups are your cleanup mechanism. When a project ends, you delete the Resource Group — everything inside is deleted together. Always create a new Resource Group for each project or environment, never share them.

## Phase 2 — Do (45 min)

- Install the Azure CLI (\`brew install azure-cli\` or the Windows installer)
- Run \`az login\` to authenticate
- Create a Resource Group and an App Service Plan (free tier)
- Create an App Service for Python
- Create a minimal Flask app (\`app.py\` with one route returning "Hello from Azure!"), zip it, and deploy with \`az webapp deploy\`
- Visit the App Service URL — verify the app is live

## Review

What is the difference between an App Service Plan and an App Service? If you create 3 App Services on the same plan, how does that affect the cost?
`;export{e as default};