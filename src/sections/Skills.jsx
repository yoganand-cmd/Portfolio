import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiJavascript, SiPython, SiTailwindcss,
  SiFirebase, SiMysql, SiGit, SiGithub, SiHtml5,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { FiDatabase, FiBarChart2 } from 'react-icons/fi'
import SectionHeader from "../components/SectionHeader";

const categories = [
  {
    label: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 85, color: '#f97316' },
      { name: 'Python', icon: <SiPython />, level: 75, color: '#3b82f6' },
      { name: 'JavaScript', icon: <SiJavascript />, level: 80, color: '#facc15' },
    ],
  },
  {
    label: 'Frontend',
    icon: '</>',
    skills: [
      { name: 'React.js', icon: <SiReact />, level: 85, color: '#38bdf8' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80, color: '#06b6d4' },
      { name: 'HTML5 / CSS3', icon: <SiHtml5 />, level: 90, color: '#f97316' },
    ],
  },
  {
    label: 'Backend & Data',
    icon: '⚙',
    skills: [
      { name: 'Firebase', icon: <SiFirebase />, level: 70, color: '#fb923c' },
      { name: 'MySQL', icon: <SiMysql />, level: 72, color: '#60a5fa' },
      { name: 'Power BI', icon: <FiBarChart2 />, level: 78, color: '#eab308' },
    ],
  },
  {
    label: 'Tools',
    icon: '🛠',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 82, color: '#f87171' },
      { name: 'GitHub', icon: <SiGithub />, level: 85, color: '#a78bfa' },
      { name: 'REST APIs', icon: <FiDatabase />, level: 78, color: '#34d399' },
    ],
  },
]

function SkillBar({ name, icon, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-5"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span className="text-xl" style={{ color }}>{icon}</span>
          <span className="font-poppins text-sm text-derry-white font-medium">{name}</span>
        </div>
        <span className="font-cinzel text-xs text-derry-gray">{level}%</span>
      </div>
      <div className="h-1.5 bg-derry-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(193,18,31,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Skill Set"
          title="Survival Kit"
          subtitle="The tools and technologies I've sharpened for battle — each one chosen for a reason."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-derry-red/20 border border-transparent transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-cinzel text-derry-red text-sm font-bold">{cat.icon}</span>
                <h3 className="font-cinzel font-bold text-sm text-derry-white tracking-wide">{cat.label}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={ci * 0.1 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Certifications strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 glass rounded-2xl p-8"
        >
          <p className="font-cinzel text-derry-red text-xs tracking-widest uppercase mb-5">⸻ &nbsp; Certifications &nbsp; ⸻</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Data Analytics Virtual Experience', org: 'Deloitte US · Forage' },
              { title: 'Cybersecurity Virtual Experience', org: 'Deloitte US · Forage' },
              { title: 'Back-End with Node.js & Express', org: 'IBM · Coursera' },
              { title: 'Foundations of Back-End Coding', org: 'Microsoft · Coursera' },
              { title: 'AICTE Microsoft Elevate – Data Analytics', org: 'AICTE & Microsoft 2026' },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 group"
              >
                <span className="text-derry-red mt-0.5 flex-shrink-0">◆</span>
                <div>
                  <p className="font-poppins text-sm text-derry-white font-medium group-hover:text-derry-red transition-colors">{cert.title}</p>
                  <p className="font-poppins text-xs text-derry-gray mt-0.5">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}