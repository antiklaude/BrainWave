# BrainWave — Certificate Feature Spec

## Overview

On passing the final assessment, users can download a personalised **PDF certificate of completion** directly from the browser. No server, no email, no login required.

---

## Library choice: `@react-pdf/renderer`

| Option | How it works | Verdict |
|---|---|---|
| `@react-pdf/renderer` | React components → real PDF, runs in browser | ✅ Best fit |
| `html2canvas + jsPDF` | Screenshot of HTML → PDF | ❌ Blurry, large file size |
| `pdfmake` | JSON descriptor → PDF | ❌ Not React-native, verbose |
| Browser print dialog | CSS print stylesheet → PDF | ❌ No control over output |

`@react-pdf/renderer` generates a proper vector PDF using React component syntax — same mental model as writing UI. The `PDFDownloadLink` component handles the download with a single line.

**One extra dependency:** `@react-pdf/renderer`

---

## UX flow

```
Final Assessment → Pass (score ≥ passMark)
         ↓
QuizResult screen
  ┌─────────────────────────────────────┐
  │  🎉 You passed!   Score: 94%        │
  │  ─────────────────────────────────  │
  │  Your answers  [breakdown table]    │
  │                                     │
  │  ── Get Your Certificate ──         │
  │  [  Enter your full name...      ]  │  ← text input
  │  [  Download Certificate (PDF)   ]  │  ← PDFDownloadLink
  └─────────────────────────────────────┘
         ↓
  PDF downloads instantly to device
  Certificate also saved to localStorage
  so they can re-download without retaking
```

**Important UX decisions:**
- Name is **user-entered at download time** — no login needed. Honour system, same as most free certifications.
- If they've already passed (cert in localStorage), the name input + download button show immediately without retaking.
- Certificate is re-downloadable any time from the course page sidebar (a small "🏆 Certificate" link appears once earned).

---

## Certificate visual design

**Size:** A4 Landscape (297mm × 210mm)
**Background:** White — prints cleanly, professional
**Accent:** Course accent color (passed as prop — each course gets its own look)

```
┌──────────────────────────────────────────────────────────────────────────┐
│██████████████████████████████████████████████████████████████████████████│ ← accent color bar (8pt)
│                                                                          │
│  BrainWave                                               Score: 94 %    │ ← nav row
│                                                                          │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │ ← dashed rule (accent)
│                                                                          │
│                    CERTIFICATE  OF  COMPLETION                           │ ← spaced caps
│                                                                          │
│                         This certifies that                              │
│                                                                          │
│                    ╔══════════════════════════╗                          │
│                    ║    Karthick Ragavr        ║                         │ ← accent border box
│                    ╚══════════════════════════╝                          │
│                                                                          │
│                      has successfully completed                          │
│                                                                          │
│                          FL Studio 20                                    │ ← large, bold
│                        Zero to Hero in 20 Hours                          │ ← subtitle
│                                                                          │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│                                                                          │
│    10 Sessions     ·     5 Levels     ·    20 Hours                     │ ← course stats
│                                                                          │
│██████████████████████████████████████████████████████████████████████████│ ← accent color bar (4pt)
│  BrainWave · Free Learning Hub        Date: April 6, 2026               │
│  brainwave.vercel.app                 ID: BW-FLS-KAR-20260406           │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Certificate ID format

Generated client-side. Deterministic and unique-looking:

```
BW-[COURSE]-[NAME]-[DATE]

Examples:
  BW-FLS-KAR-20260406     (FL Studio 20, Karthick, April 6 2026)
  BW-ABL-JAM-20260412     (Ableton Live 12, James, April 12 2026)
  BW-PYT-ANA-20260501     (Python, Ana, May 1 2026)
```

**Course prefix:** first 3 letters of course ID, uppercased, non-alpha removed
**Name prefix:** first 3 letters of first name entered, uppercased
**Date:** `YYYYMMDD`

---

## Implementation

### File locations

```
src/
├── components/
│   └── certificate/
│       ├── Certificate.jsx        ← @react-pdf/renderer template
│       └── CertDownload.jsx       ← name input + download button UI
└── hooks/
    └── useCertificate.js          ← read/write cert from localStorage
