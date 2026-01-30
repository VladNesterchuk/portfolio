import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import ProjectInfoPanel from '../components/ProjectInfoPanel'
import GalleryCarousel from '../components/GalleryCarousel'

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-neon-cyan mb-4">Project not found</h1>
        <Link to="/" className="text-neon-cyan hover:text-neon-teal focus:text-neon-teal font-medium transition">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-1 text-slate-400 hover:text-neon-cyan focus:text-neon-cyan mb-6 transition"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-8">{project.title}</h1>

        <div className="mb-12 lg:flex lg:items-start lg:gap-10">
          <div className="space-y-6 lg:flex-1 lg:min-w-0 ">
            {project.description.map((para, i) => (
              <p key={i} className="text-slate-400 leading-relaxed ">
               {para}
             </p>
            ))}
          </div>

        <div className="mt-8 lg:mt-0 lg:w-[360px] xl:w-[400px]">
          <div className="lg:sticky lg:top-24">
            <ProjectInfoPanel project={project} />
          </div>
        </div>
        </div>

      <section>
        <h2 className="text-xl font-semibold text-neon-fuchsia mb-4">Gallery</h2>
        <GalleryCarousel gallery={project.gallery} />
      </section>
    </div>
  )
}
