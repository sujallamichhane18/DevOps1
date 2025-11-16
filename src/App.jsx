import React from 'react'

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to MyApp</h1>
        <p>Your awesome product starts here</p>
        <button className="cta">Get Started</button>
      </header>

      <section className="features">
        <div className="feature">
          <h3>Fast</h3>
          <p>Lightning quick performance</p>
        </div>
        <div className="feature">
          <h3>Secure</h3>
          <p>Bank-level encryption</p>
        </div>
        <div className="feature">
          <h3>Easy</h3>
          <p>Simple and intuitive</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 MyApp. All rights reserved.</p>
      </footer>
    </div>
  )
}
