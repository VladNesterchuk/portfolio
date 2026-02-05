import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { Section } from '../components/Section'
import { motion } from 'framer-motion'
import { listVariants, itemVariants } from '../motion/animations'

const BASE = import.meta.env.BASE_URL
const SKILLS_FRONTEND = ['HTML5', 'CSS3',  'Tailwind CSS' , 'JavaScript (ES6+)', 'React' , 'TypeScript (basic)',]
const SKILLS_TOOLS = ['WordPress', 'Adobe Photoshop', 'Figma' , 'Git / GitHub',]

const ALL_TECH = Array.from(new Set(projects.flatMap((p) => p.tech))).sort()

export default function Home() {
  const [selectedTech, setSelectedTech] = useState<string[]>([])

  const filtered = useMemo(() => {
    if (selectedTech.length === 0) return projects
    return projects.filter((p) => selectedTech.some((t) => p.tech.includes(t)))
  }, [selectedTech])

  const toggleTech = (t: string) => {
    setSelectedTech((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      {/* About */}
      <Section id="about" className="mb-16 md:mb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-1 tracking-tight">
          Vladyslav Nesterchuk
        </h1>
        <p className="text-lg md:text-xl text-neon-teal font-medium mb-4 ml-5">
          Front-end Developer
        </p>
        <p className="text-slate-400 max-w-2xl mb-6 leading-relaxed">
        Motivated Front-End Developer with practical experience in building responsive websites and user
        interfaces. Fast learner with a responsible attitude and strong communication skills. Able to work effectively
        both independently and in a team-oriented environment.

        </p>
        
        <a
          href={`${BASE}Vladyslav%20Nesterchuk%20CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 
                    rounded-lg bg-cyber-card border border-neon-cyan/50  font-medium 
                    hover:shadow-glow-cyan hover:border-neon-cyan hover:animate-glitch
                    hover:bg-neon-cyan hover:text-cyber-card
                    focus:shadow-glow-cyan focus:border-neon-cyan focus:animate-glitch
                    focus:bg-neon-cyan focus:text-cyber-card
                    transition-all duration-200 "
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download my CV
        </a>
      </Section>

      {/* Skills */}
      <Section id="skills" className="mb-16 md:mb-20">
        <h2 className="text-xl font-semibold text-neon-fuchsia mb-4">
          Skills and technologies I use
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-sm text-cyber-muted mb-2 block">Frontend</span>
            <div className="flex flex-wrap gap-2">
              {SKILLS_FRONTEND.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border text-slate-300 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-sm text-cyber-muted mb-2 block">Tools</span>
            <div className="flex flex-wrap gap-2">
              {SKILLS_TOOLS.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-cyber-card border border-cyber-border text-slate-300 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <h2 className="text-xl font-semibold text-neon-fuchsia mb-4">Projects</h2>

        {ALL_TECH.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-cyber-muted">Filter by tech:</span>
            {ALL_TECH.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => toggleTech(t)}
                className={`px-2.5 py-1 rounded-md text-sm font-medium transition ${
                  selectedTech.includes(t)
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 shadow-glow-cyan-sm'
                    : 'bg-cyber-card border border-cyber-border text-slate-400 hover:border-neon-cyan/40 hover:text-neon-cyan focus:border-neon-cyan/40 focus:text-neon-cyan'
                }`}
              >
                {t}
              </button>
            ))}
            {selectedTech.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedTech([])}
                className="text-sm text-cyber-muted hover:text-neon-cyan transition focus:text-neon-cyan "
              >
                All
              </button>
            )}
          </div>
        )}

      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.div key={p.slug} variants={itemVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
      </motion.div>

        {filtered.length === 0 && (
          <p className="text-cyber-muted py-8">No projects match the selected filters.</p>
        )}
      </Section>
    </div>
  )
}
