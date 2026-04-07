import { useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Download, Award } from 'lucide-react'
import { Certificate } from './Certificate'

function generateCertId(courseId, name) {
  const courseCode = courseId.replace(/-/g, '').slice(0, 3).toUpperCase()
  const nameCode = name.replace(/\s+/g, '').slice(0, 3).toUpperCase()
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  return `BW-${courseCode}-${nameCode}-${date}`
}

export default function CertDownload({ session, course, score }) {
  const [name, setName] = useState('')
  const [ready, setReady] = useState(false)

  if (!course) return null

  const certId = name ? generateCertId(course.id, name) : ''
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <div style={{
      background: 'var(--bg3)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: 20,
      textAlign: 'left',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <Award size={18} style={{ color: 'var(--accent)' }} />
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
          Download Your Certificate
        </span>
      </div>

      <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.5 }}>
        Enter your name as you'd like it to appear on the certificate.
      </p>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <input
          type="text"
          value={name}
          onChange={e => { setName(e.target.value); setReady(false) }}
          placeholder="Your full name"
          style={{
            flex: 1,
            minWidth: 180,
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text)',
            fontFamily: 'var(--sans)',
            fontSize: 14,
            padding: '10px 14px',
            outline: 'none',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />

        {name.trim().length >= 2 ? (
          <PDFDownloadLink
            document={
              <Certificate
                name={name.trim()}
                courseTitle={course.title}
                courseSubtitle={course.subtitle}
                accent={course.accent}
                score={score}
                sessions={course.sessionCount}
                levels={course.levels}
                hours={course.hours}
                date={date}
                certId={certId}
              />
            }
            fileName={`BrainWave-Certificate-${name.trim().replace(/\s+/g, '-')}.pdf`}
            style={{ textDecoration: 'none' }}
          >
            {({ loading }) => (
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '10px 20px',
                  background: loading ? 'var(--bg3)' : 'var(--accent)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  color: loading ? 'var(--text-muted)' : '#000',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: loading ? 'wait' : 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                <Download size={14} />
                {loading ? 'Preparing…' : 'Download PDF'}
              </button>
            )}
          </PDFDownloadLink>
        ) : (
          <button
            disabled
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '10px 20px',
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-dim)',
              fontSize: 14,
              cursor: 'not-allowed',
              opacity: 0.5,
              whiteSpace: 'nowrap',
            }}
          >
            <Download size={14} />
            Download PDF
          </button>
        )}
      </div>

      {name.trim().length >= 2 && (
        <p style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 8, fontFamily: 'var(--mono)' }}>
          Certificate ID: {certId}
        </p>
      )}
    </div>
  )
}
