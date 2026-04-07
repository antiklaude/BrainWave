# BrainWave — New Course Content Design
**Date:** 2026-04-06
**Scope:** 7 new courses (coming-soon → available)
**Reviewed by:** Peer review agent (curriculum design specialist)

---

## What This Doc Covers

Design spec for creating full course content for the 7 coming-soon courses on BrainWave. This does NOT cover migration of FL Studio 20 or Ableton Live 12 (handled separately).

---

## Content Standard (per CONTENT-GUIDE.md)

Each course produces:
1. **Session `.md` files** — one per session, following the content-guide.md format
2. **Ladder tab content** — full prose theory guide per level (Option C)

### Session file format

Each session `.md` includes:
- **Frontmatter**: title, duration, level, levelLabel, levelColor, videos (real YouTube IDs), quiz
- **Phase 1 — Learn**: enriched with theory (why it matters + what it is + key insight callout)
- **Phase 2 — Do**: hands-on tasks, specific and actionable
- **Review**: reflective question that reinforces the session's core concept

### Ladder tab format (per level)

Each level in the ladder gets:
- **What this level is about** (2–3 sentence plain-English overview)
- **Core concepts** (named bullets with brief explanations)
- **Key insight** (one memorable callout box)
- **What you'll be able to do after this level** (milestone statement)

### Quiz format

- Quick-check: 3–5 questions per session (multiple-choice or fill-blank)
- passMark: 60
- Questions test practical understanding, not memorisation

### YouTube sourcing criteria

Videos must:
- Be from trusted creators (freeCodeCamp, Traversy Media, Kevin Stratvert, Fireship, Blender Guru, etc.)
- Cover the session topic directly (not a tangential overview)
- Be beginner-accessible (no assumed prior knowledge within the level)
- Prefer videos under 30 min for theory, under 60 min for full tutorials

---

## Execution Strategy

**Approach**: Option 1 (skeleton → approval) then Option 2 (course-by-course)
**Approval**: Peer review agent (not user) — asks: best content? accurate? better simplified version?
**One course at a time**: research → write sessions → write ladder content → peer review → commit

### File output locations

```
src/data/courses/
  python-programming/sessions/01.md ... 15.md
  web-dev/sessions/01.md ... 12.md
  azure-devops/sessions/01.md ... 12.md
  graphic-design/sessions/01.md ... 10.md
  3d-modelling/sessions/01.md ... 15.md
  3d-printing/sessions/01.md ... 08.md
  ui-ux-design/sessions/01.md ... 10.md

docs/ladder-guides/
  python-programming.md
  web-dev.md
  azure-devops.md
  graphic-design.md
  3d-modelling.md
  3d-printing.md
  ui-ux-design.md
```

---

## Course 1 — Python Programming

**ID**: `python-programming` | **Hours**: 30 | **Sessions**: 15 | **Levels**: 5
**Accent**: `#34d399` | **Category**: code | **Tags**: Python, Automation, OOP, Data

### Level breakdown (peer-reviewed + revised)

| Level | Color | Sessions | Theme | Milestone |
|---|---|---|---|---|
| LVL 1 | `#6ee7b7` | 01–03 | Foundations | Write and run a working Python script |
| LVL 2 | `#7dd3fc` | 04–06 | Data Structures + First Project | Build a working CLI game |
| LVL 3 | `#fbbf24` | 07–09 | OOP + Modules | Build a reusable module with classes |
| LVL 4 | `#f472b6` | 10–12 | Real World Skills | Fetch live data and analyse a CSV |
| LVL 5 | `#a78bfa` | 13–15 | Projects | Ship 3 distinct Python projects |

### Session list

| # | Title | Level | Duration |
|---|---|---|---|
| 01 | Variables, Data Types + f-strings | LVL 1 | 90 min |
| 02 | Strings + Reading Error Messages | LVL 1 | 90 min |
| 03 | Control Flow — if/else + loops | LVL 1 | 90 min |
| 04 | Functions + Scope | LVL 2 | 90 min |
| 05 | Lists + Dictionaries | LVL 2 | 100 min |
| 06 | Mini Project — Number Guesser CLI | LVL 2 | 120 min |
| 07 | Classes + Objects | LVL 3 | 100 min |
| 08 | Modules + pip + venv | LVL 3 | 90 min |
| 09 | File I/O + Exception Handling | LVL 3 | 90 min |
| 10 | APIs + JSON + requests | LVL 4 | 100 min |
| 11 | Intro to pandas + CSV Analysis | LVL 4 | 100 min |
| 12 | Data Project — Real Dataset | LVL 4 | 120 min |
| 13 | Web Scraping with BeautifulSoup | LVL 5 | 110 min |
| 14 | Inheritance + Advanced OOP | LVL 5 | 90 min |
| 15 | Final Project — CLI Tool | LVL 5 | 120 min |

