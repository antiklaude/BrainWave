var e=`---
title: "Project — Personal Portfolio"
duration: 120
level: 4
levelLabel: "LVL 4"
levelColor: "#f472b6"
videos:
  - id: "UB1O30fR-EE"
    title: "HTML Crash Course For Absolute Beginners — Traversy Media"
  - id: "yfoY53QXEnI"
    title: "CSS Crash Course For Absolute Beginners — Traversy Media"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does GitHub Pages do?"
      options: ["Hosts your Git repository's README as a webpage", "Runs server-side code", "Deploys static HTML/CSS/JS files as a live website for free", "Manages your domain name"]
      answer: 2
      explanation: "GitHub Pages serves your static files (HTML, CSS, JS) as a live, public website at username.github.io/repo-name. Free and no server required."
    - type: multiple-choice
      question: "What makes a good developer portfolio?"
      options: ["As many projects as possible", "2-3 real projects with source code links, a clear name/role, and a way to contact you", "A complete resume in PDF format", "Certifications and awards"]
      answer: 1
      explanation: "Quality over quantity. Recruiters spend ~10 seconds on a portfolio. Your name/role, 2-3 real projects, and a contact link are what matter."
    - type: fill-blank
      question: "The GitHub Pages settings page where you configure which branch to deploy from is under ___"
      answer: "Settings → Pages"
      explanation: "In your GitHub repo: Settings → Pages → Source → Deploy from a branch → select main → /root → Save."
---

## Phase 1 — Plan (20 min)

**Why this matters:** A portfolio is proof that you can build real things. Your first portfolio doesn't need to be perfect — it needs to exist. Employers don't check if your first portfolio is impressive; they check if a portfolio exists at all. Ship it.

**What makes a good portfolio:**
- Your name and what you do (e.g., "Front-End Developer") — above the fold
- 2–3 real projects with a screenshot, one-line description, and links to live demo + source code
- A skills section (technologies you're comfortable with)
- A contact section (email or LinkedIn)

**What doesn't matter for a first portfolio:**
- Animations (unless they're subtle and purposeful)
- Lots of text about yourself
- Anything that isn't a working link

## Phase 2 — Build + Deploy (85 min)

- **Build the portfolio** with these sections:
  1. **Hero** — your name, role title ("Front-End Developer"), one-line tagline, and two buttons: "View Projects" (scrolls down) and "Contact Me"
  2. **Projects** — 3 project cards in CSS Grid. Each card: screenshot or placeholder, project name, 1-sentence description, "Live Demo" and "Source Code" links
  3. **Skills** — a Flexbox row of technology badges (HTML, CSS, JavaScript, etc.)
  4. **Contact** — email link and optionally LinkedIn and GitHub links

- **Deploy to GitHub Pages**:
  1. Push your portfolio to a GitHub repository
  2. Go to Settings → Pages → Source → Deploy from branch → main → /root → Save
  3. Wait 30–60 seconds, then visit \`https://yourusername.github.io/portfolio\`

## Review

Share your GitHub Pages URL with one other person. Does it load on their device? Does the layout break on mobile? Fix one real issue based on their feedback.
`;export{e as default};