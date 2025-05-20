function Navbar() {
  return (
    <nav className="bg-[#18122B] px-8 py-5 flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 z-50 border-b-2 border-purple-800/60">
      <div className="text-2xl md:text-3xl font-extrabold text-purple-400 tracking-wider select-none">
        Sameer Pandey
      </div>
      <div className="space-x-6 hidden md:flex">
        <a href="#hero" className="text-gray-200 hover:text-purple-400 text-lg font-medium transition">Home</a>
        <a href="#about" className="text-gray-200 hover:text-purple-400 text-lg font-medium transition">About</a>
        <a href="#skills" className="text-gray-200 hover:text-purple-400 text-lg font-medium transition">Skills</a>
        <a href="#projects" className="text-gray-200 hover:text-purple-400 text-lg font-medium transition">Projects</a>
        <a href="#contact" className="text-gray-200 hover:text-purple-400 text-lg font-medium transition">Contact</a>
      </div>
      {/* Responsive menu placeholder for mobile (optional) */}
      {/* <div className="md:hidden">
        // Add hamburger menu for mobile here if desired
      </div> */}
    </nav>
  );
}
export default Navbar;