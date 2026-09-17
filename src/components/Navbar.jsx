import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToId } from '../hooks/useLenis'

const links = [
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'farm', label: 'Farm Plan' },
  { id: 'technology', label: 'Technology' },
  { id: 'market', label: 'Market' },
  { id: 'financials', label: 'Financials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [hovered, setHovered] = useState(null)
  const [hidden, setHidden] = useState(false)
  const stopTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const ids = ['hero', ...links.map((l) => l.id)]
      let current = 'hero'
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 140) current = id
      })
      setActive(current)

      if (open || y < 12) {
        setHidden(false)
        return
      }

      setHidden(true)
      clearTimeout(stopTimer.current)
      stopTimer.current = setTimeout(() => setHidden(false), 220)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(stopTimer.current)
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  const pillId = hovered ?? (active === 'hero' ? null : active)

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      className="fixed inset-x-0 top-0 z-50 overflow-hidden rounded-b-[2rem] border-b-2 border-[#d4af37] bg-gradient-to-r from-[#fff8dc] via-[#f1d789] to-[#ffe29a] py-3 shadow-[0_12px_36px_rgba(212,175,55,0.45)]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <motion.button
          onClick={() => go('hero')}
          className="text-left"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Geniuss home"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/geniuss-logo.png?v=2`}
            alt="Geniuss"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </motion.button>

        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((link) => {
            const isOn = pillId === link.id
            return (
              <motion.button
                key={link.id}
                onClick={() => go(link.id)}
                onMouseEnter={() => setHovered(link.id)}
                whileTap={{ scale: 0.96 }}
                className={`relative px-3.5 py-2 text-[13px] font-semibold tracking-[0.16em] uppercase transition ${
                  isOn ? 'text-ink' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {isOn && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-ink/15 bg-white/70 shadow-sm"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.button>
            )
          })}
          <motion.button
            onClick={() => go('contact')}
            onMouseEnter={() => setHovered(null)}
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            variants={{ hover: { scale: 1.06, y: -1 } }}
            className="relative ml-3 overflow-hidden rounded-full bg-ink px-5 py-2 text-[13px] font-semibold tracking-wide text-gold-soft"
          >
            <motion.span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              variants={{ hover: { x: '120%' } }}
              initial={{ x: '-120%' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            />
            Invest with us
          </motion.button>
        </nav>

        <motion.button
          className="rounded-full border-2 border-ink/30 bg-white/60 p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9, rotate: 12 }}
          animate={{ rotate: open ? 90 : 0 }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-5 mt-3 mb-2 space-y-1 rounded-2xl border border-ink/10 bg-white/70 p-3">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => go(link.id)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full rounded-xl px-3 py-3 text-left text-sm tracking-widest uppercase transition ${
                    active === link.id
                      ? 'bg-ink text-gold-soft'
                      : 'text-ink/80 hover:bg-white hover:text-ink'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
