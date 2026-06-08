export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Sakshi Kanase
            </h2>

            <p className="text-gray-400 max-w-sm leading-relaxed">
              Full Stack Developer focused on building fast, scalable, and elegant web experiences.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-2">
              <p className="text-white font-medium">Navigation</p>
              <a href="#about" className="block text-gray-400 hover:text-violet-400 transition">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-violet-400 transition">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-violet-400 transition">Projects</a>
            </div>

            <div className="space-y-2">
              <p className="text-white font-medium">Contact</p>
              <a href="#contact" className="block text-gray-400 hover:text-violet-400 transition">Get in touch</a>
              <p className="text-gray-400">Pune, India</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sakshi Kanase. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with React + Tailwind ⚡
          </p>

        </div>

      </div>
    </footer>
  );
}