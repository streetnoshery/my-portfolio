import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

const contactInfo = [
  { icon: <FiMapPin size={14} />, text: 'Bengaluru, India' },
  { icon: <FiMail size={14} />, text: 'sumitgod510@gmail.com', href: 'mailto:sumitgod510@gmail.com' },
  { icon: <FiPhone size={14} />, text: '+91 81077 48619', href: 'tel:+918107748619' },
]

const cards = [
  { num: '20M+', label: 'Daily transactions handled', sub: 'across SBM & DCB bank integrations' },
  { num: '80%', label: 'Latency reduction', sub: 'via Kafka + Redis optimizations' },
  { num: '1M+', label: 'App downloads', sub: 'Niyo app on App Store & Play Store' },
  { num: '2', label: 'Card product launches', sub: 'end-to-end backend delivery' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label">About</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Building systems that scale
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left col — bio (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a Backend Engineer with{' '}
              <span className="text-white font-semibold">4+ years</span> of experience
              building high-throughput, low-latency fintech infrastructure at Niyo Solutions.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My work spans microservices architecture, event-driven systems with Kafka,
              idempotent REST APIs, and async workflows using AWS SQS/SNS. I've led the
              backend for two major credit card launches — SBM Bank and DCB Bank — from
              design to production.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Beyond backend, I've contributed to the Niyo Flutter app — building the
              SBM Secured Credit Card feature used by <span className="text-white font-medium">1M+ users</span> on
              App Store and Play Store. I care deeply about reliability, observability,
              and writing systems that other engineers can reason about.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {contactInfo.map((item) => (
                <div key={item.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-slate-400 text-sm"
                >
                  <span className="text-violet-400">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-violet-400 transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-white/3 mt-2">
              <div className="w-10 h-10 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0">
                <span className="text-violet-400 text-lg font-bold">N</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">NIT Jaipur</div>
                <div className="text-slate-400 text-sm">B.Tech — Electronics & Communication Engineering</div>
                <div className="text-slate-600 text-xs mt-0.5">CGPA 7.30 · 2018 – 2022</div>
              </div>
            </div>
          </motion.div>

          {/* Right col — impact numbers (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3"
          >
            {cards.map((c, i) => (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="p-4 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
              >
                <div className="text-2xl font-extrabold gradient-text leading-none mb-2">{c.num}</div>
                <div className="text-white text-xs font-semibold leading-snug mb-1">{c.label}</div>
                <div className="text-slate-600 text-xs leading-snug">{c.sub}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
