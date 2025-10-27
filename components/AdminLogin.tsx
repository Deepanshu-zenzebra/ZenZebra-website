"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useRouter } from "next/navigation";

export const auth = getAuth(app);
export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin-login/catalogue-dashboard"); // redirect here
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#CC2224]/10 via-transparent to-[#ffffff10] blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-[90%] max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Admin Login
        </h1>
        <p className="text-center text-white/60 mb-8 text-sm">
          Restricted access - ZenZebra Management Only
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-white/40" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 text-white rounded-lg pl-10 pr-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#CC2224]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-white/40" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 text-white rounded-lg pl-10 pr-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#CC2224]"
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          {/* Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="w-full bg-[#CC2224] text-white font-semibold rounded-lg py-3 mt-4 hover:bg-[#b31e1f] transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
