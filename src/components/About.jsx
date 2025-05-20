import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.20,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function About() {
  return (
    <section
      id="about"
      className="bg-transparent py-20 px-6 md:px-0 flex items-center justify-center min-h-[70vh] relative overflow-hidden" // Keep it transparent
    >
      {/* Top Left Corner: About Me heading */}
      <motion.h2
        initial={{ opacity: 0, x: -30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="absolute top-10 left-8 md:top-14 md:left-20 z-20 text-3xl md:text-4xl font-extrabold text-purple-400 tracking-wide drop-shadow-[0_1px_12px_rgba(168,85,247,0.5)]"
      >
        About Me
      </motion.h2>

      {/* About Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border-[0.5px] border-purple-800 shadow-xl rounded-xl px-8 py-10 md:px-12"
      >
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-20 md:w-24 h-1 bg-purple-500 rounded-full mb-7 shadow-[0_0_24px_8px rgba(168,85,247,0.31)] mx-auto"
        ></motion.div>
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-gray-200 mb-7 leading-relaxed text-center"
        >
          Hi, I'm <span className="text-purple-400 font-semibold">Sameer Pandey</span> — a Web and Application Developer passionate about turning ideas into reality through clean, scalable code and modern development practices.
          <br /><br />
          My foundation is in <span className="text-purple-300">Computer Applications</span>, and I’ve delivered solutions using a range of technologies across the stack: from interactive front-ends to reliable back-end APIs and robust mobile apps.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-md text-gray-400 mb-3 text-center"
        >
          I’m driven by a love for tech and constant learning. Currently, I’m expanding my skill set by exploring the integration of <span className="text-purple-300 font-medium">Artificial Intelligence and Machine Learning</span> into real-world web and app projects. Whether it’s automating workflows or building smarter apps, I enjoy bridging development with emerging AI/ML solutions.
          <br /><br />
          <span className="text-purple-400">Strengths:</span> Fast learner, effective communicator, problem solver, always focused on impact and innovation.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-8"
        >
          <p className="text-base text-purple-200 italic tracking-wide text-center">
            As the tech landscape evolves, I evolve with it—constantly pushing boundaries in web and intelligent application development.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;