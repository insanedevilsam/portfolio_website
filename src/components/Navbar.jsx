function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold">YourName</div>
      <div className="space-x-6">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;