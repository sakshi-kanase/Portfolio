import Container from "../../components/layout/Container";
import FadeIn from "../../components/animations/FadeIn";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
    >
      <Container>

        <div
          className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-[32px]
            p-8
            md:p-16
          "
        >

          {/* Heading */}

          <FadeIn>
            <div className="text-center">

              <p
                className="
                  text-violet-400
                  uppercase
                  tracking-[0.3em]
                  text-sm
                  mb-4
                "
              >
                Contact
              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                "
              >
                Let's Build Something Together
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  mx-auto
                  text-gray-400
                  leading-relaxed
                "
              >
                I'm actively looking for Full Stack Developer
                opportunities and exciting projects where I can
                contribute, learn and grow as a software developer.
              </p>

            </div>
          </FadeIn>

          {/* Contact Cards */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-6
              mt-16
            "
          >

            {/* Email */}

            <FadeIn delay={0.1}>
              <a
                href="mailto:kanasesakshi55@gmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  p-6
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  hover:border-violet-500/40
                  transition-all
                "
              >
                <FaEnvelope
                  size={28}
                  className="text-violet-400"
                />

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="text-gray-400 text-sm">
                    Contact Me
                  </p>
                </div>
              </a>
            </FadeIn>

            {/* LinkedIn */}

            <FadeIn delay={0.2}>
              <a
                href="https://www.linkedin.com/in/sakshi-kanase/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  p-6
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  hover:border-violet-500/40
                  transition-all
                "
              >
                <FaLinkedin
                  size={28}
                  className="text-violet-400"
                />

                <div>
                  <p className="font-semibold">
                    LinkedIn
                  </p>

                  <p className="text-gray-400 text-sm">
                    Connect With Me
                  </p>
                </div>
              </a>
            </FadeIn>

            {/* GitHub */}

            <FadeIn delay={0.3}>
              <a
                href="https://github.com/sakshi-kanase"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  p-6
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  hover:border-violet-500/40
                  transition-all
                "
              >
                <FaGithub
                  size={28}
                  className="text-violet-400"
                />

                <div>
                  <p className="font-semibold">
                    GitHub
                  </p>

                  <p className="text-gray-400 text-sm">
                    View Projects
                  </p>
                </div>
              </a>
            </FadeIn>

            {/* Resume */}

            <FadeIn delay={0.4}>
              <a
                href="/Sakshi_Kanase_Resume.pdf"
                download
                className="
                  flex
                  items-center
                  gap-4
                  p-6
                  rounded-2xl
                  bg-violet-600
                  hover:bg-violet-700
                  transition-all
                "
              >
                <FaFileDownload size={28} />

                <div>
                  <p className="font-semibold">
                    Resume
                  </p>

                  <p className="text-sm opacity-80">
                    Download CV
                  </p>
                </div>
              </a>
            </FadeIn>

          </div>

          {/* Bottom CTA */}

          <FadeIn delay={0.5}>
            <div
              className="
                text-center
                mt-16
              "
            >

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                "
              >
                Available For Full Stack Developer Roles 🚀
              </h3>

              {/* <p
                className="
                  mt-4
                  text-gray-400
                "
              >
                Pune, Maharashtra • 2026 Graduate
              </p> */}

            </div>
          </FadeIn>

        </div>

      </Container>
    </section>
  );
}