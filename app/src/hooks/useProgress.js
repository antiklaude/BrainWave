import { useState, useCallback } from 'react'

export function useProgress(courseId) {
  const key = `bw_progress_${courseId}`

  const [completed, setCompleted] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? new Set(JSON.parse(raw)) : new Set()
    } catch {
      return new Set()
    }
  })

  const toggle = useCallback((sessionId) => {
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(sessionId)) {
        next.delete(sessionId)
      } else {
        next.add(sessionId)
      }
      localStorage.setItem(key, JSON.stringify([...next]))
      return next
    })
  }, [key])

  const markComplete = useCallback((sessionId) => {
    setCompleted(prev => {
      if (prev.has(sessionId)) return prev
      const next = new Set(prev)
      next.add(sessionId)
      localStorage.setItem(key, JSON.stringify([...next]))
      return next
    })
  }, [key])

  const percent = (total) => total === 0 ? 0 : Math.round((completed.size / total) * 100)

  return { completed, toggle, markComplete, percent }
}
