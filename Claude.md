# BrainWave — Project Spec

A **free, open learning hub** curating the best content from the internet into structured, guided learning paths. Zero ads. Zero paywalls. No login required.

---

## Stack

| Layer | Tool | Why |
|---|---|---|
| Framework | **React 18 + Vite** | Fast dev, SPA, great for quiz state |
| Routing | **React Router v6** | Client-side nav, nested routes |
| Styling | **Tailwind CSS** | Utility-first, responsive-first, dark/light mode |
| State | **Zustand** | Lightweight global state (progress, theme, quiz) |
| Content | **Markdown (.md) files** | Human-editable, one file per session |
| Icons | **Lucide React** | Clean, consistent icon set |
| Deploy | **Vercel** (free tier) | Zero-config React deploy |

---

## Core Principles

- **Static-first**: No backend. All progress stored in `localStorage`. Can migrate to Supabase later.
- **Content in Markdown**: Each session is a `.md` file. Non-developers can edit course content without touching code.
- **Mobile-first UX**: Bottom tab bar on mobile, sidebar on desktop. Every layout designed mobile-first then enhanced for desktop.
- **Quiz-ready**: Quiz engine built as a generic component. Any session or course can have a JSON quiz file attached.
- **Dark + Light mode**: User preference persisted via Zustand + localStorage.

---

## File Structure

```
BrainWave/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   ├── catalog.js                 ← all courses metadata array
│   │   └── courses/
│   │       ├── fl-studio-20/
│   │       │   ├── meta.js            ← title, accent, hours, tags, etc.
│   │       │   ├── sessions/
│   │       │   │   ├── 01.md          ← session content (frontmatter + markdown)
│   │       │   │   └── ...10.md
│   │       │   └── quizzes/
│   │       │       ├── session-01.js  ← optional: quick check quiz
│   │       │       └── final.js       ← end-of-course assessment
│   │       └── ableton-live-12/
│   │           └── (same structure)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppShell.jsx           ← root layout wrapper
│   │   │   ├── TopNav.jsx             ← sticky header
│   │   │   └── BottomTabBar.jsx       ← mobile-only tab bar
│   │   ├── course/
│   │   │   ├── CourseSidebar.jsx      ← desktop: session list + progress
│   │   │   ├── SessionPanel.jsx       ← expandable session content
│   │   │   ├── VideoPlayer.jsx        ← YouTube modal embed
│   │   │   └── CourseCard.jsx         ← catalog card
│   │   ├── quiz/
│   │   │   ├── QuizEngine.jsx         ← orchestrates quiz flow
│   │   │   ├── MultipleChoice.jsx     ← MC question type
│   │   │   ├── FillBlank.jsx          ← fill-in-the-blank type
│   │   │   └── QuizResult.jsx         ← score + feedback screen
│   │   └── ui/
│   │       ├── ThemeToggle.jsx
│   │       ├── ProgressBar.jsx
│   │       ├── Badge.jsx
│   │       └── Modal.jsx
│   ├── pages/
│   │   ├── Home.jsx                   ← catalog: search + filter + cards
│   │   ├── CoursePage.jsx             ← course: sidebar + sessions + quizzes
│   │   └── NotFound.jsx
│   ├── hooks/
│   │   ├── useProgress.js             ← read/write session progress
│   │   └── useQuiz.js                 ← quiz state machine
│   ├── store/
│   │   └── index.js                   ← Zustand store (theme, progress)
│   ├── utils/
│   │   └── markdown.js                ← parse session .md frontmatter
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                      ← Tailwind directives + global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Session Markdown Format

Each session is a `.md` file with YAML frontmatter:

```markdown
---
title: "DAW Orientation + First Beat"
duration: 120
level: 1
levelColor: "#6ee7b7"
videos:
  - id: "pDIsEZsalAo"
    title: "Complete Beginner Basics — In The Mix"
  - id: "Est8ZMlG_9Y"
    title: "FL Studio Full Guide — Kevin Stratvert"
hasQuiz: true
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

