import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      {eyebrow && (
        <p className="font-cinzel text-derry-red text-xs tracking-[0.35em] uppercase mb-3">
          ⸻ &nbsp; {eyebrow} &nbsp; ⸻
        </p>
      )}
      <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-derry-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-poppins text-derry-gray text-base mt-4 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-derry-red" />
        <div className="w-1.5 h-1.5 rounded-full bg-derry-red" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-derry-red" />
      </div>
    </motion.div>
  )
}