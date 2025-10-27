"use client";
import { motion } from "framer-motion";

type ImgItem = { src: string; alt: string };
type Props = {
  images: ImgItem[];
  from: string; // e.g. '0%' or '-100%'
  to: string; // e.g. '-100%' or '0%'
};

export default function TickerItem({ images, from, to }: Props) {
  return (
    <div className="relative overflow-hidden">
      
      <div className="flex">
        {/* Track A */}
        <motion.div
          initial={{ x: from }} // '0%' or '-100%'
          animate={{ x: to }} // '-100%' or '0%'
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex items-center mt-10 flex-shrink-0 will-change-transform bg-white"
        >
          {images.map((item, i) => (
            <img
              key={`a-${i}`}
              src={item.src}
              alt={item.alt}
              className="h-20 w-auto pr-20 py-1 object-contain"
              loading="lazy"
            />
          ))}
        </motion.div>

        {/* Track B (duplicate for seamless loop) */}
        <motion.div
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex items-center mt-10 flex-shrink-0 will-change-transform bg-white"
          aria-hidden="true"
        >
          {images.map((item, i) => (
            <img
              key={`b-${i}`}
              src={item.src}
              alt=""
              className="h-20 w-auto pr-20 py-1 object-contain"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
