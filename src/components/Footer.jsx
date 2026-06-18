import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative border-t border-derry-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <span className="text-derry-red">🎈</span>
            <span className="font-cinzel font-bold text-sm tracking-widest text-derry-white">PAVULURI YOGANAND</span>
          </div>
          <p className="font-poppins text-xs text-derry-gray italic">
            "Every great story starts with curiosity."
          </p>
        </div>

        {/* Center */}
        <p className="font-poppins text-xs text-derry-gray/50 text-center order-3 md:order-2">
          © {new Date().getFullYear()} Pavuluri Yoganand · Built with React & Framer Motion
        </p>

        {/* Right: social */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          {[
            { icon: <FiGithub size={16} />, href: 'https://github.com/yoganand-cmd', label: 'GitHub' },
            { icon: <FiLinkedin size={16} />, href: 'https://linkedin.com/in/yoganand-pavuluri', label: 'LinkedIn' },
            { icon: <FiMail size={16} />, href: 'mailto:yoganand8944@gmail.com', label: 'Email' },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, color: '#C1121F' }}
              className="text-derry-gray transition-colors duration-200"
              aria-label={s.label}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}