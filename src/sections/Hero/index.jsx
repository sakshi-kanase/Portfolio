import Navbar from "../../components/layout/Navbar";
import Container from "../../components/layout/Container";
import FadeIn from "../../components/animations/FadeIn";
import TechStackCards from "../../components/ui/TechStackCards";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-20
          right-0
          w-[500px]
          h-[500px]
          bg-violet-600/20
          blur-[180px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[400px]
          h-[400px]
          bg-blue-500/10
          blur-[150px]
          rounded-full
          pointer-events-none
        "
      />

      <Container>

        <FadeIn y={-20}>
          <Navbar />
        </FadeIn>

        <div
          className="
            min-h-[85vh]
            grid
            lg:grid-cols-[1.2fr_0.8fr]
            gap-16
            items-center
          "
        >

          {/* LEFT CONTENT */}

          <div>

            <FadeIn delay={0.2}>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-green-500/10
                  border
                  border-green-500/30
                  text-green-400
                  text-sm
                  mb-6
                "
              >
                 <span className="w-2 h-3 bg-green-400 rounded-full animate-pulse" />
                    Available For Full Stack Developer Roles
              </span>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-violet-400
                  text-sm
                  mb-4
                "
              >
                Full STACK DEVELOPER
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1
                className="
                  text-5xl
                  md:text-7xl
                  lg:text-8xl
                  font-black
                  leading-none
                "
              >
                Hi, I'm
                <span className="block text-violet-500">
                  SAKSHI
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-gray-400
                "
              >
                BCA Graduate from Pune passionate about
                building modern web applications using
                React, Node.js, Express.js and MongoDB.
                Focused on creating scalable solutions,
                intuitive user experiences and solving
                real-world problems through technology.
              </p>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href="#projects"
                  className="
                    px-8
                    py-4
                    bg-violet-600
                    rounded-xl
                    font-medium
                    hover:bg-violet-700
                    transition-all
                  "
                >
                  View Projects
                </a>

                <a
                  href="/Sakshi_Kanase_Resume.pdf"
                  className="
                    px-8
                    py-4
                    border
                    border-violet-500
                    rounded-xl
                    font-medium
                    hover:bg-violet-500
                    transition-all
                  "
                >
                  Download Resume
                </a>

              </div>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div
                className="
                  flex
                  gap-6
                  mt-10
                  text-2xl
                "
              >

                <a
                  href="https://github.com/sakshi-kanase"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-400"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/sakshi-kanase/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-400"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:kanasesakshi55@gmail.com"
                  className="hover:text-violet-400"
                >
                  <FaEnvelope />
                </a>

              </div>
            </FadeIn>

          </div>

          {/* RIGHT CONTENT */}

          <FadeIn delay={0.6}>
            <TechStackCards />
          </FadeIn>

        </div>

      </Container>
    </section>
  );
}