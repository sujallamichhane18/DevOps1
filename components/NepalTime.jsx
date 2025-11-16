import React, { useState, useEffect } from 'react'

export default function NepalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const nepal = new Date(now.getTime() + 5.75 * 3600000)
      setTime(nepal.toLocaleTimeString('en-NP', {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed top-4 right-6 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm text-cyan-300 font-mono z-50">
      Nepal Time: {time}
    </div>
  )
}
