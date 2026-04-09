# BrainWave — Next Phase Roadmap Design

**Date:** 2026-04-07  
**Status:** Approved for planning

---

## Context

BrainWave currently has 2 live courses (FL Studio 20, Ableton Live 12) and 7 coming-soon placeholders. The core player — sessions, video modals, quick-check quizzes, progress tracking — is complete. This document specifies the next wave of platform improvements before new courses are added.

---

## Key Decisions

| Decision | Choice |
|---|---|
| New courses timing | Later — after platform features ship |
| New course topics | Brand new (not from coming-soon list) |
| Feedback portal approach | Fully custom serverless (Vercel functions → GitHub Issues API) |
| Tab structure | 3 tabs: Overview, Sessions, Final Quiz |
| Overview + Ladder | Merged into one Overview tab |
| Final Quiz access | Locked until all sessions in the course are completed |

---

## Phase 3 — Tab Restructure + Overview Redesign

### What changes

Current 3 tabs: `Overview | Learning Ladder | Sessions`  
New 3 tabs: `Overview | Sessions | Final Quiz`

The Overview and Learning Ladder tabs are merged. The Final Quiz gets its own tab.

### Tab 1 — Overview (merged Overview + Ladder)

A single scrollable page structured in four zones:

**Zone A — Course Philosophy**
4 cards pulled from `meta.js` via a new `philosophy` field (array of `{icon, title, desc}`). Currently these are hardcoded FL Studio content and display identically on every course. Each course gets its own philosophy cards. Courses without the field show a generic fallback set.

New `meta.js` fields added per course:
```js
philosophy: [
  { icon: '⚡', title: 'Rule title', desc: 'Rule description.' },
  ...
],
prerequisites: ['No prior experience needed'],
tools: ['FL Studio 20 (free trial)', 'Headphones'],
```

**Zone B — Prerequisites + Tools**
A compact 2-column row beneath the philosophy cards:
- Left: `Prerequisites` — list from `meta.prerequisites`
- Right: `Tools needed` — list from `meta.tools`

**Zone C — Visual Skill Tree**
Vertical connected node diagram replacing the flat level list. Data source: `course.ladder` array already defined in `meta.js` for FL Studio and Ableton.

Node states:
- **Completed** — filled accent circle, checkmark, level title in full colour
- **Active** — pulsing ring, "→ current" label
- **Locked** — dimmed, lock icon, greyed title

Clicking an unlocked node switches to the Sessions tab and auto-scrolls to that level's first session.

**Zone D — Outcomes per Level**
Beneath each node: 2–3 concrete outcome statements from `lvl.outcomes`. Example: "Export a finished 4-bar beat from scratch." This replaces the current fallback that showed session titles grouped by level — which was redundant with the Sessions tab.

**Zone E — Cross-Course Skill Map** *(bottom of page)*
A compact panel:
- `Skills you'll build` — drawn from `course.tags`
- `This course unlocks →` — hardcoded per-course in `meta.js` as `unlocks: ['ableton-live-12']`, rendered as clickable course cards linking to those courses

---

### Tab 2 — Sessions

No changes. Existing accordion session list, video modals, quick-check quizzes, and progress marking remain identical.

---

### Tab 3 — Final Quiz

**Access rule:** Tab is visible always but locked (disabled, with a lock icon and "Complete all sessions to unlock" tooltip) until `progress` in the Zustand store shows 100% of sessions marked complete for that course.

**Quiz source:** Each course can have a `final-quiz.md` file at `src/data/courses/{course-id}/final-quiz.md`. Format already specified in `docs/CONTENT-GUIDE.md`. If no file exists, the tab shows a "Coming soon" placeholder.

**Quiz flow (inline, not modal):**
1. Intro screen — title, question count, pass mark (e.g. 70%), Start button
2. One question at a time — no going back
3. After each answer: immediate feedback (correct/incorrect + explanation)
4. Results screen — score, pass/fail state, list of wrong answers with correct answers shown, Retake button
5. On pass: certificate screen (see Phase 5 Gamification for certificate design)

**State:** Quiz attempt state lives in component-local state (not persisted). Retaking resets it. Pass/fail outcome is written to Zustand `progress` store as `finalQuizPassed: true` per course.

---

## Phase 4 — Feedback & Voting Portal

### Overview

A dedicated `/feedback` page accessible from the home page and sidebar. Split into two sections:

1. **Course Request Board** — public voting board, visitors see all requests and upvote them
2. **Bug Reports** — private submission form, visitors submit but don't see other reports

### Architecture

Static React frontend → Vercel serverless functions → GitHub Issues API

All GitHub API calls happen server-side in Vercel functions. The GitHub token is stored as a Vercel environment variable and never exposed to the browser.

### Course Request Board

