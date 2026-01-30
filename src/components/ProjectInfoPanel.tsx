import type { Project } from '../data/projects'

interface ProjectInfoPanelProps {
  project: Project
}

export default function ProjectInfoPanel({ project }: ProjectInfoPanelProps) {
  return (
    <div className="rounded-xl border border-cyber-border bg-cyber-card/80 p-5 md:p-6">
      <dl className="space-y-4">
        <div>
          <dt className="text-sm font-medium text-cyber-muted">Project type</dt>
          <dd className="mt-0.5 text-slate-300">{project.type}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-cyber-muted">My role</dt>
          <dd className="mt-0.5 text-slate-300">{project.role}</dd>
        </div>
        {project.githubUrl && (
          <div>
            <dt className="text-sm font-medium text-cyber-muted">GitHub</dt>
            <dd className="mt-0.5">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-neon-teal focus:text-neon-teal font-medium transition"
              >
                View repository
              </a>
            </dd>
          </div>
        )}
        {project.figmaUrl && (
          <div>
            <dt className="text-sm font-medium text-cyber-muted">Figma</dt>
            <dd className="mt-0.5">
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-neon-teal focus:text-neon-teal font-medium transition"
              >
                View Figma Design
              </a>
            </dd>
          </div>
        )}
        {project.siteUrl && (
          <div>
            <dt className="text-sm font-medium text-cyber-muted">Website</dt>
            <dd className="mt-0.5">
              <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="text-neon-magenta hover:text-neon-fuchsia focus:text-neon-fuchsia font-medium transition">
                View website
              </a>
            </dd>
          </div>
        )}
      </dl>
    </div>
  )
}
