import { motion, useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Software Development Engineer II',
    company: 'Niyo Solutions',
    period: 'Oct 2025 – Present',
    product: 'Niyo Global Secured Credit Card — SBM & DCB Bank',
    current: true,
    bullets: [
      'Built and scaled the Rewards Engine as a shared platform across SBM & DCB bank integrations, enabling real-time incentive processing at scale and cutting per-integration development time by 30%.',
      'Implemented SNS/SQS event-driven pipelines with retry/delay queue strategies to guarantee eventual consistency across FD, transaction, and rewards workflows, reducing failed retries by 40%.',
      'Built the DCB Bank credit card backend from scratch, handling 10M+ daily transactions; implemented idempotent REST APIs and retry-safe transaction workflows.',
      'Owned card control implementation, including channel/transaction-limit configuration APIs and bulk limit modification, establishing idempotency as the standard pattern adopted across all card state transitions.',
      'Boosted deploy stability by 60% via GitHub Actions CI/CD hardening and Grafana monitoring; reduced incident resolution time by 35%.',
      'Use Claude and Cursor daily for code generation, refactoring, and AI-agent PR review, accelerating feature delivery ~2x.',
    ],
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'Kafka', 'Redis', 'AWS', 'Kubernetes', 'Grafana', 'GitHub Actions'],
  },
  {
    role: 'Software Development Engineer I',
    company: 'Niyo Solutions',
    period: 'June 2022 – Sep 2025',
    product: 'Niyo Global Secured Credit Card — SBM Bank',
    current: false,
    bullets: [
      'Built the Fixed Deposit (FD) lifecycle engine — creation, lien marking, and closure workflows — for card compliance and secured-deposit backing, handling 2M+ daily requests.',
      'Optimized Kafka pipelines and Redis caching layer, driving an 80% latency reduction across the platform.',
      'Built a serverless statement generation pipeline using AWS Lambda, with S3 as the durable store for generated statements, decoupling statement processing from core transaction services.',
      'Built idempotent REST APIs and SNS/SQS-based async flows, forming the core reliability layer for card transaction processing.',
      'Developed frontend features using Flutter & Dart, shipping end-to-end features across multiple SBM credit card app mobile releases.',
    ],
    stack: ['NestJS', 'TypeScript', 'MongoDB', 'Kafka', 'Redis', 'AWS SQS/SNS', 'AWS S3', 'AWS Lambda', 'Flutter', 'Dart'],
  },
  {
    role: 'Software Development Intern',
    company: 'AU Small Finance Bank',
    period: 'Feb 2022 – June 2022',
    product: null,
    current: false,
    bullets: [
      'Containerized banking services with Docker, reducing deploy time by 40%.',
      'Enhanced IMPS API throughput by 25% and cut API latency by 30% via MySQL query tuning.',
    ],
    stack: ['Java', 'PL/SQL', 'MySQL', 'Docker'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const timelineRef = useRef(null)
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.6'],
  })

  return (
    <section id="experience" className="py-10 md:py-14 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/30" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="section-label">Experience</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Work History</h2>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline spine — faint track + scroll-filled progress */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-900/8 hidden sm:block" />
          <motion.div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400 via-violet-500 to-violet-500/40 hidden sm:block origin-top"
            style={{ scaleY: timelineProgress }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative sm:pl-14"
              >
                {/* Dot */}
                <div className="absolute left-0 top-5 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-slate-900/10 bg-[#f8f7fb]">
                  <div className="relative flex items-center justify-center w-3 h-3">
                    {exp.current && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-violet-400"
                        animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                    <div className={`relative w-3 h-3 rounded-full ${exp.current ? 'bg-violet-500 shadow-[0_0_8px_#8b5cf6]' : 'bg-slate-300'}`} />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group p-6 rounded-2xl border border-slate-900/8 bg-white hover:border-violet-500/25 hover:bg-violet-500/5 transition-colors duration-300 shadow-sm shadow-slate-900/5"
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-slate-900 font-bold text-base leading-tight">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-violet-600 font-semibold text-sm">{exp.company}</span>
                        {exp.product && (
                          <>
                            <span className="text-slate-300">·</span>
                            <span className="text-slate-500 text-xs">{exp.product}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="text-slate-500 text-xs font-medium bg-slate-900/5 border border-slate-900/8 px-3 py-1 rounded-lg shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech}
                        className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
