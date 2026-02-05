import { motion } from 'framer-motion'
import { sectionVariants } from '../motion/animations'

type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.section>
  )
}


