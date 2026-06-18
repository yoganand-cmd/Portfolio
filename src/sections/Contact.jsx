import React from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload
} from 'react-icons/fi'
import SectionHeader from "../components/SectionHeader";

const contacts = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'yoganand8944@gmail.com',
    href: 'mailto:yoganand8944@gmail.com',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'yoganand-pavuluri',
    href: 'https://linkedin.com/in/yoganand-pavuluri',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'yoganand-cmd',
    href: 'https://github.com/yoganand-cmd',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center bottom, rgba(193,18,31,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Escape Derry"
          subtitle="Every great collaboration starts with a conversation."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-5"
          >
            <div className="mb-4">
              <h3 className="font-cinzel font-bold text-xl text-derry-white mb-2">
                Let's build something.
              </h3>

              <p className="font-poppins text-derry-gray text-sm leading-relaxed">
                Open to internships, freelance projects,
                collaborations and opportunities.
              </p>
            </div>

            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass rounded-xl p-4 group border border-transparent hover:border-derry-red/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-derry-red/10 border border-derry-red/20 flex items-center justify-center text-derry-red group-hover:bg-derry-red group-hover:text-white transition-all duration-300">
                  {c.icon}
                </div>

                <div>
                  <p className="font-cinzel text-xs text-derry-gray tracking-widest uppercase">
                    {c.label}
                  </p>

                  <p className="font-poppins text-sm text-derry-white font-medium group-hover:text-derry-red transition-colors">
                    {c.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 flex flex-col justify-center"
          >
            <h3 className="font-cinzel font-bold text-2xl text-derry-white mb-4">
              Resume File
            </h3>

            <p className="font-poppins text-derry-gray text-sm mb-8 leading-relaxed">
              Download my latest resume containing projects,
              technical skills, certifications, hackathons,
              and achievements.
            </p>

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-3 bg-derry-red hover:bg-derry-accent text-white font-poppins font-semibold text-sm tracking-widest uppercase px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_24px_rgba(193,18,31,0.4)]"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}