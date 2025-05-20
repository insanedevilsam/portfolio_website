// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="w-full bg-[#1b1f23] text-gray-400 py-6">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <small className="block text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">Sameer Pandey</span>. All rights reserved.
        </small>

        {/* Optional social links — uncomment if you want to use */}
        {/*
        <div className="mt-2 space-x-4">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
        */}
      </div>
    </footer>
  );
}

export default Footer;
