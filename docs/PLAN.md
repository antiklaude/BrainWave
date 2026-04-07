# BrainWave — Implementation Plan

> Review this before building. Every decision here is intentional and reversible.

---

## Simplifications made vs original spec

The Claude.md spec was correct in direction but over-engineered in implementation.
Here's what changed and why:

| Original spec | Simplified to | Reason |
|---|---|---|
| Zustand for global state | Custom hooks only (`useProgress`, `useTheme`) | Zustand adds a dependency + boilerplate for what's just 2 localStorage keys. Custom hooks are testable, portable, and zero-dep. |
| Separate quiz JSON files per session | Quiz questions embedded in session `.md` frontmatter as YAML | Fewer files, easier to author — the person writing the session content writes the quiz in the same file |
| MDX with `@mdx-js/rollup` Vite plugin | Plain `.md` + Vite `?raw` import + `gray-matter` | MDX requires a Vite plugin and React component authoring inside markdown. `?raw` is built into Vite, costs zero config. |
| Deep nesting: `courses/{id}/sessions/01.md` + `courses/{id}/quizzes/` | Flat: `courses/{id}/sessions/01.md` only (quiz inside frontmatter) | Fewer directories, all content for a session in one file |
| `catalog.js` + per-course `meta.js` | Single `catalog.js` with full metadata inline | One file to read for the whole catalog. No need to open 9 files to understand what courses exist. |
| Tailwind only | Tailwind for layout + existing CSS variables for brand colors | The BrainWave design tokens (accent, bg, text vars) are already solid. Tailwind handles responsive layout. No conflict if configured correctly. |
| Separate certificate service | `@react-pdf/renderer` (client-side) | Generates a real vector PDF in the browser. No server, no email, no login. User enters their name, clicks download, done. |
| React Router nested routes | Flat routes: `/` and `/courses/:id` | Sessions are accordion panels on the same page — no URL per session needed. Keeps the URL clean and avoids over-routing. |

**Net result**: 5 fewer npm packages, ~30% less boilerplate, same capability.

---

## Final tech stack

```
React 18 + Vite          → framework + build tool
React Router v6          → 2 routes: / and /courses/:id
Tailwind CSS             → layout, spacing, responsive breakpoints
CSS variables            → brand colors and dark/light mode (already built)
gray-matter              → parse .md frontmatter (videos, quiz, metadata)
react-markdown           → render session body content
lucide-react             → icons (chevron, check, play, search, etc.)
@react-pdf/renderer      → client-side PDF certificate generation (no server)
```

**Total new dependencies: 6**
(`react-router-dom`, `tailwindcss`, `gray-matter`, `react-markdown`, `lucide-react`, `@react-pdf/renderer`)

No state library. No markdown plugins. No extra loaders.

---

## File structure

```
BrainWave/
├── docs/
│   ├── PLAN.md                    ← this file
│   └── CONTENT-GUIDE.md           ← how to write courses + quizzes
├── src/
│   ├── data/
│   │   ├── catalog.js             ← array of all courses (metadata only)
│   │   └── courses/
│   │       ├── fl-studio-20/
│   │       │   └── sessions/
│   │       │       ├── 01.md
│   │       │       └── ...10.md
│   │       └── ableton-live-12/
│   │           └── sessions/
│   │               └── ...
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppShell.jsx       ← wraps all pages (nav + bottom bar slot)
│   │   │   ├── TopNav.jsx         ← logo, search (catalog), back button (course)
│   │   │   └── BottomTabBar.jsx   ← mobile only, shows on all pages
│   │   ├── catalog/
│   │   │   ├── CourseCard.jsx     ← card with progress bar, accent color
│   │   │   └── FilterBar.jsx      ← category pills + search input
│   │   ├── course/
│   │   │   ├── CourseSidebar.jsx  ← desktop: sticky session list
│   │   │   ├── SessionPanel.jsx   ← accordion: videos + phases + quiz trigger
│   │   │   └── VideoModal.jsx     ← YouTube iframe overlay
│   │   ├── quiz/
│   │   │   ├── QuizModal.jsx      ← wraps the quiz flow in a modal
│   │   │   ├── QuizQuestion.jsx   ← renders one question (MC or fill-blank)
│   │   │   └── QuizResult.jsx     ← score screen with pass/fail + retry + cert CTA
│   │   ├── certificate/
│   │   │   ├── Certificate.jsx    ← @react-pdf/renderer PDF template
│   │   │   └── CertDownload.jsx   ← name input + PDFDownloadLink button
│   │   └── ui/
│   │       ├── ProgressBar.jsx    ← reused in sidebar + cards
│   │       └── ThemeToggle.jsx
│   ├── hooks/
│   │   ├── useProgress.js         ← get/set session completion per course
│   │   ├── useTheme.js            ← dark/light toggle + localStorage
│   │   └── useCertificate.js      ← read/write earned cert from localStorage
│   ├── pages/
│   │   ├── HomePage.jsx           ← catalog grid with filter + search
│   │   └── CoursePage.jsx         ← sidebar + session list + overview tabs
│   ├── utils/
│   │   └── parseSessions.js       ← load + parse all .md files for a course
│   ├── App.jsx                    ← router setup
│   ├── main.jsx
│   └── index.css                  ← Tailwind directives + CSS variable definitions
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

**Component count: 15**
That's the full app. Nothing more.

---

## Data architecture

### `catalog.js` — the course index

```js
export const catalog = [
  {
    id: 'fl-studio-20',
    title: 'FL Studio 20',
    subtitle: 'Zero to Hero in 20 Hours',
    category: 'music',
    categoryLabel: 'Music Production',
    accent: '#a78bfa',
    hours: 20,
    sessionCount: 10,
    levels: 5,
    status: 'available',           // 'available' | 'coming-soon'
    tags: ['EDM', 'Trap', 'LoFi', 'Trance', 'Ambient'],
    description: 'Master EDM, Trap, LoFi...',
  },
  // ...
]
```

### Session `.md` file — everything in one place

```markdown
---
title: "DAW Orientation + First Beat"
duration: 120
level: 1
levelLabel: "LVL 1"
levelColor: "#6ee7b7"
videos:
  - id: "pDIsEZsalAo"
    title: "Complete Beginner Basics — In The Mix"
  - id: "Est8ZMlG_9Y"
    title: "FL Studio Full Guide — Kevin Stratvert"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What BPM is standard for trap music?"
      options: ["100", "120", "140", "160"]
      answer: 2
      explanation: "140 BPM gives hi-hat rolls room to breathe."
    - type: multiple-choice
      question: "Which panel is used for drum programming?"
      options: ["Piano Roll", "Mixer", "Step Sequencer", "Playlist"]
      answer: 2
