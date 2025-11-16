import React from 'react'

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>DevOps1</h1>
        <p>Automate. Deploy. Scale. Succeed.</p>
        <button className="cta">Start Free Trial</button>
      </header>

      <section className="features">
        <div className="feature">
          <h3>CI/CD Pipelines</h3>
          <p>Build, test, and deploy with zero downtime</p>
        </div>
        <div className="feature">
          <h3>Docker & K8s Ready</h3>
          <p>Containerized apps that scale effortlessly</p>
        </div>
        <div className="feature">
          <h3>Real-time Monitoring</h3>
          <p>Track performance and catch issues early</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 DevOps1. Built for engineers, by engineers.</p>
      </footer>
    </div>
  )
}
