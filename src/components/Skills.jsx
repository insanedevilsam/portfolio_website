// src/components/Skills.jsx
function Skills() {
  const skills = [
    "JavaScript", "React", "Node.js", "Tailwind CSS", "HTML5", "CSS3", "Git"
  ];
  return (
    <section className="py-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-gray-800 text-blue-300 px-4 py-2 rounded shadow">{skill}</span>
        ))}
      </div>
    </section>
  );
}
export default Skills;