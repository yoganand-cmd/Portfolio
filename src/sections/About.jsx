import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiZap, FiLayers, FiAward } from 'react-icons/fi'
import SectionHeader from "../components/SectionHeader";
const chapters = [
  {
    icon: <FiCode size={22} />,
    chapter: 'Chapter I',
    title: 'The First Line',
    body:
      'It started with curiosity — a blank editor, a blinking cursor, and the quiet dare of "Hello, World." That first line of code opened a door I never wanted to close. Programming became the language through which I understood logic, patterns, and possibility.',
  },
  {
    icon: <FiLayers size={22} />,
    chapter: 'Chapter II',
    title: 'Building Worlds',
    body:
      'From static pages to full-stack applications — React, REST APIs, Firebase, SQL — I learned that software is architecture. Every component I write, every endpoint I design, is a piece of something larger. Winning the Gen AI Hackathon against 600+ teams showed me that ideas, when executed well, can beat scale.',
  },
  {
    icon: <FiZap size={22} />,
    chapter: 'Chapter III',
    title: 'The AI Chapter',
    body:
      'Generative AI, prompt engineering, the Suno API, Grok API — this is where I live now. I built Musique AI, an AI-powered music platform that lets creators generate copyright-free tracks from text alone. The intersection of creativity and machine intelligence is where I do my best work.',
  },
  {
    icon: <FiAward size={22} />,
    chapter: 'Chapter IV',
    title: 'Internships & Impact',
    body:
      'Through the AICTE Microsoft Elevate Program and Deloitte\'s Virtual Experience, I learned to turn raw data into stories. Power BI dashboards, security log analysis, financial inclusion metrics — data is never just numbers; it\'s a map to better decisions.',
  },
]

const stats = [
  { value: '8.40', label: 'CGPA', suffix: '/10' },
  { value: '600+', label: 'Teams Beaten', suffix: '' },
  { value: '5+', label: 'Projects Built', suffix: '' },
  { value: '3+', label: 'Certifications', suffix: '' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      {/* Ambient */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(193,18,31,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Origin Story"
          title="The Losers Club"
          subtitle="Every great developer has a story. This is mine — written in code, tested in hackathons, and still being edited."
        />

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:glass-red transition-all duration-300"
            >
              <div className="font-cinzel font-black text-3xl text-derry-red">
                {s.value}<span className="text-lg">{s.suffix}</span>
              </div>
              <div className="font-poppins text-xs text-derry-gray mt-1 tracking-widest uppercase">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Chapter cards */}
      <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((ch, i) => (
            <motion.div
              key={ch.chapter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 group cursor-default transition-all duration-300 hover:border-derry-red/20 border border-transparent"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-derry-red/10 border border-derry-red/20 flex items-center justify-center text-derry-red group-hover:bg-derry-red group-hover:text-white transition-all duration-300">
                  {ch.icon}
                </div>
                <div>
                  <p className="font-cinzel text-derry-red text-xs tracking-widest uppercase mb-1">{ch.chapter}</p>
                  <h3 className="font-cinzel font-bold text-xl text-derry-white mb-3">{ch.title}</h3>
                  <p className="font-poppins text-derry-gray text-sm leading-relaxed">{ch.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-cinzel text-derry-red text-xs tracking-widest uppercase mb-1">Currently Enrolled</p>
            <h3 className="font-cinzel font-bold text-xl text-derry-white">B.Tech – Computer Science Engineering</h3>
            <p className="font-poppins text-derry-gray text-sm mt-1">St. Peter's Engineering College, JNTUH &nbsp;·&nbsp; 2023 – 2027</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-cinzel font-black text-4xl text-derry-red">8.40</span>
            <span className="font-poppins text-derry-gray text-xs tracking-widest uppercase">CGPA / 10.0</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}