import { motion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import FloatingLeaves from './FloatingLeaves'
import { scrollToId } from '../hooks/useLenis'

const chips = [
  'Hydroponics',
  'Gir Dairy',
  'Poultry',
  'Moringa',
  'Wind Energy',
  'Agro-Tourism',
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden grain">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={`${import.meta.env.BASE_URL}videos/hero.mp4`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Amrut Shivar farm video"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
      <FloatingLeaves />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-4 inline-flex items-center gap-2 text-xs tracking-[0.32em] uppercase text-[#fff6c8] drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]"
        >
          <MapPin size={14} /> Pune, Maharashtra · Geniuss Smart Agro Farming LLP
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="max-w-5xl font-serif text-5xl leading-[0.95] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] sm:text-6xl md:text-8xl"
        >
          Amrut <span className="italic text-[#ffe9a0]">Shivar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-4 text-xl text-[#fff1b8] drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] md:text-3xl"
        >
          Integrated smart farming platform
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)] md:text-lg"
        >
          One ecosystem. Multiple opportunities. A climate-controlled hydroponic farm integrated with
          Gir dairy, poultry, moringa, renewable energy and smart monitoring — grown in Pune for
          premium India and export markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {chips.map((chip, i) => (
            <motion.span
              key={chip}
              className="rounded-full border border-[#ffe9a0]/70 bg-white/10 px-4 py-1.5 text-xs tracking-widest uppercase text-[#fff6c8] drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.06 }}
              whileHover={{ scale: 1.06, borderColor: '#fff6c8' }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollToId('financials')}
            className="rounded-full bg-[#f1d789] px-7 py-3 text-sm font-semibold tracking-wide text-ink transition hover:bg-[#fff1b8]"
          >
            View project numbers
          </button>
          <button
            onClick={() => scrollToId('farm')}
            className="rounded-full border border-white/70 px-7 py-3 text-sm tracking-wide text-white transition hover:border-[#ffe9a0] hover:text-[#fff6c8]"
          >
            Explore the 1-acre master plan
          </button>
        </div>

        <button
          onClick={() => scrollToId('problem')}
          className="mt-14 flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-cream/60"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20"
          >
            <ArrowDown size={16} />
          </motion.span>
          Scroll the story
        </button>
      </div>
    </section>
  )
}
