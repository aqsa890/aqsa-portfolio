import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function RevealText({ children, delay = 0, className = '', as: Component = 'div' }) {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1 })

  const MotionComponent = motion[Component] || motion.div

  return (
    <MotionComponent
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}
