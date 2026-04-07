import { useState, useCallback } from 'react'

export function useCertificate(courseId) {
  const key = `bw_cert_${courseId}`

  const [cert, setCert] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  const saveCert = useCallback((data) => {
    localStorage.setItem(key, JSON.stringify(data))
    setCert(data)
  }, [key])

  const clearCert = useCallback(() => {
    localStorage.removeItem(key)
    setCert(null)
  }, [key])

  return { cert, saveCert, clearCert }
}
