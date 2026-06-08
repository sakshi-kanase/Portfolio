import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import FadeIn from "../../components/animations/FadeIn";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaChartBar,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRender,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { BsFileEarmarkExcelFill } from "react-icons/bs";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "EJS", icon: FaJs },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
    ],
  },

  {
    title: " Developer Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Render", icon: SiRender },
      { name: "VS Code", icon: VscVscode },
    ],
  },
  {
    title: "Data Analysis",
    skills: [
      {
        name: "MS Excel",
        icon: BsFileEarmarkExcelFill,
      },
      {
        name: "Power Query",
        icon: BsFileEarmarkExcelFill,
      },
      {
        name: "Power BI",
        icon: FaChartBar,
      },
      {
        name: "Data Cleaning",
        icon: FaChartBar,
      },
      {
        name: "Dashboard Creation",
        icon: FaChartBar,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-24
        md:py-32
      "
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
              Technologies I Work With
            </p>

            <h2
  className="
    text-5xl
    md:text-7xl
    font-black
    bg-gradient-to-r
    from-white
    via-violet-300
    to-violet-500
    bg-clip-text
    text-transparent
  "
>
              Skills
            </h2>

          </div>
        </FadeIn>

        {/* Categories */}

        <div className="space-y-14">

          {skillCategories.map((category, index) => (
            <FadeIn
              key={category.title}
              delay={index * 0.15}
            >
              <div>

                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    mb-6
                    text-violet-400
                  "
                >
                  {category.title}
                </h3>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-4
                  "
                >

                  {category.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          y: -6,
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          px-5
                          py-3
                          rounded-2xl
                        bg-white/[0.03]
                          backdrop-blur-xl
                          border
                        border-white/10
                        hover:border-violet-500/40
                        hover:bg-violet-500/5
                          transition-all
                          duration-300
                          shadow-lg
                          "
                      >
                        <Icon
                          className="
                            text-violet-400
                            text-xl
                          "
                        />

                        <span
                          className="
                            text-gray-300
                            font-medium
                          "
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}

                </div>

              </div>
            </FadeIn>
          ))}

        </div>

        

      </Container>
    </section>
  );
}