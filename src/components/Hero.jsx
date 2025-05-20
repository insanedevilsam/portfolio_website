import { motion } from "framer-motion";
import BackgroundAnimation from "./BackgroundAnimation";

export default function HeroAnimation() {
  return (
    <section className="min-h-screen bg-[#101020] flex flex-col md:flex-row items-center justify-center px-4 relative overflow-hidden">
      <BackgroundAnimation />
      {/* Content wrapper to ensure it's above the background */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left: Your Details */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4 z-10 md:pr-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl xl:text-6xl font-extrabold text-white leading-tight"
          >
            Sameer Pandey
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl xl:text-3xl font-semibold text-purple-300 mb-2"
          >
            Web Developer & AI Enthusiast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-blue-100 max-w-md"
          >
            Turning bold ideas into elegant digital solutions. Passionate about
            building seamless UIs and dependable backend systems. Always learning.
            Always innovating.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="inline-block mt-5 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
            >
              See My Work
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-4 text-sm text-gray-400"
          >
            Machine Learning Intern @{" "}
            <span className="text-purple-400 font-semibold">Aican Automate</span>
            <br />
            Aug 2022 – Sep 2022
          </motion.div>
        </div>
        {/* Right: Animated Glowing Globe */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 50 }}
          className="flex-1 flex justify-center items-center w-full md:w-auto mt-10 md:mt-0"
        >
          <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-700 via-blue-900 to-purple-900 shadow-[0_0_80px_20px_rgba(100,100,255,0.30)] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute w-full h-full rounded-full bg-blue-400 blur-3xl opacity-25 animate-pulse" />
            {/* Comet Highlight */}
            <div className="absolute right-8 top-12 w-16 h-2 bg-gradient-to-r from-white/90 to-purple-400 blur-lg rounded-full rotate-45" />
            {/* Thin neon arc to mimic the UI style */}
            <div className="absolute left-0 right-0 top-10 mx-auto h-1 w-64 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 rounded-full filter blur-sm opacity-90" />
            {/* Overlay Text */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="z-10 text-center text-white text-2xl font-extrabold drop-shadow-lg"
            >
              Let’s
              <br />
              Build
              <br />
              Together
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}