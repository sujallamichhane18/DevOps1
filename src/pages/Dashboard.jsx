import React from 'react'
import { useAuth } from '../App'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 max-w-2xl w-full"
      >
        <h1 className="text-3xl font-bold text-cyan-400 mb-4">Welcome, {user?.name}!</h1>
        <p className="text-gray-300 mb-8">You are now logged into DevOps1 Secure Panel.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-cyan-300">Active Pipelines</h3>
            <p className="text-3xl font-bold text-white">12</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-cyan-300">Containers</h3>
            <p className="text-3xl font-bold text-white">48</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition"
        >
          Logout
        </button>
      </motion.div>
    </div>
  )
}
