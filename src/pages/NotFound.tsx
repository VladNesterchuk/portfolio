import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-neon-cyan mb-2">Page not found</h1>
      <p className="text-slate-400 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-lg bg-cyber-card border border-neon-cyan/50 text-neon-cyan font-medium hover:shadow-glow-cyan hover:border-neon-cyan transition"
      >
        Back to Home
      </Link>
    </div>
  )
}
