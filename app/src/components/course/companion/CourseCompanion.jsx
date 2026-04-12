import React from 'react'
import MilestoneCard from './MilestoneCard'
import LabNotes from './LabNotes'
import CodeLab from './CodeLab'
import MusicHelper from './MusicHelper'

export default function CourseCompanion({ course, currentLevel = 1, sessions = [] }) {
  if (!course) return null;

  // Find current level data
  const levelData = course.ladder?.find(l => l.level === currentLevel);
  // Calculate a mock progress based on levels (or actual progress could be passed)
  const progress = (currentLevel / (course.levels || 1)) * 100;

  return (
    <aside className="bw-course-companion">
      <div className="bw-companion-content">
        {/* Level Milestone Section */}
        <MilestoneCard 
          level={currentLevel} 
          milestone={levelData?.milestone || "Complete the sessions to progress"} 
          progress={progress}
        />

        {/* Dynamic Tool Section */}
        <div style={{ marginTop: '24px' }}>
          {course.category === 'code' && <CodeLab />}
          {course.category === 'music' && <MusicHelper />}
          
          {/* Default fallback for other categories like Design/3D */}
          {!['code', 'music'].includes(course.category) && (
            <div style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '16px',
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--text-dim)'
            }}>
              <div style={{ marginBottom: '8px', color: 'var(--text-muted)' }}>QUICK REFERENCE</div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {course.tags?.map(tag => (
                  <li key={tag} style={{ marginBottom: '4px' }}>• {tag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Lab Notes Section */}
        <LabNotes courseId={course.id} />

        {/* Ambient Decorative Element */}
        <div className="bw-ambient-orb" style={{ '--accent-color': course.accent }}></div>
      </div>

      <style>{`
        .bw-course-companion {
          width: 340px;
          height: 100vh;
          position: sticky;
          top: 0;
          padding: 40px 24px;
          border-left: 1px solid var(--border);
          overflow-y: auto;
          display: none; /* Hidden by default */
        }

        @media (min-width: 1440px) {
          .bw-course-companion {
            display: block; /* Show only on quite wide screens to avoid crowding */
          }
        }

        .bw-companion-content {
          display: flex;
          flex-direction: column;
          gap: 0;
          height: 100%;
          position: relative;
        }

        .bw-ambient-orb {
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
          opacity: 0.15;
          z-index: -1;
          filter: blur(40px);
          animation: bw-orb-pulse 8s infinite alternate ease-in-out;
          pointer-events: none;
        }

        @keyframes bw-orb-pulse {
          0% { transform: scale(1); opacity: 0.1; }
          100% { transform: scale(1.4); opacity: 0.25; }
        }

        .bw-notes-area {
          scrollbar-width: thin;
          scrollbar-color: var(--border-strong) transparent;
        }
      `}</style>
    </aside>
  )
}
