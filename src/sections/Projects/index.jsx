import Container from "../../components/layout/Container";
import FadeIn from "../../components/animations/FadeIn";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Wanderlust",
    featured: true,
    description:
      "A full-stack travel and property listing platform built using Node.js, Express.js, MongoDB and EJS. Users can create, edit and manage listings with authentication, image uploads, reviews and ratings.",

    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "MVC",
    ],

    features: [
      "Property Listings CRUD",
      "Role-Based Authorization",
      "Reviews & Ratings",
      "Image Upload Integration",
      "MongoDB Atlas",
      "Render Deployment",
    ],

    github: "https://github.com/sakshi-kanase/WanderLust",
    live: "https://wanderlust-ma3y.onrender.com",
  },

  {
    title: "Humanhood – The Golden Roots",
    featured: false,

    description:
      "A community-driven platform connecting volunteers, senior citizens and donors. Focused on collaboration, accessibility and meaningful social impact.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
    ],

    features: [
      "Volunteer Management",
      "Authentication System",
      "User Dashboards",
      "Responsive Design",
      "Cloud Database",
    ],

    github: "https://github.com/sakshi-kanase/Humanhood",
    live: "https://humanhood.onrender.com",
  },

  {
    title: "Breakout Game",

    featured: false,

    description:
      "Classic arcade-style brick breaker game developed with HTML5 Canvas and JavaScript. Features multi-level gameplay, collision physics, scoring system, lives tracking, and interactive game states.",

    tech: [
      "HTML5",
      "JavaScript",
      "CSS3",
      "Canvas API",
    ],

    features: [
      "Classic brick-breaker gameplay",
      "Paddle-controlled ball physics",
      "Lives and scoring system",
      "Pause/Resume functionality",
      "Win and Game Over screens",
      "Browser-based responsive design",
    ],

    github: "https://github.com/sakshi-kanase/BreakoutGame",
    live: "https://sakshi-kanase.github.io/BreakoutGame/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32"
    >
      <Container>

        {/* Heading */}

        <FadeIn>
          <div className="text-center mb-20">

            <p
              className="
                text-violet-400
                uppercase
                tracking-[0.3em]
                text-sm
                mb-4
              "
            >
              My Work
            </p>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
              "
            >
              Projects
            </h2>

          </div>
        </FadeIn>

        {/* Cards */}

        <div className="space-y-10">

          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={index * 0.15}
            >
              <div
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  md:p-10
                  hover:border-violet-500/40
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
                "
              >

                {/* Featured Badge */}

                {project.featured && (
                  <div
                    className="
                      inline-block
                      mb-5
                      px-4
                      py-2
                      rounded-full
                      bg-violet-500/10
                      border
                      border-violet-500/30
                      text-violet-400
                      text-sm
                      font-medium
                    "
                  >
                    ⭐ Featured Project
                  </div>
                )}

                {/* Top */}

                <div
                  className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-6
                  "
                >

                  <div>

                    <h3
                      className="
                        text-3xl
                        md:text-4xl
                        font-bold
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-gray-400
                        leading-relaxed
                        max-w-3xl
                      "
                    >
                      {project.description}
                    </p>

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-xl
                        border
                        border-white/10
                        hover:border-violet-500
                        transition-all
                      "
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-xl
                        bg-violet-600
                        hover:bg-violet-700
                        transition-all
                      "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                  </div>

                </div>

                {/* Tech Stack */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    mt-8
                  "
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-violet-500/10
                        border
                        border-violet-500/20
                        text-violet-300
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}

                <div
                  className="
                    mt-8
                    grid
                    md:grid-cols-2
                    gap-4
                  "
                >
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3
                        text-gray-400
                      "
                    >
                      <span className="text-violet-400">
                        ●
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>

              </div>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}