### Reviewer notes
- f-strings introduced in Session 01 alongside `print()`
- Error message reading (tracebacks) in Session 02 — before learner hits real errors alone
- `venv` covered in Session 08 alongside pip
- Project deliverable at Session 06 (not Session 13) — prevents motivation drop
- Inheritance deferred to LVL 5 — earns its place once learner reads library code

---

## Course 2 — Web Development

**ID**: `web-dev` | **Hours**: 25 | **Sessions**: 12 | **Levels**: 4
**Accent**: `#fb923c` | **Category**: code | **Tags**: HTML, CSS, JavaScript, Responsive

### Level breakdown

| Level | Color | Sessions | Theme | Milestone |
|---|---|---|---|---|
| LVL 1 | `#6ee7b7` | 01–03 | HTML + CSS Foundations | Style a multi-section webpage |
| LVL 2 | `#7dd3fc` | 04–06 | CSS Mastery + Responsive | Build a fully responsive layout |
| LVL 3 | `#fbbf24` | 07–09 | JavaScript | Make a page interactive with live data |
| LVL 4 | `#f472b6` | 10–12 | Projects | Portfolio-worthy website in 3 sessions |

### Session list

| # | Title | Level | Duration |
|---|---|---|---|
| 01 | HTML Structure + Semantic Elements | LVL 1 | 90 min |
| 02 | CSS Basics + Box Model + DevTools | LVL 1 | 100 min |
| 03 | Forms, Tables + Media | LVL 1 | 90 min |
| 04 | Flexbox — 1D Layouts | LVL 2 | 90 min |
| 05 | CSS Grid + Responsive Design | LVL 2 | 100 min |
| 06 | Animations, Transitions + CSS Variables | LVL 2 | 90 min |
| 07 | JavaScript Fundamentals | LVL 3 | 100 min |
| 08 | DOM Manipulation + Events | LVL 3 | 100 min |
| 09 | Fetch API + Async/Await + JSON | LVL 3 | 100 min |
| 10 | Project — Landing Page | LVL 4 | 120 min |
| 11 | Project — Weather App (Live API) | LVL 4 | 120 min |
| 12 | Project — Personal Portfolio | LVL 4 | 120 min |

### Reviewer notes
- CSS Basics moved to Session 02 (before Forms) — learner styles their HTML immediately
- Box Model and DevTools are named concepts in Session 02, not buried
- Flexbox vs Grid decision-making covered in Session 05

---

## Course 3 — Azure DevOps

**ID**: `azure-devops` | **Hours**: 25 | **Sessions**: 12 | **Levels**: 4
**Accent**: `#60a5fa` | **Category**: devops | **Tags**: CI/CD, Azure, Pipelines, Git

### Level breakdown (peer-reviewed + revised)

| Level | Color | Sessions | Theme | Milestone |
|---|---|---|---|---|
| LVL 1 | `#6ee7b7` | 01–03 | Foundations — platform + source control | Push code and raise a PR |
| LVL 2 | `#7dd3fc` | 04–06 | Boards + CI — plan work + automate builds | Pipeline runs green on every push |
| LVL 3 | `#fbbf24` | 07–09 | Infra + Connections + Environments | Deploy to Azure from a pipeline |
| LVL 4 | `#f472b6` | 10–12 | Release + Monitoring + Security | Full CD pipeline with gates and secrets |

### Session list

| # | Title | Level | Duration |
|---|---|---|---|
| 01 | Azure DevOps Overview + Navigation | LVL 1 | 90 min |
| 02 | Git + Azure Repos + Branching | LVL 1 | 100 min |
| 03 | Pull Requests + Branch Policies | LVL 1 | 90 min |
| 04 | Boards + Work Items + Sprints | LVL 2 | 90 min |
| 05 | Your First YAML Pipeline | LVL 2 | 100 min |
| 06 | Build + Test Automation | LVL 2 | 100 min |
| 07 | Artifacts + Package Management | LVL 3 | 90 min |
| 08 | Azure Infra Basics (App Service + Resource Groups) | LVL 3 | 100 min |
| 09 | Service Connections + Environments | LVL 3 | 90 min |
| 10 | Release Pipelines + Deploy Strategies | LVL 4 | 110 min |
| 11 | Approvals + Gates + Environment Protection | LVL 4 | 90 min |
| 12 | Monitoring + App Insights + Secrets Management | LVL 4 | 100 min |

### Reviewer notes
- Azure DevOps overview in Session 01 before any tooling — context first
- Boards moved to LVL 2 (Session 04) — learner understands what they're tracking by then
- Azure Infra Basics (Session 08) precedes Release Pipelines (Session 10) — hard prerequisite
- Service Connections added as dedicated topic in Session 09
- Variable groups + Key Vault integration in Session 12