---

## Phase 1 — Learn (45 min)

- FL Studio UI tour: Channel Rack, Piano Roll, Playlist, Mixer
- BPM = 140. Set it. Don't question it yet.
- Load a kick, snare, hi-hat from stock samples

## Phase 2 — Do (60 min)

- Build a 4-bar trap drum pattern in the Step Sequencer
- Arrange it in the Playlist (16 bars, looping)
- Export as WAV. Done. You just made a track.

## 15-Min Review

Play your beat back. Does the kick hit every bar? Can you hear the snare
on beat 2 and 4? Note one thing you want to change next session.
```

### How sessions are loaded (no Vite plugin needed)

```js
// utils/parseSessions.js
import matter from 'gray-matter'

// Vite's ?raw suffix imports the file as a plain string — zero config
const sessionFiles = import.meta.glob('../data/courses/*/sessions/*.md', { as: 'raw' })

export async function loadSessions(courseId) {
  const results = []
  for (const [path, loader] of Object.entries(sessionFiles)) {
    if (!path.includes(`/${courseId}/`)) continue
    const raw = await loader()
    const { data: frontmatter, content } = matter(raw)
    results.push({ ...frontmatter, content, path })
  }
  return results.sort((a, b) => a.path.localeCompare(b.path))
}
```

`import.meta.glob` is Vite-native — no plugins, no config. The `?raw` import is also Vite-native.

---

## Routing

```
/                          → HomePage   (catalog grid)
/courses/:courseId         → CoursePage (sidebar + sessions)
*                          → NotFound
```

No sub-routes. Sessions are accordion panels. The sidebar highlights the active session by scroll position (Intersection Observer), not by URL.

---

## State — two hooks, no library

```js
// hooks/useProgress.js
// Reads/writes: localStorage key 'bw_progress_{courseId}'
// Returns: { completed: Set<sessionId>, toggle(sessionId), percent }

