import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiTypescript, SiJavascript, SiPython, SiNodedotjs,
  SiNestjs, SiApachekafka, SiRedis,
  SiDocker, SiKubernetes, SiMongodb, SiMysql,
  SiGrafana, SiGithubactions, SiFlutter, SiDart,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const groups = [
  {
    label: 'Languages',
    items: [
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3b82f6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#eab308' },
      { name: 'Python', icon: <SiPython />, color: '#60a5fa' },
      { name: 'Dart', icon: <SiDart />, color: '#54c5f8' },
    ],
  },
  {
    label: 'Runtime & Framework',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#4ade80' },
      { name: 'NestJS', icon: <SiNestjs />, color: '#f43f5e' },
      { name: 'Flutter', icon: <SiFlutter />, color: '#54c5f8' },
    ],
  },
  {
    label: 'Messaging & Cache',
    items: [
      { name: 'Kafka', icon: <SiApachekafka />, color: '#a78bfa' },
      { name: 'Redis', icon: <SiRedis />, color: '#f87171' },
      { name: 'SQS / SNS', icon: <FaAws />, color: '#fb923c' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: <FaAws />, color: '#fb923c' },
      { name: 'Docker', icon: <SiDocker />, color: '#38bdf8' },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: '#60a5fa' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#818cf8' },
      { name: 'Grafana', icon: <SiGrafana />, color: '#f97316' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#4ade80' },
      { name: 'MySQL', icon: <SiMysql />, color: '#60a5fa' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/30" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label">Skills</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Stack</h2>
        </motion.div>

        <div className="space-y-10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, ii) => {
                  const delay = gi * 0.06 + ii * 0.05
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay }}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 bg-white/4 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-200 cursor-default"
                    >
                      <span className="text-lg leading-none" style={{ color: item.color }}>
                        {item.icon}
                      </span>
                      <span className="text-slate-300 text-sm font-medium">{item.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
