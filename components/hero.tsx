'use client'
import { ParticleCanvas } from "@/hooks/particle"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

function Hero() {
    const {scrollY} = useScroll()
    const y = useTransform(scrollY, [0,500], [0,100])
  return (
    <section  className="min-h-screen relative overflow-hidden">
        <ParticleCanvas/>
        <div className="max-w-7xl mx-auto px-6 pt-32 z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Text content */}
                <motion.div
                initial={{opacity:0, x:-50}}
                animate={{opacity:1, x:0}}
                transition={{duration:1, ease:"easeOut"}}
                className="relative group lg:w-1/2">
                    <motion.h1
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.8, delay:0.5}}
                    className="text-3xl md:text-5xl font-bold leading-[1.15] md:leading-[1.1] bg-gradient-to-r from-white/80 via-white/50 to-white/30
                    bg-clip-text text-transparent mb-6">
                        Curated lifestyle,
                        <br />
                        <motion.span
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.8, delay:0.8}}
                        className="bg-gradient-to-r from-white/80 via-white/50 to-white/30
                    bg-clip-text text-transparent">
                            seamlessly integrated into your daily life.
                        </motion.span>
                    </motion.h1>  

                    <motion.p
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.8, delay:1.1}}
                    className="text-xl text-white/80 mb-8">
                        Try it. Own it. On the go
                    </motion.p>

                    <Link href={'/catalogue'}>
                    <motion.button
                    initial={{opacity:0, y:10}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2, ease:"easeOut" } }}
                    className="relative overflow-hidden px-8 py-4 rounded-full border
                      border-white/30 hover:border-white/50 transition-all cursor-pointer group">
                        <span className="text-white/80 hover:text-white transition-colors">Explore catalogue</span>
                        
                        <div
                                className="absolute inset-0 bg-gradient-to-r 
                                    from-red-600/20 via-red-400/10 to-red-200/5 opacity-0
                                    hover:opacity-100 transition-opacity"
                            />
                    </motion.button>
                    </Link>
                </motion.div>

                {/*image card*/}
                <motion.div
                initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="lg:w-1/2 relative"
                        style={{y}}
                >
                    <div className="relative w-full aspect-square group">
                            {/* Floating Animation */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-full aspect-auto
                                rounded-3xl overflow-hidden
                                border border-white/20 shadow-red-500/30 shadow-lg
                                backdrop-blur-sm"
                            >
                                <img src="/SW pic.jpg"
                                    alt="Smartworks image"
                                    className="object-cover scale-110 group-hover:scale-100
                                            transition-transform duration-500" />
                                <div
                                    className="absoulte inset-0 bg-gradient-to-t
                                        from-black/60 to-transparent"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
        </div>
    </section>
  )
}

export default Hero