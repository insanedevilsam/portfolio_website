// src/components/Projects.jsx
function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A fully responsive portfolio website built with React and Tailwind CSS.",
      link: "https://github.com/yourgithub/portfolio"
    },
    // Add more project objects as needed
  ];
  return (
    <section className="py-10 px-4 max-w-4xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-700 rounded hover:shadow-lg hover:border-blue-400 transition"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
export default Projects;