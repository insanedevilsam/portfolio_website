import { useState, useRef } from "react";
import { motion } from "framer-motion";

// Node color scheme
const skills = [
  { name: "React.js", x: 430, y: 80, color: "#a855f7" },
  { name: "JavaScript", x: 590, y: 140, color: "#60a5fa" },
  { name: "Node.js", x: 770, y: 110, color: "#818cf8" },
  { name: "Tailwind CSS", x: 530, y: 230, color: "#38bdf8" },
  { name: "HTML5", x: 310, y: 130, color: "#f87171" },
  { name: "CSS3", x: 360, y: 250, color: "#818cf8" },
  { name: "Python", x: 700, y: 255, color: "#facc15" },
  { name: "Java", x: 200, y: 150, color: "#a3a3f7" },
  { name: "C++", x: 480, y: 340, color: "#818cf8" },
  { name: "MongoDB", x: 210, y: 265, color: "#4ade80" },
  { name: "MySQL", x: 805, y: 210, color: "#60a5fa" },
  { name: "Flutter", x: 610, y: 335, color: "#818cf8" },
  { name: "Git", x: 340, y: 340, color: "#f59e42" },
  { name: "Android Studio", x: 115, y: 310, color: "#818cf8" },
  { name: "Firebase", x: 910, y: 260, color: "#fdba74" },
];

// Edges
const edges = [
  [0, 1], [1, 2], [1, 3], [2, 10], [2, 14], [3, 5], [3, 8], [4, 5],
  [4, 7], [5, 8], [6, 10], [6, 11], [6, 14], [7, 9], [8, 11], [8, 12],
  [9, 13], [10, 14], [12, 13], [12, 8], [9, 5], [8, 6], [3, 1], [11, 6],
  [1, 10], [10, 14], [2, 6], [6, 11], [2, 11], [8, 6], // extra glue edges
  [10, 1], // MySQL --> JavaScript
  [14, 12] // Firebase --> Git
];

const SKILL_LEVELS = {
  "React.js": 90,
  "JavaScript": 92,
  "Node.js": 85,
  "Tailwind CSS": 84,
  "HTML5": 95,
  "CSS3": 90,
  "Python": 88,
  "Java": 80,
  "C++": 77,
  "MongoDB": 78,
  "MySQL": 80,
  "Flutter": 65,
  "Git": 85,
  "Android Studio": 70,
  "Firebase": 65,
};

const svgWidth = 1020;
const svgHeight = 430;
const nodeEnter = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.07 + 0.24, duration: 0.6, type: "spring", stiffness: 100 },
  }),
};

function randomParticles(n) {
  return Array.from({ length: n }, () => ({
    x: Math.random() * svgWidth,
    y: Math.random() * svgHeight,
    o: 0.07 + Math.random() * 0.13,
    r: 2 + Math.random() * 2.5,
  }));
}

function SkillsNeuralWideConnected() {
  const [hovered, setHovered] = useState(null);
  const particles = useRef(randomParticles(50));

  return (
    <section
      id="skills"
      className="bg-transparent py-24 min-h-[96vh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -16, x: -18 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.13, ease: "easeOut" }}
        className="absolute top-10 left-8 md:top-14 md:left-20 z-20 text-3xl md:text-4xl font-extrabold text-purple-400 tracking-wide drop-shadow"
      >
        My Skills
      </motion.h2>
      <div className="mx-auto mt-28 md:mt-20 relative w-[1020px] h-[430px] max-w-full">
        <svg width={svgWidth} height={svgHeight} className="absolute left-0 top-0 w-full h-full pointer-events-none">
          {edges.map(([from, to], idx) => {
            const n1 = skills[from], n2 = skills[to];
            if (!n1 || !n2) return null;
            return (
              <motion.line
                key={idx}
                x1={n1.x + 40} y1={n1.y + 30}
                x2={n2.x + 40} y2={n2.y + 30}
                stroke="#a855f7"
                strokeWidth={2.2}
                strokeDasharray="4 5"
                strokeOpacity={0.19}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.96, delay: idx * 0.04 + 0.11, ease: "easeOut" }}
                style={{ filter: "blur(0.3px)" }}
              />
            );
          })}
          {particles.current.map((p, idx) => (
            <circle
              key={`pt${idx}`}
              cx={p.x} cy={p.y} r={p.r}
              fill="#a855f7"
              opacity={p.o}
            />
          ))}
        </svg>
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={nodeEnter}
            style={{
              position: "absolute",
              left: skill.x,
              top: skill.y,
              zIndex: 20,
              width: 80, height: 54,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              userSelect: "none",
            }}
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative flex items-center justify-center transition-all duration-200">
              {skill.color && (
                <span
                  className="absolute w-[74px] h-[48px] rounded-2xl"
                  style={{
                    background: skill.color,
                    opacity: 0, // Full transparency
                  }}
                />
              )}
              <span
                style={{
                  background: skill.color || "#312e81",
                  color: "#fff",
                  border: skill.color ? `2px solid ${skill.color}` : "2px solid #a855f7",
                }}
                className="z-10 relative text-base font-semibold px-6 py-2 rounded-2xl shadow-[0_0_18px_2px rgba(168,85,247,0.19)] bg-gradient-to-r from-[#333398] to-[#201948] border-opacity-90 transition-all"
              >
                {skill.name}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={hovered === skill.name ? { opacity: 1, width: 80 } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="h-2 rounded-full mt-2 w-20 bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_12px_2px rgba(168,85,247,0.15)] relative"
            >
              {hovered === skill.name && (
                <span
                  className="absolute right-[-47px] top-[-7px] text-xs font-bold text-purple-200 bg-transparent px-2 py-0.5 rounded-lg shadow"
                >
                  {SKILL_LEVELS[skill.name]}%
                </span>
              )}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={hovered === skill.name ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="origin-left absolute left-0 top-0 h-2 rounded-full"
                style={{
                  width: `${SKILL_LEVELS[skill.name] * 0.8}px`,
                  background: `linear-gradient(90deg, #38bdf8 20%, ${skill.color || "#a855f7"} 100%)`,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 85 }}
        whileInView={{ opacity: 0, scale: 1.12, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.22, ease: "easeOut" }}
        className="absolute right-[-7vw] bottom-[-8vh] w-96 h-64 bg-transparent opacity-0" // Ensure this is fully transparent
      ></motion.div>
    </section>
  );
}

export default SkillsNeuralWideConnected;