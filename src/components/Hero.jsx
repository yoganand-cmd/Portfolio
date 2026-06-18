import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import Fog from "./Fog";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText
} from "react-icons/fi";

function Balloon({ style, delay = 0, size = 48 }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={style}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay }}
    >
      <motion.div
        animate={{ y: [0, -22, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width={size} height={size * 1.3} viewBox="0 0 60 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="30" cy="28" rx="22" ry="26" fill="#C1121F" opacity="0.9" />
          <ellipse cx="22" cy="18" rx="7" ry="5" fill="rgba(255,255,255,0.2)" />
          <path d="M30 54 Q28 60 30 66 Q32 72 30 78" stroke="#C1121F" strokeWidth="1.5" fill="none" opacity="0.7" />
          <circle cx="30" cy="54" r="2" fill="#C1121F" opacity="0.8" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

function FogLayer({ opacity, speed, top }) {
  return (
    <div
      className="absolute left-0 right-0 pointer-events-none overflow-hidden"
      style={{ top, height: '120px', opacity }}
    >
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(108,117,125,0.08) 30%, rgba(108,117,125,0.12) 50%, rgba(108,117,125,0.08) 70%, transparent 100%)',
          filter: 'blur(20px)',
          width: '200%',
        }}
      />
    </div>
  )
}

const roles = [
  'Java Developer',
  'React Developer',
  'AI Enthusiast',
  'Full Stack Learner'
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Deep background gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(193,18,31,0.08) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 80% 100%, rgba(193,18,31,0.04) 0%, transparent 60%)',
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(193,18,31,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(193,18,31,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Fog layers */}
      
      {/* Balloons */}
      <Balloon style={{ right: '8%', top: '15%' }} delay={0.5} size={52} />
      <Balloon style={{ left: '6%', top: '30%' }} delay={1.2} size={34} />
      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/10 via-white/5 to-transparent blur-3xl opacity-40 pointer-events-none"></div>

<div className="absolute bottom-10 left-0 w-full h-40 bg-gradient-to-t from-white/10 to-transparent blur-2xl opacity-30 animate-pulse pointer-events-none"></div>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-cinzel text-derry-red text-xs md:text-sm font-semibold tracking-[0.3em] mb-6 uppercase"
        >
          ⸻ &nbsp; Welcome to Derry &nbsp; ⸻
        </motion.div>

        {/* Name */}
        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="font-cinzel font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-4"
  style={{
    textShadow: `
      0 0 20px rgba(193,18,31,0.4),
      0 0 60px rgba(193,18,31,0.25)
    `
  }}
>
  <span className="text-white block">PAVULURI</span>
  <span className="text-red-600 block">YOGANAND</span>
</motion.h1>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.9 }}
  className="text-lg md:text-xl text-gray-400 mb-6 font-light"
>
  Computer Science Engineer
</motion.p>

        {/* Animated roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-10"
        >
          {roles.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.18 }}
              className="font-poppins text-lg md:text-2xl font-light text-derry-gray"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2 bg-derry-red text-white font-poppins font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(193,18,31,0.5)]"
          >
            <span className="relative z-10">Explore Derry</span>
            <motion.span
              className="absolute inset-0 bg-derry-accent"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <button
  onClick={() =>
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="inline-flex items-center gap-2 border border-derry-border text-derry-white font-poppins font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded hover:border-derry-red hover:text-derry-red transition-all duration-300"
>
  View Projects
</button>
      </motion.div>

<div className="flex justify-center gap-6 mt-8">
  <a
    href="https://github.com/yoganand-cmd"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-red-500"
  >
    <FiGithub size={24} />
  </a>

  <a
    href="https://linkedin.com/in/yoganand-pavuluri"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-red-500"
  >
    <FiLinkedin size={24} />
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-red-500"
  >
    <FiFileText size={24} />
  </a>

  <a
    href="mailto:yoganand8944@gmail.com"
    className="text-gray-400 hover:text-red-500"
  >
    <FiMail size={24} />
  </a>
</div>

</div>

{/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-derry-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="font-poppins text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown className="text-derry-red" />
        </motion.div>
      </motion.div>
    </section>
  )
}