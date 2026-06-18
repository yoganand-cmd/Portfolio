import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import SectionHeader from "../components/SectionHeader";

const movies = [
  {
    title: 'IT',
    year: 2017,
    director: 'Andy Muschietti',
    rating: 9.5,
    genre: 'supernatural horror and mystery & thriller',
    review: 'a masterful blend of coming-of-age drama and terrifying horror, with a haunting performance by Bill Skarsgård as Pennywise the Clown.',
    color: '#1a1a2e',
    accent: '#e94560',
  },
  {
  title: 'Spider-Man: No Way Home',
  year: 2021,
  director: 'Jon Watts',
  rating: 9.4,
  genre: 'Superhero / Action',
  review: 'An emotional multiverse spectacle that perfectly balances nostalgia, heart, and heroic sacrifice. One of the most memorable Spider-Man stories ever told.',
  color: '#0a1a2f',
  accent: '#e62429',
},
  {
  title: '10 Things I Hate About You',
  year: 1999,
  director: 'Gil Junger',
  rating: 8.8,
  genre: 'Romance / Comedy',
  review: 'A charming teen romantic comedy with sharp humor, memorable performances, and one of the most iconic love stories of the late 90s.',
  color: '#2d1b3d',
  accent: '#ff6b9d',
},
  {
  title: 'Taare Zameen Par',
  year: 2007,
  director: 'Aamir Khan',
  rating: 9.8,
  genre: 'Drama / Family',
  review: 'A deeply moving story about childhood, creativity, and understanding. It beautifully highlights the importance of empathy in education and parenting.',
  color: '#1b2a41',
  accent: '#f4a261',
},
  {
  title: '(500) Days of Summer',
  year: 2009,
  director: 'Marc Webb',
  rating: 9.0,
  genre: 'Romance / Drama',
  review: 'A refreshing and bittersweet take on love, expectations, and heartbreak. It reminds us that not every great relationship is meant to last forever.',
  color: '#1e293b',
  accent: '#60a5fa',
},
  {
    title: 'Fight Club',
    year: 1999,
    director: 'David Fincher',
    rating: 8.9,
    genre: 'Drama / Thriller',
    review: 'The first rule: build things that matter. The second rule: see the first rule.',
    color: '#1a1005',
    accent: '#d4a017',
  },
]

function StarRating({ rating }) {
  const full = Math.floor(rating / 2)
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FiStar
          key={i}
          size={11}
          className={i < full ? 'text-yellow-400 fill-yellow-400' : 'text-derry-gray'}
          style={{ fill: i < full ? '#facc15' : 'transparent' }}
        />
      ))}
      <span className="font-cinzel text-xs text-derry-gray ml-1">{rating}</span>
    </div>
  )
}

export default function MovieVault() {
  return (
    <section id="movies" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Personal Collection"
          title="Movie Vault"
          subtitle="Cinema that shaped how I think about design, ambition, and the stories we tell through what we build."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {movies.map((movie, i) => (
            <motion.div
              key={movie.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ background: movie.color }}
            >
              {/* Poster placeholder */}
              <div
                className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${movie.color} 0%, ${movie.accent}33 100%)`,
                  borderBottom: `1px solid ${movie.accent}22`,
                }}
              >
                {/* Cinematic stripe effect */}
                {[...Array(6)].map((_, j) => (
                  <div
                    key={j}
                    className="absolute"
                    style={{
                      width: '1px',
                      height: '100%',
                      left: `${15 + j * 15}%`,
                      background: `linear-gradient(to bottom, transparent, ${movie.accent}15, transparent)`,
                    }}
                  />
                ))}
                <div className="text-center z-10">
                  <div
                    className="font-cinzel font-black text-2xl tracking-tight"
                    style={{ color: movie.accent, textShadow: `0 0 30px ${movie.accent}88` }}
                  >
                    {movie.title.split(' ').map((w) => w[0]).join('')}
                  </div>
                  <div className="font-poppins text-xs text-white/40 mt-1 tracking-widest">{movie.year}</div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 border border-white/5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-cinzel font-bold text-derry-white text-base group-hover:text-white transition-colors">
                      {movie.title}
                    </h3>
                    <p className="font-poppins text-xs text-derry-gray mt-0.5">{movie.director} · {movie.year}</p>
                  </div>
                  <span
                    className="font-poppins text-[10px] px-2 py-0.5 rounded-full tracking-wide"
                    style={{ color: movie.accent, background: `${movie.accent}18`, border: `1px solid ${movie.accent}33` }}
                  >
                    {movie.genre.split(' / ')[0]}
                  </span>
                </div>
                <StarRating rating={movie.rating} />
                <p className="font-poppins text-derry-gray text-xs mt-3 leading-relaxed italic">
                  "{movie.review}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}