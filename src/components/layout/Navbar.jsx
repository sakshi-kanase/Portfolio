import { FaArrowRight } from "react-icons/fa";
import profilePhoto from "../../assets/profile.png";

export default function Navbar() {
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
        <div className="flex items-center justify-between">

          {/* Logo */}

          <a
  href="#hero"
  className="
    flex
    items-center
    gap-3
  "
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
          {/* Nav Links */}

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

          

        </div>
      </div>
    </nav>
  );
}