```

### `Certificate.jsx` — the PDF template

```jsx
import {
  Document, Page, Text, View, StyleSheet
} from '@react-pdf/renderer'

// Fonts: @react-pdf/renderer includes Helvetica, Times, Courier built-in.
// For custom fonts, register once at module level:
// Font.register({ family: 'DM Sans', src: 'https://fonts.gstatic.com/...' })
// For simplicity, Helvetica (clean sans-serif) works great for certs.

function CertStyles(accent) {
  return StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      fontFamily: 'Helvetica',
      flexDirection: 'column',
    },
    accentBarTop: {
      height: 10,
      backgroundColor: accent,
    },
    accentBarBottom: {
      height: 5,
      backgroundColor: accent,
    },
    body: {
      flex: 1,
      paddingHorizontal: 52,
      paddingVertical: 24,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    navRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    brandText: {
      fontSize: 13,
      fontFamily: 'Helvetica-Bold',
      color: '#0b0c0e',
      letterSpacing: 1,
    },
    scoreText: {
      fontSize: 11,
      color: accent,
      fontFamily: 'Helvetica-Bold',
      letterSpacing: 0.5,
    },
    dashedRule: {
      borderBottomWidth: 1,
      borderBottomColor: accent,
      borderBottomStyle: 'dashed',
      marginVertical: 14,
      opacity: 0.4,
    },
    centerBlock: {
      alignItems: 'center',
      flexDirection: 'column',
      gap: 6,
    },
    certOfCompletion: {
      fontSize: 11,
      fontFamily: 'Helvetica-Bold',
      color: '#6b7280',
      letterSpacing: 4,
      textTransform: 'uppercase',
      marginBottom: 4,
    },
    thisConfirms: {
      fontSize: 11,
      color: '#9ca3af',
      letterSpacing: 0.5,
    },
    nameBox: {
      borderWidth: 1.5,
      borderColor: accent,
      paddingHorizontal: 32,
      paddingVertical: 10,
      marginVertical: 8,
      borderRadius: 4,
    },
    nameText: {
      fontSize: 26,
      fontFamily: 'Helvetica-Bold',
      color: '#0b0c0e',
      letterSpacing: 0.5,
      textAlign: 'center',
    },
    hasCompleted: {
      fontSize: 11,
      color: '#9ca3af',
      letterSpacing: 0.5,
      marginBottom: 6,
    },
    courseTitle: {
      fontSize: 22,
      fontFamily: 'Helvetica-Bold',
      color: '#0b0c0e',
      letterSpacing: -0.5,
      textAlign: 'center',
    },
    courseSubtitle: {
      fontSize: 11,
      color: '#6b7280',
      letterSpacing: 0.3,
      textAlign: 'center',
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 20,
      marginTop: 10,
    },
    statItem: {
      fontSize: 10,
      color: '#6b7280',
      letterSpacing: 0.5,
    },
    dot: {
      fontSize: 10,
      color: accent,
    },
    footerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 52,
      paddingVertical: 10,
      backgroundColor: '#f9fafb',
    },
    footerLeft: {
      fontSize: 8,
      color: '#9ca3af',
      letterSpacing: 0.3,
    },
    footerRight: {
      fontSize: 8,
      color: '#9ca3af',
      letterSpacing: 0.3,
      textAlign: 'right',
    },
  })
}