// hooks/useTheme.js
// Reads/writes: localStorage key 'bw_theme'
// Returns: { theme: 'dark'|'light', toggle() }
// Sets data-theme on <html> — same as current implementation
```

These two hooks cover 100% of the state this app needs right now.
If user accounts are added later, the `useProgress` hook is the only thing that changes — the rest of the app stays the same.

---

## Layout

### Desktop (≥ 1024px)

```
┌─────────────────────────────────────────────────────────────┐
│ TopNav  [← Back]  FL Studio 20             [theme toggle]   │
├───────────────────┬─────────────────────────────────────────┤
│ Sidebar (260px)   │ Main content (flex-1)                   │
│ sticky, scrolls   │                                         │
│ independently     │  Course header: title + stats           │
│                   │  Tabs: Overview | Ladder | Sessions      │
│ ─────────────     │                                         │
│ 4/10 complete     │  [session accordions]                   │
│ ▓▓▓▓░░░░░░        │   ↳ videos                              │
│                   │   ↳ phases + tasks                      │
│ ○ Session 01      │   ↳ review box                          │
│ ✓ Session 02      │   ↳ [Quick Check] button if quiz exists │
│ ○ Session 03      │                                         │
│   ...             │  [Final Assessment] at bottom           │
└───────────────────┴─────────────────────────────────────────┘
```

### Mobile (< 1024px)

```
┌─────────────────────────────────┐
│ TopNav  [← Back]  FL Studio     │  ← fixed
├─────────────────────────────────┤
│                                 │
│  Course header                  │
│  Tabs: Overview | Ladder | ...  │
│                                 │
│  Session 01      ○  ▶           │
│  ─────────────────────          │
│  Session 02      ✓  ▶           │  ← expanded
│   [video thumbnails]            │
│   Phase 1 tasks                 │
│   Phase 2 tasks                 │
│   [Quick Check]                 │
│  ─────────────────────          │
│  Session 03      ○  ▶           │
│                                 │
├─────────────────────────────────┤
│  🏠 Home   📚 Courses  🔍 Search │  ← fixed bottom tab bar
└─────────────────────────────────┘
```

---

## Quiz UX

### Quick Check (session-level)
- Triggered by a button at the bottom of each session panel (only shown if session has `quiz` in frontmatter)
- Opens a **modal** (not a page, keeps context)
- 3–5 questions
- Immediate feedback per question: correct = green highlight, wrong = red + shows explanation
- Score badge shown on completion: `3/5 — Good effort` / `5/5 — Perfect`
- Passing the quiz marks the session as complete automatically

### Final Assessment (course-level)
- CTA button shown at the bottom of the Sessions tab once all sessions are done
- Also accessible any time from the sidebar (desktop) or a tab
- Opens a **full-screen modal** (quiz deserves full focus)
- 10–15 questions
- No per-question feedback until the end
- End screen: score, list of wrong answers with explanations, retry button, share result button

---

## Build order (phases)

### Phase 1 — Project scaffold (Day 1)
1. `npm create vite@latest` → React template
2. Install 5 dependencies
3. Configure Tailwind + CSS variables
4. Set up React Router (2 routes)
5. Set up `useProgress` + `useTheme` hooks
6. Migrate `catalog.js` from current `index.html` JS

### Phase 2 — Catalog page (Day 1–2)
7. `AppShell` + `TopNav` + `BottomTabBar`
8. `CourseCard` component
9. `FilterBar` (search + category pills)
10. `HomePage` wired up — matches current landing page in UX, better in code

### Phase 3 — Course data (Day 2)
11. Migrate FL Studio 20 HTML content → 10 `.md` session files
12. Migrate Ableton Live 12 HTML content → 10 `.md` session files
13. `parseSessions` util — verify loading works

### Phase 4 — Course page (Day 2–3)
14. `CourseSidebar` (desktop) — session list, progress, scroll spy
15. `SessionPanel` (accordion) — videos, phases, review, quiz trigger
16. `VideoModal` — YouTube iframe, same as current player.js
17. `CoursePage` wired up — tabs, sidebar, sessions

### Phase 5 — Quiz engine (Day 3–4)
18. `QuizQuestion` — multiple choice + fill-blank renderers
19. `QuizModal` — question flow, scoring
20. `QuizResult` — score screen
21. Wire quick-check to session panels
22. Wire final assessment to course bottom

### Phase 6 — Certificates (Day 4)
23. `Certificate.jsx` — `@react-pdf/renderer` PDF template (course accent color, name, score, cert ID)
24. `CertDownload.jsx` — name input + `PDFDownloadLink` download button
25. `useCertificate.js` — persist cert data to localStorage for re-download
26. Wire into `QuizResult` — show cert section only on pass
27. Wire into `CourseSidebar` — show re-download link if cert already earned
28. Test PDF download on mobile (iOS Safari + Android Chrome)

### Phase 7 — Polish (Day 5)
29. Scroll spy for sidebar active state
30. Animations (Tailwind transitions, no extra lib)
31. Mobile UX pass — bottom tab bar, session tap targets, modal sizing
32. Dark/light mode — verify all components

---

## Migration from current HTML

The current `index.html`, `FLStudio20/index.html`, and `AbeltonLive12/index.html` stay untouched in the root until the React app is verified working.

The React app builds to `dist/`. When ready to go live:
1. Delete the old HTML files
2. Point Vercel to `dist/` as the publish directory

Or keep both — the HTML prototype stays as a reference/fallback.

---

## What is NOT being built (intentionally)

- **User accounts / login** — localStorage is enough for MVP. Supabase can be added in Phase 5 if needed.
- **Comments** — can be added via Giscus (GitHub Discussions) in one component, but it's not in scope.
- **SSR / Next.js** — overkill for a static LMS. Vite SPA deploys just as easily to Vercel.
- **i18n** — not in scope.
- **PWA / offline** — nice to have later, not now.
- **Analytics** — can add Plausible (privacy-friendly, free) in one script tag later.