Play your beat back. Does the kick hit every bar? Can you hear the snare on beat 2 and 4?
```

---

## Quiz JSON Format

```js
// quizzes/session-01.js
export default {
  type: 'quick-check',        // 'quick-check' | 'final-assessment'
  title: 'Session 1 Quick Check',
  passMark: 60,               // % to pass
  questions: [
    {
      type: 'multiple-choice',
      question: 'What BPM is standard for trap music?',
      options: ['100', '120', '140', '160'],
      answer: 2,              // index of correct option
      explanation: '140 BPM is the standard for trap. It gives the hi-hat rolls room to breathe.'
    },
    {
      type: 'multiple-choice',
      question: 'Which FL Studio panel is used for drum programming?',
      options: ['Piano Roll', 'Mixer', 'Step Sequencer', 'Playlist'],
      answer: 2,
    }
  ]
}
```

---

## UX Layout

### Desktop (≥1024px)
```
┌─────────────────────────────────────────────────────┐
│  TopNav: Logo | Search | Theme toggle               │
├──────────────┬──────────────────────────────────────┤
│              │                                      │
│  Sidebar     │  Course content                      │
│  ─────────   │  ─────────────                       │
│  Progress    │  Header: title, stats, progress bar  │
│  bar         │                                      │
│              │  Tabs: Overview | Ladder | Sessions  │
│  Session 01  │                                      │
│  ✓ Session 02│  [Expanded session panel]            │
│  Session 03  │   Videos → modal player              │
│  ...         │   Phase 1 tasks                      │
│              │   Phase 2 tasks                      │
│              │   Review box                         │
│              │   [Quiz button if hasQuiz]            │
│              │                                      │
└──────────────┴──────────────────────────────────────┘
```

### Mobile (<1024px)
```
┌─────────────────────────────┐
│  TopNav: ← Back | Title     │
├─────────────────────────────┤
│                             │
│  Course content scrolls     │
│  (no sidebar)               │
│                             │
│  Sessions as accordions     │
│  Videos → modal             │
│  Quiz → inline              │
│                             │
├─────────────────────────────┤
│  🏠 Home  📚 Courses  🔍 Search │
└─────────────────────────────┘
```

---

## Quiz UX

- **Quick Check** (after each session, if `hasQuiz: true`): 3–5 questions, inline at bottom of session, immediate feedback per question, score badge awarded on pass.
- **Final Assessment** (end of course, always): 10–15 questions, modal flow, shows score + which answers were wrong, retake allowed, certificate-style completion screen.

---

## Feature Roadmap

### Phase 1 — Foundation (current)
- [x] Static HTML prototype with dark/light mode, video modal, progress tracking

### Phase 2 — React Migration (next)
- [ ] Vite + React + Tailwind + React Router setup
- [ ] Catalog page with search + category filters
- [ ] Course page with sidebar (desktop) + bottom tab bar (mobile)
- [ ] Sessions driven by Markdown files
- [ ] Video modal player
- [ ] Progress tracking via Zustand + localStorage

### Phase 3 — Quizzes
- [ ] QuizEngine component (multiple choice)
- [ ] Quick Check after each session
- [ ] Final Assessment per course
- [ ] Score tracking in Zustand

### Phase 4 — Gamification
- [ ] Badges for completing courses / scoring 100%
- [ ] Streak tracking
- [ ] Course completion certificate screen

### Phase 5 — Scale (optional)
- [ ] User accounts via Supabase (free tier) — sync progress across devices
- [ ] Comments/discussion via Giscus (GitHub Discussions, free)
- [ ] More courses: Python, Azure DevOps, Graphic Design, 3D Modelling, 3D Printing, UI/UX

---

## How to Add a New Course

1. Create `src/data/courses/{course-id}/meta.js`
2. Create `src/data/courses/{course-id}/sessions/01.md` ... `NN.md`
3. Optionally create `src/data/courses/{course-id}/quizzes/session-NN.js` and `final.js`
4. Add the course to `src/data/catalog.js`
5. Done — the UI is fully data-driven, no component changes needed.

---

## Deploy

```bash
npm run build        # outputs to dist/
vercel --prod        # or drag dist/ to vercel.com
```

GitHub Pages: set `base` in `vite.config.js` to the repo name.
