import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

const PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><rect fill="#1e293b" width="400" height="250"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="14">No image</text></svg>'
)

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false)
  const src = imgError ? PLACEHOLDER : project.cover

  return (
    <Link
      to={`/project/${project.slug}`}
      className="group block rounded-lg overflow-hidden bg-cyber-card border border-cyber-border transition-all duration-300
      hover:border-neon-cyan/50 hover:shadow-glow-cyan-sm  hover:-translate-y-0.5 
      focus:border-neon-cyan/50 focus:shadow-glow-cyan-sm  focus:-translate-y-0.5 "
    >
      <div className="aspect-[16/10] bg-cyber-border overflow-hidden">
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover group-hover:scale-100 group-focus:scale-100 transition-transform duration-300"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-200 group-hover:text-neon-cyan group-focus:text-neon-cyan transition">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-cyber-bg border border-cyber-border text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