---

## Course 4 — Graphic Design

**ID**: `graphic-design` | **Hours**: 20 | **Sessions**: 10 | **Levels**: 4
**Accent**: `#f472b6` | **Category**: design | **Tags**: Typography, Color, Figma, Canva

### Level breakdown

| Level | Color | Sessions | Theme | Milestone |
|---|---|---|---|---|
| LVL 1 | `#6ee7b7` | 01–02 | Design Principles — color + type | Understand why things look good or bad |
| LVL 2 | `#7dd3fc` | 03–04 | Composition — grid, hierarchy, balance | Design a balanced single-page layout |
| LVL 3 | `#fbbf24` | 05–07 | Tools — Figma, Canva, asset prep | Produce print and digital-ready graphics |
| LVL 4 | `#f472b6` | 08–10 | Projects — brand, social, portfolio | Complete brand identity + 3 deliverables |

### Session list

| # | Title | Level | Duration |
|---|---|---|---|
| 01 | Color Theory + Psychology | LVL 1 | 90 min |
| 02 | Typography Fundamentals | LVL 1 | 90 min |
| 03 | Layout + Grid + Alignment + Repetition | LVL 2 | 100 min |
| 04 | Contrast, White Space + Visual Hierarchy | LVL 2 | 90 min |
| 05 | Figma Fundamentals | LVL 3 | 100 min |
| 06 | Canva for Rapid Design (when speed > precision) | LVL 3 | 90 min |
| 07 | Asset Preparation + Photo Editing Basics | LVL 3 | 90 min |
| 08 | Brand Identity — Logo, Colors, Fonts | LVL 4 | 110 min |
| 09 | Social Media Graphics + Poster Design | LVL 4 | 100 min |
| 10 | Presentation Design + Portfolio | LVL 4 | 90 min |

### Reviewer notes
- Alignment + Repetition added to Session 03 (CARP principles now complete)
- Session 06 explicitly framed as "use when speed matters more than precision"
- Session 07 scoped to asset preparation (background removal, resizing, export for web/print)

---

## Course 5 — 3D Modelling (Blender)

**ID**: `3d-modelling` | **Hours**: 30 | **Sessions**: 15 | **Levels**: 5
**Accent**: `#fb923c` | **Category**: 3d | **Tags**: Blender, Modelling, Rigging, Render

### Level breakdown

| Level | Color | Sessions | Theme | Milestone |
|---|---|---|---|---|
| LVL 1 | `#6ee7b7` | 01–03 | Orientation — interface + edit mode | Model and render a simple object |
| LVL 2 | `#7dd3fc` | 04–06 | Modelling — workflow + hard + organic | Model 3 distinct objects |
| LVL 3 | `#fbbf24` | 07–09 | Materials + Textures | Fully textured, UV-unwrapped model |
| LVL 4 | `#f472b6` | 10–12 | Lighting + Rendering | Portfolio-ready render |
| LVL 5 | `#a78bfa` | 13–15 | Animation | 10-second animated sequence |

### Session list

| # | Title | Level | Duration |
|---|---|---|---|
| 01 | Blender Interface + Navigation | LVL 1 | 90 min |
| 02 | Basic Objects + Transforms + Apply | LVL 1 | 90 min |
| 03 | Edit Mode — Vertices, Edges, Faces + Normals | LVL 1 | 100 min |
| 04 | Modelling Workflow + Modifiers | LVL 2 | 100 min |
| 05 | Hard Surface Modelling | LVL 2 | 110 min |
| 06 | Organic Modelling + Subdivision Surface | LVL 2 | 110 min |
| 07 | UV Unwrapping | LVL 3 | 100 min |
| 08 | Shader Editor + PBR Materials | LVL 3 | 110 min |
| 09 | Procedural Textures + Node Groups | LVL 3 | 100 min |
| 10 | Lighting Fundamentals — 3-Point + HDRI | LVL 4 | 100 min |
| 11 | Cycles vs EEVEE — Settings + Use Cases | LVL 4 | 90 min |
| 12 | Basic Compositing for Render Output | LVL 4 | 90 min |
| 13 | Keyframes + Graph Editor + Timeline | LVL 5 | 100 min |
| 14 | Rigging + Armatures | LVL 5 | 110 min |
| 15 | Final Animation Project | LVL 5 | 120 min |

### Reviewer notes
- **Sessions 07 and 08 swapped** — UV Unwrapping is a hard prerequisite for PBR materials
- Normals added as named concept in Session 03
- Apply Transforms named in Session 02 — Blender's most common beginner trap
- Session 12 scoped to basic render output compositing only (color grading, glare, denoise)

---

