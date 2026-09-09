import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiAward, FiClock, FiCalendar } from 'react-icons/fi'

const certificates = [
  {
    title: 'Apache Kafka Series — Learn Apache Kafka for Beginners v3',
    issuer: 'Udemy',
    instructor: 'Stephane Maarek · Kafkademy',
    date: 'April 30, 2025',
    hours: '8.5 hours',
    url: 'https://ude.my/UC-58386347-f8d8-4cd7-b40f-44f5a12f71e5',
    credentialId: 'UC-58386347-f8d8-4cd7-b40f-44f5a12f71e5',
    color: '#7c3aed',
    tag: 'Messaging',
  },
  {
    title: 'Generative AI for Beginners',
    issuer: 'Udemy',
    instructor: 'Aakriti E-Learning Academy',
    date: 'May 3, 2025',
    hours: '3.5 hours',
    url: 'https://ude.my/UC-3a0b65f7-4dc4-4cce-a3f9-824fc3de3919',
    credentialId: 'UC-3a0b65f7-4dc4-4cce-a3f9-824fc3de3919',
    color: '#059669',
    tag: 'AI / ML',
  },
  {
    title: 'Node JS: Advanced Concepts',
    issuer: 'Udemy',
    instructor: 'Stephen Grider',
    date: 'June 9, 2023',
    hours: '16 hours',
    url: 'https://ude.my/UC-384e5874-cd39-45c4-87e6-b767fe415969',
    credentialId: 'UC-384e5874-cd39-45c4-87e6-b767fe415969',
    color: '#0284c7',
    tag: 'Node.js',
  },
]

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certificates" className="py-10 md:py-14 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/30" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="section-label">Certificates</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Certifications</h2>
          <p className="text-slate-600 mt-3 max-w-lg text-sm">
            Courses completed to deepen expertise beyond day-to-day work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5, scale: 1.015 }}
              className="group relative flex flex-col p-6 rounded-2xl border border-slate-900/8 bg-white hover:border-violet-500/25 hover:bg-violet-500/5 transition-colors duration-300 overflow-hidden shadow-sm shadow-slate-900/5"
            >
              {/* Top color accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-70"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />

              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  style={{
                    backgroundColor: `${cert.color}18`,
                    borderColor: `${cert.color}35`,
                  }}
                >
                  <FiAward size={18} style={{ color: cert.color }} />
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  {/* Tag */}
                  <span
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold border"
                    style={{
                      backgroundColor: `${cert.color}15`,
                      borderColor: `${cert.color}30`,
                      color: cert.color,
                    }}
                  >
                    {cert.tag}
                  </span>

                  {/* External link */}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View certificate"
                    className="w-8 h-8 rounded-lg border border-slate-900/8 bg-slate-900/5 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-violet-500/40 transition-all"
                  >
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-slate-900 font-semibold text-base leading-snug mb-1">
                {cert.title}
              </h3>

              {/* Issuer + instructor */}
              <p className="text-slate-500 text-sm mb-4">
                <span className="text-slate-700 font-medium">{cert.issuer}</span>
                {' · '}{cert.instructor}
              </p>

              {/* Meta row */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-900/5">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <FiCalendar size={12} />
                  {cert.date}
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <FiClock size={12} />
                  {cert.hours}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
