// src/components/Hero.jsx

function Hero() {
  return (
    <section
      id="home"  // Add this for SPA smooth scrolling to Hero section
      className="flex flex-col md:flex-row justify-between items-center w-full min-h-[600px] py-16 px-6 bg-[#23272F]"
    >
      {/* ---- Left side: Text ---- */}
      <div className="flex-1 text-left">
        <p className="text-gray-400 uppercase tracking-wider text-sm mb-3">
          Welcome to my world
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
          Hi, I'm <span className="text-pink-500">Your Name</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-200">
          a <span className="text-white">Full Stack Developer.</span>
        </h2>
        <p className="text-gray-400 max-w-lg mb-6">
          I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
        </p>

        {/* ---- Social Links ---- */}
        <div className="flex gap-4 mb-8">
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <title>Twitter</title>
              <path d="M8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22 5.92a8.27 8.27 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.23 8.23 0 0 1-2.6 1A4.1 4.1 0 0 0 16.66 0c-2.47 0-4.48 2.01-4.48 4.49 0 .35.03.68.1 1A12.94 12.94 0 0 1 2.28 1.24a4.48 4.48 0 0 0 1.39 6A4.52 4.52 0 0 1 1 6.87v.06A4.48 4.48 0 0 0 4.46 11a4.43 4.43 0 0 1-2.03.08 4.5 4.5 0 0 0 4.19 3.12A9 9 0 0 1 0 19.54 12.75 12.75 0 0 0 6.92 21c8.28 0 12.8-6.86 12.8-12.8 0-.2 0-.39-.01-.59A9.35 9.35 0 0 0 24 4.59a9.03 9.03 0 0 1-2.6.71A4.54 4.54 0 0 0 23 3z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <title>LinkedIn</title>
              <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.48s1.34 2.98 2.98 2.98 2.98-1.35 2.98-2.98S6.62 3.5 4.98 3.5zM2.4 21.5H7.5V9H2.4v12.5zM9.5 9h4.67v1.71h.07c.65-1.23 2.24-2.54 4.62-2.54 4.94 0 5.85 3.25 5.85 7.47V21.5h-5.1v-6.07c0-1.45-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.22V21.5H9.5V9z"/>
            </svg>
          </a>
        </div>

        <a
          href="#projects"
          className="bg-white font-semibold text-gray-900 px-6 py-2 rounded-md shadow hover:bg-pink-500 hover:text-white transition"
        >
          Best Skill On
        </a>
      </div>

      {/* ---- Right side: Portrait Image ---- */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src="/assets/myphoto.jpg"  // Update this with your image path!
          alt="Your Name"
          className="w-64 h-64 object-cover rounded-xl shadow-lg border-4 border-pink-500"
        />
      </div>
    </section>
  );
}

export default Hero;