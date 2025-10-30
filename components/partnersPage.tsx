"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TickerItem from "./TickerItem";

/* -------------------- Hero -------------------- */
export function Hero() {
  
  return (
    <section className="relative overflow-hidden py-28 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_70%_0%,rgba(204,34,36,.15),transparent_60%)]" />

      <div className="mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Let’s Build <span className="text-[#CC2224]">BreakSpots</span>{" "}
          Together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-white/75"
        >
          ZenZebra builds micro-worlds of pause inside coworking spaces, hotels,
          and cafés - creating a cultural anchor that elevates your ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center gap-3"
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfyFOB1d7hBoF-um8epwCM6TR3tcB6diGmdffn3WNok4pMxZw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#CC2224] px-6 py-3 text-sm font-semibold hover:bg-[#b31d1f] transition"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- Value Proposition -------------------- */
export function ValueSection() {
  const values = [
    {
      title: "Cultural Anchor",
      text: "ZenZebra adds life and connection to your space - turning it into a lifestyle destination.",
    },
    {
      title: "Extended Dwell Time",
      text: "Our BreakSpots make people stay longer, engage deeper, and return often.",
    },
    {
      title: "Revenue & Retention",
      text: "Add experiential retail without operational load. We handle curation, logistics, and branding.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight"
        >
          The <span className="text-[#CC2224]">BreakSpot</span> Advantage
        </motion.h2>
        <p className="mt-3 text-white/70">
          Every ZenZebra installation transforms your environment into an
          emotional reset point.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 hover:ring-[#CC2224]/30 transition"
            >
              <h3 className="text-xl font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {v.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Experience Section -------------------- */
export function ExperienceSection() {
  const layers = [
    {
      step: "1. Entry - The Dazzle Moment",
      desc: "Color, scent, and curiosity invite people to pause. It’s not a shop - it’s a vibe.",
    },
    {
      step: "2. Exploration - The Touch Loop",
      desc: "Every product begs to be felt, tested, and talked about - real engagement, not clicks.",
    },
    {
      step: "3. Belonging - The Shared Find",
      desc: "Each interaction sparks conversation - the kind of marketing no ad can buy.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_20%_100%,rgba(204,34,36,.12),transparent_60%)]" />
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight"
        >
          One of a <span className="text-[#CC2224]">kind</span> Experience
        </motion.h2>
        <p className="mt-3 text-white/70">
          Designed for movement, but made for pause. Each layer adds value to
          your ecosystem.
        </p>

        <div className="mt-10 space-y-6">
          {layers.map((l, i) => (
            <motion.div
              key={l.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 hover:border-[#CC2224]/30 transition"
            >
              <h3 className="text-lg font-semibold">{l.step}</h3>
              <p className="mt-2 text-white/65 text-sm">{l.desc}</p>
              <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#CC2224]/70 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Numbers -------------------- */
export function Numbers() {
  const stats = [
    { num: "3+", label: "Cities Active" },
    { num: "250+", label: "Trending Brands" },
    { num: "15K+", label: "Daily Footfall" },
    { num: "∞", label: "Connections Sparked" },
  ];

  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
          >
            <p className="text-4xl font-extrabold text-[#CC2224]">{s.num}</p>
            <p className="text-sm text-white/70 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Existing Partners -------------------- */
export default function PartnersTicker() {
  const logos = [
    { src: '/dlf.webp', alt: 'DLF' },
    { src: '/smartworks.png', alt: 'Smartworks' },
    { src: '/awfis.png', alt: 'Awfis' },
    { src: '/lodhi.png', alt: 'The Lodhi' },
    { src: '/oneplus.png', alt: 'Oneplus' },
    { src: '/cleartrip.jpg', alt: 'Clear Trip' },
  ]
  const track = [...logos, ...logos] // exact duplicate

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
               style={{ maskImage: 'linear-gradient(to right, black, transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
               style={{ maskImage: 'linear-gradient(to left, black, transparent)' }} />

          <motion.div
            className="flex w-[200%]" // 2x width -> -50% finishes 1 perfect cycle
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 26, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
            style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          >
            {track.map((l, i) => (
              <div key={i} className="flex items-center">
                <div className="shrink-0 w-[176px] h-[44px] opacity-80 hover:opacity-100 transition-opacity">
                  <img src={l.src} alt={l.alt} className="block h-full w-full object-contain" draggable={false} />
                </div>
                <div className="shrink-0 w-[28px]" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* -------------------- Collaboration Models -------------------- */
export function CollabModel() {
  const models = [
    {
      title: "Space Partnership",
      text: "Integrate ZenZebra as an emotional hub in your property - we handle setup, curation, and operations.",
    },
    {
      title: "Event Collaboration",
      text: "Pop-ups, creator sessions, Break Fridays - every activation drives energy and dwell time.",
    },
    {
      title: "Brand x Space Collabs",
      text: "We match your vibe with trending brands for co-branded discovery moments.",
    },
  ];
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight"
        >
          Collaboration <span className="text-[#CC2224]">Made Effortless</span>
        </motion.h2>
        <p className="mt-3 text-white/70">
          Plug into our network - or let’s build something unique together.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6"
            >
              <h3 className="text-xl font-semibold">{m.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Final CTA -------------------- */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(204,34,36,.22),transparent_60%)]" />
      <div className="mx-auto max-w-6xl text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight"
        >
          Transform Your <span className="text-[#CC2224]">Space</span> Into an
          Experience
        </motion.h3>
        <p className="mt-3 max-w-2xl mx-auto text-white/75">
          Add emotional value, drive engagement, and make your space
          unforgettable. Partner with ZenZebra to turn everyday movement into
          memorable moments.
        </p>

        <div className="mt-8">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfyFOB1d7hBoF-um8epwCM6TR3tcB6diGmdffn3WNok4pMxZw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#CC2224] px-6 py-3 text-sm font-semibold hover:bg-[#b31d1f] transition"
          >
            Become a Space Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
