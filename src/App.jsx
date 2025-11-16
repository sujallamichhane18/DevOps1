import React, { createContext, useContext, useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import NepalTime from './components/NepalTime'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function App() {
  const [user, setUser] = useState(null)

  const login = (userData) => {
    localStorage.setItem('devops1_user', JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('devops1_user')
    setUser(null)
  }

  useEffect(() => {
    const saved = localStorage.getItem('devops1_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <NepalTime />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}
