import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function CursorGlow() {
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const springX = useSpring(x, { damping: 34, stiffness: 180, mass: 0.6 })
  const springY = useSpring(y, { damping: 34, stiffness: 180, mass: 0.6 })

  useEffect(() => {
    if (prefersReducedMotion) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [prefersReducedMotion, x, y])

  if (prefersReducedMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: 560,
        height: 560,
        borderRadius: '9999px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)',
        zIndex: -1,
      }}
    />
  )
}