## Course 6 — 3D Printing

**ID**: `3d-printing` | **Hours**: 15 | **Sessions**: 8 | **Levels**: 3
**Accent**: `#fbbf24` | **Category**: 3d | **Tags**: FDM, CAD, Slicing, Printing

### Level breakdown (peer-reviewed + revised)

| Level | Color | Sessions | Theme | Milestone |
|---|---|---|---|---|
| LVL 1 | `#6ee7b7` | 01–03 | FDM Fundamentals | Successfully complete your first print |
| LVL 2 | `#7dd3fc` | 04–06 | Design for Printing | Design and print an original object |
| LVL 3 | `#fbbf24` | 07–08 | Advanced Slicing + Finishing | Troubleshoot failed prints and post-process |

### Session list

| # | Title | Level | Duration |
|---|---|---|---|
| 01 | How FDM Works + Printer Parts + Safety | LVL 1 | 90 min |
| 02 | Materials (PLA, PETG, ABS) + Print Settings | LVL 1 | 90 min |
| 03 | Cura Basics + Bed Levelling + First Print | LVL 1 | 110 min |
| 04 | TinkerCAD Fundamentals | LVL 2 | 100 min |
| 05 | Fusion 360 Intro + Parametric Design | LVL 2 | 110 min |
| 06 | Design Rules for 3D Printing | LVL 2 | 90 min |
| 07 | Advanced Slicing + Support Strategies | LVL 3 | 100 min |
| 08 | Troubleshooting + Post-Processing + Finishing | LVL 3 | 100 min |

### Reviewer notes
- **Cura named as the slicer** (not generic "slicing software") — consistency for content writers
- Cura basics introduced in Session 03 alongside first print — learner uses it before they finish LVL 1
- Safety content (fumes, fire risk, enclosures) added to Session 01
- Bed adhesion methods (PEI, glass, glue stick) added to Session 01/03

---

## Course 7 — UI/UX Design

**ID**: `ui-ux-design` | **Hours**: 20 | **Sessions**: 10 | **Levels**: 4
**Accent**: `#a78bfa` | **Category**: design | **Tags**: Figma, Wireframes, Prototyping, UX

### Level breakdown

| Level | Color | Sessions | Theme | Milestone |
|---|---|---|---|---|
| LVL 1 | `#6ee7b7` | 01–02 | UX Foundations | Frame a real user problem with research |
| LVL 2 | `#7dd3fc` | 03–04 | Wireframing | Low-fi prototype ready for testing |
| LVL 3 | `#fbbf24` | 05–07 | Figma + High-Fidelity | Polished, interactive hi-fi prototype |
| LVL 4 | `#f472b6` | 08–10 | Testing + Ship | Tested, handed off, case study written |

### Session list

| # | Title | Level | Duration |
|---|---|---|---|
| 01 | UX vs UI + Design Thinking + User Research | LVL 1 | 90 min |
| 02 | Personas + Journey Maps + Competitor Analysis | LVL 1 | 100 min |
| 03 | Information Architecture + Wireframes | LVL 2 | 100 min |
| 04 | Low-Fidelity Prototyping | LVL 2 | 90 min |
| 05 | Figma Fundamentals + Components + Auto Layout | LVL 3 | 110 min |
| 06 | Design Systems + Style Guides + Accessibility | LVL 3 | 100 min |
| 07 | Hi-Fi Prototyping + Interactions | LVL 3 | 110 min |
| 08 | Usability Testing + Heuristic Evaluation | LVL 4 | 90 min |
| 09 | Developer Handoff + Design Specs | LVL 4 | 90 min |
| 10 | Portfolio Case Study | LVL 4 | 100 min |

### Reviewer notes
- Competitor analysis added to Session 02 alongside Personas
- Accessibility (WCAG basics, contrast, touch targets) added to Session 06 (Design Systems)
- IA introduced as concept in Session 01 (design thinking phase), formally taught in Session 03

---

## Execution Order

| Priority | Course | Sessions | Complexity |
|---|---|---|---|
| 1 | Python Programming | 15 | High |
| 2 | Web Development | 12 | Medium |
| 3 | UI/UX Design | 10 | Medium |
| 4 | Graphic Design | 10 | Medium |
| 5 | Azure DevOps | 12 | High |
| 6 | 3D Modelling | 15 | High |
| 7 | 3D Printing | 8 | Low |

Start with Python (largest beginner audience, highest impact) and end with 3D Printing (smallest, most hardware-specific).

---

## Quality Gate (per course)

Before each course is committed:
1. Peer review agent checks: best content? accurate? better simplified version?
2. All YouTube IDs verified as real and playable
3. Quiz questions tested for clarity and correct answers
4. Ladder guide prose checked for readability (no jargon without explanation)
