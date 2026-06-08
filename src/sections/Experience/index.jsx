import Container from "../../components/layout/Container";
import FadeIn from "../../components/animations/FadeIn";

const experiences = [
  {
    year: "2025",
    role: "Full Stack Development Intern",
    company: "KaydaMitra Pvt. Ltd.",
    duration: "3 Months",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "Git",
    ],
    points: [
      "Developed a full-stack legal-tech platform using Node.js, Express.js, MongoDB, EJS, HTML, CSS and JavaScript.",
      "Implemented role-based authentication and authorization for Users, Lawyers and Admins.",
      "Designed responsive frontend modules including Home, About, Contact, Authentication and Dashboards.",
      "Built scalable backend architecture following MVC principles and integrated MongoDB Atlas.",
    ],
  },

  {
    year: "2025",
    role: "Data Analysis Intern",
    company: "Lighthouse Communities Foundation",
    duration: "3 Months",
    tech: [
      "Power BI",
      "Excel",
      "Power Query",
    ],
    points: [
      "Cleaned and validated datasets to improve data quality and usability.",
      "Transformed raw data using Power Query for efficient reporting workflows.",
      "Designed Power BI and Excel dashboards for actionable insights.",
      "Collaborated with teams to support data-driven decision making.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
              Professional Journey
            </p>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
              "
            >
              Experience
            </h2>

          </div>
        </FadeIn>

        {/* Timeline */}

        <div className="relative max-w-5xl mx-auto">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-4
              md:left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-violet-500/40
            "
          />

          {experiences.map((exp, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
            >
              <div
                className="
                  relative
                  pl-14
                  md:pl-0
                  mb-16
                "
              >

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-1
                    md:left-1/2
                    md:-translate-x-1/2
                    top-5
                    w-6
                    h-6
                    rounded-full
                    bg-violet-500
                    border-4
                    border-[#0C0C0C]
                  "
                />

                {/* Card */}

                <div
                  className="
                    md:w-[48%]
                    md:ml-auto
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    rounded-3xl
                    p-8
                    hover:border-violet-500/40
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      text-violet-400
                      text-sm
                      uppercase
                      tracking-widest
                    "
                  >
                    {exp.year}
                  </span>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      mt-2
                    "
                  >
                    {exp.role}
                  </h3>

                  <p
                    className="
                      text-gray-300
                      mt-1
                    "
                  >
                    {exp.company}
                  </p>

                  <p
                    className="
                      text-gray-500
                      text-sm
                      mt-1
                    "
                  >
                    {exp.duration}
                  </p>

                  {/* Tech Stack */}

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                      mt-5
                    "
                  >
                    {exp.tech.map((item) => (
                      <span
                        key={item}
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-violet-500/10
                          border
                          border-violet-500/20
                          text-violet-300
                          text-sm
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Responsibilities */}

                  <ul
                    className="
                      mt-6
                      space-y-3
                      text-gray-400
                    "
                  >
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3"
                      >
                        <span className="text-violet-400">
                          •
                        </span>

                        <span>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}