import { motion, useInView } from 'framer-motion'
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

  return (
    <section id="experience" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/30" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label">Experience</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work History</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent hidden sm:block" />

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
                <div className="absolute left-0 top-5 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#080810]">
                  <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-violet-400 shadow-[0_0_8px_#8b5cf6]' : 'bg-slate-700'}`} />
                </div>

                {/* Card */}
                <div className="group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/25 hover:bg-violet-500/5 transition-all duration-300">

                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-bold text-base leading-tight">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-violet-400 font-semibold text-sm">{exp.company}</span>
                        {exp.product && (
                          <>
                            <span className="text-slate-700">·</span>
                            <span className="text-slate-500 text-xs">{exp.product}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="text-slate-500 text-xs font-medium bg-white/5 border border-white/8 px-3 py-1 rounded-lg shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech}
                        className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
