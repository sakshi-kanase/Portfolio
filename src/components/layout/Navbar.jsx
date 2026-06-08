import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profilePhoto from "../../assets/profile.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        z-[9999]
        w-[95%]
        max-w-7xl
      "
    >
      <div
        className="
          backdrop-blur-xl
          bg-white/[0.04]
          border
          border-white/10
          rounded-2xl
          px-6
          py-4
          shadow-lg
        "
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3"
          >
            <img
              src={profilePhoto}
              alt="Sakshi"
              className="
                w-10
                h-10
                rounded-full
                object-cover
                border
                border-violet-500/40
              "
            />

            <span
              className="
                hidden
                sm:block
                font-semibold
                text-white
              "
            >
              Sakshi Kanase
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="
                  text-gray-300
                  text-sm
                  uppercase
                  tracking-wider
                  font-medium
                  hover:text-violet-400
                  transition-all
                  duration-300
                "
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              text-white
              text-2xl
            "
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${isOpen ? "max-h-96 mt-6" : "max-h-0"}
          `}
        >
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">

            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="
                  text-gray-300
                  uppercase
                  tracking-wider
                  text-sm
                  hover:text-violet-400
                  transition-all
                "
              >
                {link}
              </a>
            ))}

          </div>
        </div>

      </div>
    </nav>
  );
}