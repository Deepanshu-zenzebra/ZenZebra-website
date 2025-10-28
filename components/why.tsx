// 'use client'

// import { motion } from 'framer-motion'
// import { Truck, ShieldCheck, BadgeIndianRupee } from 'lucide-react'

// export default function Why() {
//   return (
//     <section className="relative py-20">
//       <div className="mx-auto max-w-6xl rounded-2xl bg-[#353535]/60 backdrop-blur-sm px-6 py-14">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="text-center text-4xl sm:text-5xl font-bold text-white"
//         >
//           Better Living <span className="text-[#CC2224]">Real Convenience</span>
//         </motion.h2>

//         {/* Subheading */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-4 text-center text-white/70 max-w-2xl mx-auto"
//         >
//           Smarter choices made effortless.
//         </motion.p>

//         {/* Cards */}
//         <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//           {/* Card 1 */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -5, scale: 1.02 }}
//             className="rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-lg"
//           >
//             <div className="flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CC2224]/15">
//                 <Truck className="h-6 w-6 text-[#CC2224]" />
//               </div>
//               <h3 className="text-lg font-semibold">Convenience</h3>
//             </div>
//             <p className="mt-3 text-white/70 text-sm leading-relaxed">
//               Discover products right where you are - at work, at play, or on the go.
//             </p>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -5, scale: 1.02 }}
//             className="rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-lg"
//           >
//             <div className="flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CC2224]/15">
//                 <ShieldCheck className="h-6 w-6 text-[#CC2224]" />
//               </div>
//               <h3 className="text-lg font-semibold">Assurance</h3>
//             </div>
//             <p className="mt-3 text-white/70 text-sm leading-relaxed">
//               Try first, own later. Experience every product before you decide.
//             </p>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -5, scale: 1.02 }}
//             className="rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-lg"
//           >
//             <div className="flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CC2224]/15">
//                 <BadgeIndianRupee className="h-6 w-6 text-[#CC2224]" />
//               </div>
//               <h3 className="text-lg font-semibold">Value</h3>
//             </div>
//             <p className="mt-3 text-white/70 text-sm leading-relaxed">
//               Premium experience, honest prices - designed for better living.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { motion } from "framer-motion";

const items = [
  {
    k: "01",
    title: "Convenience",
    line: "Right where you are. No detours.",
  },
  {
    k: "02",
    title: "Assurance",
    line: "Try first. Own later. No regrets",
  },
  {
    k: "03",
    title: "Value",
    line: "Lux experience. Honest prices.",
  },
];

export default function Why() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* subtle background sheen */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_80%_10%,rgba(204,34,36,0.18),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
        >
          Smarter choices made <span className="text-[#CC2224]">Effortless</span>
        </motion.h2>
        <div className="mt-10 space-y-4">
          {items.map((it, idx) => (
            <Stripe key={it.k} idx={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stripe({
  k,
  title,
  line,
  idx,
}: {
  k: string;
  title: string;
  line: string;
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.06 }}
      whileHover={{ scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      {/* base */}
      <div
        className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-6 
             rounded-2xl px-6 py-6 bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10"
      >
        {/* left: key + title */}
        <div className="flex items-baseline gap-4 ">
          <span className="text-xs tracking-widest text-white/40">{k}</span>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            {title}
          </h3>
        </div>

        {/* right: one-line value */}
        <p className="text-sm sm:text-base text-white/70">{line}</p>

        {/* red underline that grows on hover */}
        <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#CC2224]/70 transition-all duration-500 group-hover:w-full" />
      </div>

      {/* sheen on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-x-10 -top-1/2 h-full rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]" />
      </div>
    </motion.div>
  );
}
