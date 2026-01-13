import React, { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => setMessage(data.message))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>React Frontend</h1>
      {loading && <p>Loading backend message...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {message && <p>Backend message: {message}</p>}
    </div>
  )
}
