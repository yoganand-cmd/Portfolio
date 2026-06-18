import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import MovieVault from './sections/MovieVault'
import Contact from './sections/Contact'
import Footer from './components/Footer'
export default function App() {
  return (
    <div className="relative bg-derry-bg min-h-screen noise-overlay">
      {/* Ambient red glow at top */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(193,18,31,0.12) 0%, transparent 70%)',
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <MovieVault />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}