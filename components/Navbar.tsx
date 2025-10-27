"use client";
import { motion, px } from "motion/react";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Brands", href: "/brands" },
    { label: "Partners", href: "/partners" },
    { label: "Zen at home", href: "/zen-at-home" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setIsHidden(currentY > lastY && currentY > 80);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -80 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed w-full top-0 left-0 right-0 z-50 bg-[#1c1c1c]/60 backdrop-blur-3xl 
      transition-all duration-300 ease-out text-white/70 border-white/10"
    >
      <div className="max-w-full px-6 py-3 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center md:gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.05, ease: "easeOut" }}
            >
              <Link href={"/"}>
                <img src="logo.png" width={175} alt="zenzebra logo"></img>
              </Link>
            </motion.div>
            <img src={"/flag-2.png"} className="w-12 sm:w-15" alt="india flag"></img>
          </div>

          <div className="hidden md:flex">
            {navItems.map((item, i) => (
              <MenuItem key={item.label} index={i} href={item.href}>
                {item.label}
              </MenuItem>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" md:hidden bg-white/5 hover:bg-blue-100/10 p-2 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white/80" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white/80" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-transparent/80 backdrop-blur-2xl md:hidden mt-4 pb-4  space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-white/80 hover:text-blue-100
                rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
