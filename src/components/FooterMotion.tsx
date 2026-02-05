import { motion } from 'framer-motion'
import { footerVariants } from '../motion/animations'

type SectionProps = {
    id?: string
    children: React.ReactNode
    className?: string
  }

  export function FooterMotion({ id, children, className }: SectionProps) {
    return (
      <motion.section
        id={id}
        className={className}
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {children}
      </motion.section>
    )
  }