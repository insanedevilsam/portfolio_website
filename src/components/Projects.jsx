import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Campus Navigation App",
    description:
      "Hybrid indoor-outdoor navigation solution for campuses, built with Flutter & Google Maps API. Enhanced route clarity for users.",
    link: "https://github.com/yourgithub/campus-navigation",
    image: "/assets/campus-nav.jpg",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A web-based real-time chat platform using Spring Boot and React. Improved engagement and reliable communication.",
    link: "https://github.com/yourgithub/real-time-chat",
    image: "/assets/chat-app.jpg",
  },
  {
    title: "Agro - Smart Farming Assistant",
    description:
      "A smart farming assistant web app utilizing React.js and data APIs to optimize yield and automate record keeping.",
    link: "https://github.com/yourgithub/agro-farming",
    image: "/assets/agro-app.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio built with React and Tailwind CSS. Modern, clean, and mobile-first.",
    link: "https://github.com/yourgithub/portfolio",
    image: "/assets/portfolio-mock.jpg",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.4)",
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
};

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <section
      id="projects"
      className="bg-transparent py-16 px-6 flex flex-col items-center relative"
    >
      <div className="max-w-4xl w-full z-10">
        <h2 className="text-5xl font-extrabold text-purple-400 mb-4">My Recent Works</h2>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8 shadow-[0_0_40px_12px_rgba(168,85,247,0.4)]"></div>

        <motion.div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a012a]/80 p-5 rounded-2xl border-2 border-transparent transition flex flex-col gap-4 relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(-1)}
              whileHover="hover"
            >
              <div className="aspect-[16/9] w-full bg-[#0f0f2d] flex items-center justify-center rounded-lg overflow-hidden border border-purple-900 mb-3">
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className={`object-cover w-full h-full transition-transform duration-300 ${
                      hoveredIndex === idx ? "scale-105" : ""
                    }`}
                    loading="lazy"
                  />
                ) : (
                  <div className="text-purple-800 text-center">[Project Screenshot]</div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 grow">{project.description}</p>
              <span className="inline-block mt-2 text-purple-400 font-semibold">
                View on GitHub &rarr;
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Background without moving effect */}
      <div className="absolute inset-0 bg-transparent" />
    </section>
  );
}

export default Projects;