export function Certificate({
  name,
  courseTitle,
  courseSubtitle,
  accent = '#a78bfa',
  score,
  sessions,
  levels,
  hours,
  date,        // formatted: "April 6, 2026"
  certId,
}) {
  const s = CertStyles(accent)

  return (
    <Document
      title={`BrainWave Certificate — ${courseTitle}`}
      author="BrainWave"
      subject={`Certificate of Completion: ${courseTitle}`}
      creator="BrainWave Free Learning Hub"
    >
      <Page size="A4" orientation="landscape" style={s.page}>

        {/* Top accent bar */}
        <View style={s.accentBarTop} />

        {/* Main body */}
        <View style={s.body}>

          {/* Nav row: brand + score */}
          <View style={s.navRow}>
            <Text style={s.brandText}>BrainWave</Text>
            <Text style={s.scoreText}>Score: {score}%</Text>
          </View>

          <View style={s.dashedRule} />

          {/* Center content */}
          <View style={s.centerBlock}>
            <Text style={s.certOfCompletion}>Certificate of Completion</Text>
            <Text style={s.thisConfirms}>This certifies that</Text>

            {/* Name box */}
            <View style={s.nameBox}>
              <Text style={s.nameText}>{name}</Text>
            </View>

            <Text style={s.hasCompleted}>has successfully completed</Text>
            <Text style={s.courseTitle}>{courseTitle}</Text>
            <Text style={s.courseSubtitle}>{courseSubtitle}</Text>
          </View>

          <View style={s.dashedRule} />

          {/* Course stats */}
          <View style={s.statsRow}>
            <Text style={s.statItem}>{sessions} Sessions</Text>
            <Text style={s.dot}> · </Text>
            <Text style={s.statItem}>{levels} Levels</Text>
            <Text style={s.dot}> · </Text>
            <Text style={s.statItem}>{hours} Hours</Text>
          </View>

        </View>

        {/* Bottom accent bar */}
        <View style={s.accentBarBottom} />

        {/* Footer */}
        <View style={s.footerRow}>
          <Text style={s.footerLeft}>
            BrainWave · Free Learning Hub{'\n'}brainwave.vercel.app
          </Text>
          <Text style={s.footerRight}>
            Issued: {date}{'\n'}
            Certificate ID: {certId}
          </Text>
        </View>

      </Page>
    </Document>
  )
}
```

### `CertDownload.jsx` — the name input + download UI

```jsx
import { useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Certificate } from './Certificate'
import { useCertificate } from '../../hooks/useCertificate'

export function CertDownload({ course, score }) {
  const { saved, save } = useCertificate(course.id)
  const [name, setName] = useState(saved?.name ?? '')
  const [error, setError] = useState('')

  const certId  = generateCertId(course.id, name)
  const dateStr = formatDate(new Date())

  const certProps = {
    name,
    courseTitle:    course.title,
    courseSubtitle: course.subtitle,
    accent:         course.accent,
    score,
    sessions:       course.sessionCount,
    levels:         course.levels,
    hours:          course.hours,
    date:           dateStr,
    certId,
  }

  function handleDownloadClick() {
    if (!name.trim()) {
      setError('Please enter your name')
      return
    }
    setError('')
    save({ name, score, date: dateStr, certId })
  }

  return (
    <div className="mt-6 p-5 rounded-xl border border-dashed"
         style={{ borderColor: course.accent + '60' }}>
      <h3 className="font-mono text-sm font-bold mb-3" style={{ color: course.accent }}>
        🏆 Get Your Certificate
      </h3>

      <p className="text-sm text-[var(--text-muted)] mb-4">
        Enter your name exactly as you'd like it to appear on the certificate.
      </p>

      <input
        type="text"
        value={name}
        onChange={e => { setName(e.target.value); setError('') }}
        placeholder="Your full name"
        maxLength={60}
        className="w-full bg-[var(--bg3)] border border-[var(--border)] rounded-lg
                   px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)]
                   focus:outline-none focus:border-[var(--border-strong)] mb-2"
      />

      {error && (
        <p className="text-xs text-red-400 mb-2">{error}</p>
      )}

      {name.trim() ? (
        <PDFDownloadLink
          document={<Certificate {...certProps} />}
          fileName={`BrainWave-Certificate-${course.id}.pdf`}
          onClick={handleDownloadClick}
        >
          {({ loading }) => (
            <button
              className="w-full py-2.5 rounded-lg font-mono text-xs font-bold
                         text-white transition-opacity"
              style={{ backgroundColor: course.accent }}
              disabled={loading}
            >
              {loading ? 'Generating PDF…' : '↓ Download Certificate (PDF)'}
            </button>
          )}
        </PDFDownloadLink>
      ) : (
        <button
          onClick={handleDownloadClick}
          className="w-full py-2.5 rounded-lg font-mono text-xs font-bold
                     bg-[var(--bg3)] text-[var(--text-dim)] cursor-pointer
                     border border-[var(--border)] transition-colors
                     hover:border-[var(--border-strong)]"
        >
          ↓ Download Certificate (PDF)
        </button>
      )}

      <p className="text-xs text-[var(--text-dim)] mt-3 font-mono">
        Certificate ID: {name.trim() ? certId : 'BW-???-???-????????'}
      </p>
    </div>
  )
}

