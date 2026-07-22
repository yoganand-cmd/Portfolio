import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder, FiChevronDown } from 'react-icons/fi'
import { SiReact, SiJavascript, SiPython, SiFirebase, SiMysql, SiTailwindcss } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import SectionHeader from "../components/SectionHeader";

const techIconMap = {
  'React.js': <SiReact className="text-sky-400" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  Python: <SiPython className="text-blue-400" />,
  Firebase: <SiFirebase className="text-orange-400" />,
  MySQL: <SiMysql className="text-blue-300" />,
  Java: <FaJava className="text-orange-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
}

const projects = [
  {
    id: 'FILE-001',
    status: 'ACTIVE',
    title: 'Musique AI',
    tagline: 'AI-Powered Music Generation Platform',
    description:
      'A web platform that lets content creators generate copyright-free, royalty-free music from text prompts. Integrated Suno API for high-quality synthesis and Grok API as a fallback — zero cost, zero copyright concerns for YouTube, podcasts, and social media creators.',
    tech: ['React.js', 'JavaScript', 'Suno API', 'Grok API'],
    github: 'https://github.com/yoganand-cmd',
    demo: null,
    highlight: true,
  },
  {
    id: 'FILE-002',
    status: 'COMPLETE',
    title: 'Venue Booking Platform',
    tagline: 'Full-Stack Role-Based Booking System',
    description:
      'Multi-role venue management system serving Admins, Vendors, and End Users. Built role-based dashboards, REST API integration with Swagger documentation, and AI-assisted search and recommendation features.',
    tech: ['React.js', 'JavaScript', 'REST APIs', 'Swagger'],
    github: 'https://github.com/yoganand-cmd/Venue-Booking-Platform',
    demo: null,
    highlight: false,
  },
  {
    id: 'FILE-003',
    status: 'ACTIVE',
    title: 'GitHub Profile Finder',
    tagline: 'GitHub Profile Search Application',
    description:
      'A clean, fast application to search and explore GitHub profiles. Fetches real-time user data, repositories, and stats from the GitHub API with a smooth, responsive UI.',
    tech: ['React.js', 'JavaScript', 'GitHub API'],
    github: 'https://github.com/yoganand-cmd/GitHub-Profile-Finder',
    demo: null,
    highlight: false,
  },
  {
    id: 'FILE-004',
    status: 'ACTIVE',
    title: 'Movie Recommendation App',
    tagline: 'Smart Movie Discovery Tool',
    description:
      'A movie discovery app powered by the TMDB API. Browse trending films, get recommendations, and explore cinematic details — a love letter to cinema built with React.',
    tech: ['React.js', 'JavaScript', 'TMDB API'],
    github: 'https://github.com/yoganand-cmd/Movie-Recommendation-App',
    demo: null,
    highlight: false,
  },
  {
    id: 'FILE-005',
    status: 'ARCHIVE',
    title: 'DSA-JAVA',
    tagline: 'Data Structures & Algorithms in Java',
    description:
      'A comprehensive repository of Data Structures and Algorithms implemented in Java. Arrays, linked lists, trees, graphs, sorting algorithms — built as a learning artifact and interview prep resource.',
    tech: ['Java'],
    github: 'https://github.com/yoganand-cmd/DSA-JAVA',
    demo: null,
    highlight: false,
  },
  {
    id: 'FILE-006',
    status: 'COMPLETE',
    title: 'Financial Inclusion Dashboard',
    tagline: 'Power BI Analytics Dashboard',
    description:
      'An interactive Power BI dashboard analyzing global access to banking, credit, and digital financial services. Final project for the AICTE Microsoft Elevate Data Analytics Program — translating raw data into policy insights.',
    tech: ['Power BI', 'Excel', 'Python'],
    github: 'https://github.com/yoganand-cmd/financial-inclusion-powerbi-dashboard',
    demo: null,
    highlight: false,
  },
]

const statusColors = {
  ACTIVE: 'text-green-400 bg-green-400/10',
  COMPLETE: 'text-blue-400 bg-blue-400/10',
  ARCHIVE: 'text-derry-gray bg-derry-gray/10',
}

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute left-0 top-0 w-72 h-72 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(193,18,31,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Investigation Files"
          title="Case Files"
          subtitle="Each project is a problem worth solving — documented here like open case files."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass rounded-2xl overflow-hidden border transition-all duration-300 group ${
                p.highlight
                  ? 'border-derry-red/30 md:col-span-2 xl:col-span-1'
                  : 'border-transparent hover:border-derry-red/20'
              }`}
              whileHover={{ y: -4 }}
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${p.highlight ? 'bg-derry-red/20' : 'bg-derry-border'}`}>
                      <FiFolder className={p.highlight ? 'text-derry-red' : 'text-derry-gray'} size={16} />
                    </div>
                    <span className="font-cinzel text-derry-gray text-xs tracking-widest">{p.id}</span>
                  </div>
                  <span className={`font-poppins text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-full ${statusColors[p.status]}`}>
                    {p.status}
                  </span>
                </div>

                <h3 className={`font-cinzel font-bold text-lg mb-1 transition-colors duration-300 group-hover:text-derry-red ${p.highlight ? 'text-derry-red' : 'text-derry-white'}`}>
                  {p.title}
                </h3>
                <p className="font-poppins text-derry-gray text-xs mb-3 tracking-wide">{p.tagline}</p>

                {/* Toggle */}
                <button
                  onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                  className="flex items-center gap-1 text-derry-gray hover:text-derry-red text-xs font-poppins transition-colors"
                >
                  <span>{expanded === p.id ? 'Less' : 'More'}</span>
                  <motion.span animate={{ rotate: expanded === p.id ? 180 : 0 }}>
                    <FiChevronDown size={12} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {expanded === p.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-poppins text-derry-gray text-sm leading-relaxed mt-3 overflow-hidden"
                    >
                      {p.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Tech tags */}
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 font-poppins text-[11px] text-derry-gray bg-derry-border/50 px-2.5 py-1 rounded-full"
                  >
                    {techIconMap[t] && <span className="text-sm">{techIconMap[t]}</span>}
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-poppins text-xs font-medium text-derry-gray hover:text-derry-white border border-derry-border hover:border-derry-gray/50 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <FiGithub size={13} /> GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-poppins text-xs font-medium text-derry-white bg-derry-red hover:bg-derry-accent px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    <FiExternalLink size={13} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
