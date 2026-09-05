import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import heroBg from '../assets/hero.png'

const socialLinks = [
  { icon: <FiGithub size={18} />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: 'mailto:sumitgod510@gmail.com', label: 'Email' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background with layered overlays ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dark base overlay */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #080810 0%, #0d0820 50%, #080810 100%)' }}
        />

        {/* Hero graphic — floating, right side */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[340px] md:w-[460px] aspect-square hidden md:block"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9,
            filter: 'drop-shadow(0 30px 60px rgba(139,92,246,0.35))',
          }}
        />

        {/* Left-to-right fade so text stays readable */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #080810 30%, #080810cc 55%, transparent 85%)' }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to top, #080810, transparent)' }}
        />

        {/* Purple radial glow — center left */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)' }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ── Content — left-aligned on desktop ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20 pb-8">
        <div className="max-w-2xl">

          {/* Status badge */}
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-violet-500/30 bg-violet-500/10 text-violet-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 {...fadeUp(0.1)} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Sumit</span>
            <br />
            <span className="text-slate-300 font-light">Backend Engineer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p {...fadeUp(0.2)} className="text-slate-400 text-lg md:text-xl leading-relaxed mb-7">
            SDE II at <span className="text-white font-medium">Niyo Solutions</span> — building high-throughput fintech infrastructure with{' '}
            <span className="text-violet-400">Node.js</span>,{' '}
            <span className="text-violet-400">NestJS</span>,{' '}
            <span className="text-violet-400">Kafka</span> &{' '}
            <span className="text-violet-400">AWS</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3 mb-7">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-7 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-700/40 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              View Experience
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.4)} className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-violet-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <FiArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