// ── Helpers ──────────────────────────────────────────────────

function generateCertId(courseId, name) {
  const course = courseId.replace(/-/g, '').substring(0, 3).toUpperCase()
  const person = name.trim().replace(/\s/g, '').substring(0, 3).toUpperCase() || '???'
  const date   = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  return `BW-${course}-${person}-${date}`
}

function formatDate(d) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
```

### `useCertificate.js` — persistence hook

```js
// hooks/useCertificate.js
// Stores: { name, score, date, certId } per course in localStorage
// Key: bw_cert_{courseId}

export function useCertificate(courseId) {
  const key = `bw_cert_${courseId}`

  function saved() {
    try { return JSON.parse(localStorage.getItem(key)) }
    catch { return null }
  }

  function save(data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  function clear() {
    localStorage.removeItem(key)
  }

  return { saved: saved(), save, clear }
}
```

---

## Where it appears in the UI

### 1. After final assessment (primary)

In `QuizResult.jsx`, when `passed === true`:

```
┌──────────────────────────────────────┐
│  🎉 You passed!                      │
│  Score: 94% · April 6, 2026          │
│                                      │
│  [Answer breakdown table]            │
│                                      │
│  ── 🏆 Get Your Certificate ──       │
│  [Name input]                        │
│  [Download Certificate (PDF)]        │
└──────────────────────────────────────┘
```

### 2. Course sidebar — re-download (secondary)

Once a certificate is earned (`useCertificate(courseId).saved !== null`), a trophy badge appears at the bottom of the sidebar:

```
┌──────────────────────┐
│ 8/10 sessions        │
│ ▓▓▓▓▓▓▓▓░░           │
│ ─────────────────── │
│ ✓ Session 01         │
│ ✓ Session 02         │
│  ...                 │
│ ─────────────────── │
│ 🏆 Re-download cert  │  ← appears after passing
└──────────────────────┘
```

Clicking it opens a small modal with the name input pre-filled and the download button.

---

## Component additions to PLAN.md

```
src/components/certificate/
├── Certificate.jsx       ← @react-pdf/renderer PDF template
└── CertDownload.jsx      ← name input + PDFDownloadLink UI
src/hooks/
└── useCertificate.js     ← read/write cert from localStorage
```

---

## Updated dependency list

```
react-router-dom         navigation
tailwindcss              layout + responsive
gray-matter              .md frontmatter parsing
react-markdown           session body rendering
lucide-react             icons
@react-pdf/renderer      ← NEW: PDF certificate generation
```

**Total: 6 npm packages.**

---

## Edge cases

| Scenario | Behaviour |
|---|---|
| User doesn't pass the first time | Certificate section not shown. Retry button shown instead. |
| User fails on retry | Same — no certificate until passing score is reached. |
| User already has a cert (localStorage) | Name input pre-filled, download available immediately without retaking. |
| User clears browser data | Certificate is gone. No recovery (no backend). Acceptable trade-off for no-login experience. |
| Very long name (>60 chars) | Input has `maxLength={60}`. Certificate layout tested up to 60 chars. |
| Special characters in name | Passed directly to PDF text. No sanitisation needed (not a security boundary). |
| Mobile download | `PDFDownloadLink` triggers native browser download — works on iOS Safari and Android Chrome. |