**Reading requests (public):**  
Vercel function `GET /api/requests` — calls GitHub Issues API filtered by label `course-request`. Returns `{id, title, body, upvotes: reactions['+1'].count, createdAt}`. Cached for 60 seconds to avoid rate limits.

**Submitting a new request:**  
Form: course topic (text), why you want it (textarea), your name (optional). Submit → `POST /api/requests` serverless function → creates GitHub Issue with label `course-request`.

**Upvoting:**  
Each request card has a thumbs-up button. Click → `POST /api/upvote` serverless function → adds a `+1` reaction to the GitHub Issue via the Reactions API. Upvote state per issue stored in `localStorage` to prevent double-voting from the same browser.

**Display:** Cards sorted by upvote count descending. Shows title, description snippet, upvote count, date submitted. Top 3 get a "🔥 Popular" badge.

### Bug Reports

Form: page where the bug occurs (dropdown of courses + "other"), description (textarea), steps to reproduce (textarea), name (optional). Submit → `POST /api/bugs` serverless function → creates GitHub Issue with label `bug`, `reported-via-site`.

Submissions are private — no public listing. User sees a confirmation screen with the GitHub issue number so they can track it.

### Moderation

All issues land in the GitHub repo's Issues tab where you can manage them normally — close, label, respond. No custom moderation UI needed.

---

## Phase 5 — Gamification

*(Already partially specified in CLAUDE.md Phase 4. Expanded here.)*

### Streaks
- Daily learning streak tracked in Zustand + localStorage
- Streak counter shown in the sidebar next to the user's progress
- Streak resets if no session is marked complete for 24h+ since last activity

### Badges
Awarded automatically when conditions are met, stored in Zustand:

| Badge | Condition |
|---|---|
| First Beat | Complete session 1 of any course |
| Finisher | Complete all sessions in a course |
| Quiz Ace | Pass a final quiz with 100% |
| On a Roll | 3-day learning streak |
| Dedicated | 7-day learning streak |
| Completionist | Complete 2+ courses |

Badges shown on a `/profile` page (localStorage-based, no account needed).

### Completion Certificate
Triggered on final quiz pass. Full-screen celebration screen with:
- BrainWave logo + accent colour
- "Course Complete" heading
- Learner name (entered on first visit or prompted at certificate screen)
- Course name + date
- "Download Certificate" button → generates a styled PDF via `jsPDF` (client-side, no server)
- "Share on LinkedIn" button → pre-fills LinkedIn share URL

---

## Phase 6 — Platform Depth

### Continue Learning Widget (Home page)
A persistent banner at the top of the Home catalog page showing the last active course and session. One-click to resume. Disappears if no progress exists. Data from Zustand store.

### Global Full-Text Search
Extend existing search on Home page to search across session content (not just course titles/tags). Session `.md` files are imported at build time by Vite — content is available client-side. Use a simple in-memory index (Fuse.js, ~4kb) for fuzzy search. Results show session title + course name, clicking navigates directly to that session.

### Session Comments (Giscus)
Embed Giscus (GitHub Discussions) at the bottom of each session panel. Requires a one-time GitHub Discussions setup on the repo. Gives learners a place to ask questions and share tips per session.

### PWA / Offline Mode
Add a Vite PWA plugin (`vite-plugin-pwa`). Service worker caches all session markdown and assets. BrainWave becomes installable from the browser. Particularly useful on mobile.

### In-Session Notes
A collapsible notepad at the bottom of each session accordion. Free-text input, saved to `localStorage` keyed by `{courseId}-{sessionId}-notes`. Persists across visits.

---

## New Courses — Separate Track

New course topics (brand new, not from coming-soon list) to be decided after community voting portal launches. Candidates surfaced during brainstorming:

- Video Editing (DaVinci Resolve)
- Git & GitHub
- Excel / Google Sheets
- AI & Prompt Engineering
- Digital Art & Illustration (Procreate / Krita)
- Game Development (Godot)
- Linux & Terminal
- Photography
- Motion Graphics
- Podcasting

Final selection will be informed by upvote data from the Course Request Board (Phase 4).

---

## Phased Roadmap Summary

| Phase | Focus | Effort |
|---|---|---|
| **Phase 3** | Tab restructure, Overview/Ladder merge, Final Quiz tab | Medium |
| **Phase 4** | Feedback & Voting Portal (serverless + GitHub Issues) | Medium |
| **Phase 5** | Gamification — streaks, badges, certificates | Medium |
| **Phase 6** | Platform depth — search, comments, PWA, notes, continue widget | Large |
| **Courses** | New courses (decided after Phase 4 voting data) | Ongoing |

---

## What This Does NOT Include

- User accounts or authentication (no Supabase yet — deferred to later)
- Backend database (all state remains localStorage + GitHub Issues)
- Paid features or monetisation
- Admin dashboard (GitHub Issues UI is the admin interface)
