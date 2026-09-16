import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-leaf">Partner with us</p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl">Build the next smart shivar.</h2>
          <p className="mt-5 text-forest/75">
            Geniuss Smart Agro Farming LLP is developing Amrut Shivar in Pune — an integrated
            hydroponic and smart-farming infrastructure that can be replicated across Maharashtra
            and India.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <p>
              <span className="tracking-[0.18em] uppercase text-leaf">Entity</span>
              <br />
              Geniuss Smart Agro Farming LLP · Genuiss Hydrofarming LLP
            </p>
            <p>
              <span className="tracking-[0.18em] uppercase text-leaf">Location</span>
              <br />
              Pune, Maharashtra, India
            </p>
            <p className="font-deva text-lg">शाश्वत शेतीचे भविष्य घडवत आहोत.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-[2rem] bg-forest p-10 text-cream"
            >
              <p className="font-serif text-4xl gold-text">Thank you.</p>
              <p className="mt-4 text-cream/75">
                Your interest is noted. The team will follow up with the full project dossier,
                financial model and site visit plan.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-sand bg-white p-8 shadow-sm">
              <label className="block text-sm">
                Name
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-sand bg-mist px-4 py-3 outline-none transition focus:border-gold"
                />
              </label>
              <label className="mt-4 block text-sm">
                Email
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-sand bg-mist px-4 py-3 outline-none transition focus:border-gold"
                />
              </label>
              <label className="mt-4 block text-sm">
                I am a
                <select className="mt-2 w-full rounded-xl border border-sand bg-mist px-4 py-3 outline-none focus:border-gold">
                  <option>Investor</option>
                  <option>Partner farmer</option>
                  <option>HoReCa buyer</option>
                  <option>Institution / bank</option>
                </select>
              </label>
              <label className="mt-4 block text-sm">
                Message
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-sand bg-mist px-4 py-3 outline-none transition focus:border-gold"
                  placeholder="Tell us how you’d like to work with Amrut Shivar"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-gold py-3 font-semibold text-ink transition hover:bg-gold-soft"
              >
                Request a conversation
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
