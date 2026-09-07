import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(options = {}) {
  const { threshold = 0.2, once = true } = options
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: threshold, once })
  return { ref, isInView }
}
