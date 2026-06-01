import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const apps = [
  {
    name: 'Tiny Wins',
    category: 'Daily momentum',
    status: 'Idea lab',
    description: 'A gentle tracker for small habits, good moods, and tiny streaks.'
  },
  {
    name: 'Pocket Muse',
    category: 'Creative prompts',
    status: 'Sketching',
    description: 'Quick sparks for notes, reels, captions, side quests, and half-formed ideas.'
  },
  {
    name: 'Soft Focus',
    category: 'Mindful utility',
    status: 'Coming soon',
    description: 'A calmer timer for deep work, breaks, and returning to the thing.'
  }
]

function App() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Viby Apps home">
          <span className="brand-mark">V</span>
          <span>Viby Apps</span>
        </a>
        <div className="nav-links">
          <a href="#apps">Apps</a>
          <a href="mailto:hello@vibyapps.com">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Vibe-coded mobile experiments</p>
          <h1>Small apps with a little personality.</h1>
          <p className="intro">
            Viby Apps is a home for playful, useful mobile tools: quick to try,
            easy to love, and built one curious idea at a time.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#apps">See the apps</a>
            <a className="button secondary" href="mailto:hello@vibyapps.com">Say hello</a>
          </div>
        </div>

        <div className="phone-stage" aria-label="Preview of Viby Apps">
          <div className="phone">
            <div className="phone-top" />
            <div className="screen">
              <div className="app-chip">Today</div>
              <div className="pulse-card">
                <span>vibe score</span>
                <strong>92</strong>
              </div>
              <div className="mini-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="dock">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-head" id="apps">
        <p className="eyebrow">First drafts</p>
        <h2>App ideas warming up.</h2>
      </section>

      <section className="app-grid" aria-label="Viby app list">
        {apps.map((app) => (
          <article className="app-card" key={app.name}>
            <div>
              <p>{app.category}</p>
              <h3>{app.name}</h3>
            </div>
            <p className="description">{app.description}</p>
            <span>{app.status}</span>
          </article>
        ))}
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
