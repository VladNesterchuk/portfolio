import { useState } from 'react'
import { Link, } from 'react-router-dom'
import { HeaderMotion } from './HeaderMotion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <HeaderMotion className="sticky top-0 z-50 bg-cyber-bg/95 backdrop-blur border-b border-cyber-border shadow-[0_0_15px_rgba(34,211,238,0.08)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="text-neon-cyan font-semibold text-lg tracking-wider hover:text-neon-teal focus:text-neon-teal  transition">
            Vladyslav Nesterchuk
          </Link>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-neon-cyan hover:bg-cyber-border/50
                      focus:text-neon-cyan focus:bg-cyber-border/50 transition"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div
            className={`absolute top-full left-0 right-0 md:static md:flex md:gap-1 bg-cyber-card md:bg-transparent border-b md:border-0 border-cyber-border md:shadow-none shadow-lg ${
              open ? 'block' : 'hidden md:flex'
            }`}
          >

                <button onClick={scrollToProjects}
                  className="block md:inline px-4 py-3 md:py-2 md:px-3 rounded-lg md:rounded-md text-slate-400 hover:text-neon-cyan focus:text-neon-cyan transition"
                >
                  Projects
                </button>

                <Link to="/" onClick={() => setOpen(false)}
                  className="block md:inline px-4 py-3 md:py-2 md:px-3 rounded-lg md:rounded-md text-slate-400 hover:text-neon-cyan focus:text-neon-cyan transition"
                >
                  Home
                </Link>

          </div>
        </div>
      </div>
    </HeaderMotion>
  )
}
