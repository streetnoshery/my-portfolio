import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiAppstore, SiGoogleplay } from 'react-icons/si'
import niyoImg from '../assets/niyo-app.jpeg'

const featured = {
  title: 'Niyo Global — Secured Credit Card',
  subtitle: 'Flutter · Fintech · 1M+ Downloads',
  description:
    'Built the SBM Secured Credit Card feature end-to-end in the Niyo Flutter app — from card application flow to transaction history, FD management, and real-time balance updates. Shipped to 1M+ users across App Store and Play Store.',
  highlights: [
    'Developed full card lifecycle UI — apply, activate, manage, and track transactions',
    'Integrated with backend microservices handling 2M+ daily requests',
    'Real-time balance and transaction updates via event-driven APIs',
    '1M+ downloads — trusted by travellers across India',
  ],
  stack: ['Flutter', 'Dart', 'NestJS', 'TypeScript', 'Kafka', 'Redis', 'MongoDB'],
  appStoreUrl: 'https://apps.apple.com/in/app/niyo-global-cards-for-travel/id1633946487',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=finance.global.travel.niyo&pcampaignid=web_share',
  image: niyoImg,
}

const projects = [
  {
    title: 'Flappy',
    subtitle: 'Social Media Platform',
    description:
      'Scalable social media backend for 10K+ users — authentication, content sharing, and personalized feeds with sub-200ms latency. Deployed on AWS EC2 + S3.',
    highlights: [
      'Personalized feeds under 200ms response time',
      'Auth, content sharing, and user management at scale',
      'Deployed on AWS EC2 + S3 with production-grade reliability',
      'Built with AI-driven development (Kiro) for faster iteration',
    ],
    stack: ['TypeScript', 'Node.js', 'MongoDB', 'AWS EC2', 'AWS S3', 'Kiro'],
    liveUrl: 'https://flappy.co.in',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Image Validator',
    subtitle: 'Local Image Upload & Validation Service',
    description:
      'Full-stack image upload and validation service that runs entirely locally — no cloud services or AWS credentials required. Validates format, size, blur, duplicates, and faces before accepting an upload.',
    highlights: [
      'Magic byte detection for HEIC, PNG, and JPEG with automatic HEIC → JPEG conversion',
      'Blur detection via Laplacian variance and duplicate detection via 64-bit DCT perceptual hashing',
      'Face detection (face-api.js + SSD MobileNet v1) rejects zero, multiple, or too-small faces',
      'Fully containerized with Docker Compose — PostgreSQL + MinIO (S3-compatible) storage',
    ],
    stack: ['React', 'Vite', 'Express', 'Node.js', 'PostgreSQL', 'MinIO', 'sharp', 'Docker'],
    githubUrl: 'https://github.com/streetnoshery/image-validator',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/30" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label">Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
        </motion.div>

        {/* ── Featured: Niyo App ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl border border-white/10 overflow-hidden mb-8"
          style={{ background: 'linear-gradient(135deg, #0d0d1a 0%, #110d1f 50%, #0a0f1a 100%)' }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/80 to-transparent" />

          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
          />

          <div className="grid md:grid-cols-2 gap-0 items-center">
            {/* Left — content */}
            <div className="p-8 md:p-10 relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                Production App · 1M+ Downloads
              </div>

              <h3 className="text-white text-2xl font-bold leading-tight mb-1">{featured.title}</h3>
              <p className="text-violet-400 text-sm font-medium mb-4">{featured.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{featured.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-7">
                {featured.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="mt-2 w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-7">
                {featured.stack.map((tech) => (
                  <span key={tech}
                    className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Store buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={featured.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/8 border border-white/12 hover:bg-white/12 hover:border-white/20 text-white text-sm font-medium transition-all duration-200"
                >
                  <SiAppstore size={18} className="text-blue-400" />
                  App Store
                </a>
                <a
                  href={featured.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/8 border border-white/12 hover:bg-white/12 hover:border-white/20 text-white text-sm font-medium transition-all duration-200"
                >
                  <SiGoogleplay size={16} className="text-green-400" />
                  Play Store
                </a>
              </div>
            </div>

            {/* Right — app screenshot */}
            <div className="relative flex items-center justify-center p-8 md:p-10 md:border-l border-white/5">
              {/* Glow behind phone */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative z-10"
              >
                <img
                  src={niyoImg}
                  alt="Niyo Global App Screenshot"
                  className="w-52 md:w-64 rounded-3xl shadow-2xl shadow-violet-900/40 border border-white/10"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── Side Projects ── */}
        <div className="mt-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">Side Projects</p>
          <div className="grid md:grid-cols-2 max-w-4xl gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="relative group rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <p className="text-violet-400 text-sm font-medium mt-0.5">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                          className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all">
                          <FiGithub size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site"
                          className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all">
                          <FiExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-3 text-slate-400 text-sm">
                        <span className="mt-2 w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
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
