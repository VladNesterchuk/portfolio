import { motion } from "framer-motion"
import { headerVariants } from '../motion/animations'

type SectionProps = {
    id?: string
    children: React.ReactNode
    className?: string
  }

  export function HeaderMotion({ id, children, className }: SectionProps) {
    return (
      <motion.header
        id={id}
        className={className}
        variants={headerVariants}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.header>
    )
  }
  