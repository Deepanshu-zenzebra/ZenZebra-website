'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/60"></div>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {/* 1 — Brand & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img src={'/logo-2.png'} width={175}></img>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">
            A lifestyle store for finer things in life - right where you are.
            Try it first, own it after.
          </p>
        </motion.div>

        {/* 2 — Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-[#CC2224] mb-3">Explore</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/brands" scroll>Integrate your brand with us</Link></li>
            <li><Link href="/partners" scroll>Become our channel partner</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </motion.div>

        {/* 3 — Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-[#CC2224] mb-3">Get in touch</h4>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#CC2224]" />
              <span>tanmay@zenzebra.in | gurpreet@zenzebra.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#CC2224]" />
              <span>+91 9910605187 | +91 9958680856</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#CC2224]" />
              <span>Delhi, India</span>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <Link href="https://www.instagram.com/zenzebraindia/" target="_blank">
              <Instagram className="h-5 w-5 text-white hover:text-[#CC2224] transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/company/zenzebraindia/posts/?feedView=all" target="_blank">
              <Linkedin className="h-5 w-5 text-white hover:text-[#CC2224] transition-colors" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className='grid gap-2 sm:grid-cols-2 border-t text-center border-white/10 mt-12 pt-6 text-white/80 text-[14px]'>
        <div className='flex flex-col'>
          <span>Registered Name</span>
          <span>Bohemian Curations Pvt Ltd</span>
        </div>
        <div className='flex flex-col'>
          <span>CIN</span>
          <span>U46411DL2023PTC424632</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} ZenZebra. All rights reserved.
      </div>
    </footer>
  )
}