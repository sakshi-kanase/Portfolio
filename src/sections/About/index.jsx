import Container from "../../components/layout/Container";
import SectionHeading from "../../components/layout/SectionHeading";
import FadeIn from "../../components/animations/FadeIn";

const stats =[
  {
    number: "2+",
    label:"Internships"
  },
  {
    number: "2026",
    label:"Graduate"
  },
  {
    number: "MERN",
    label: "Stack"
  }
]


export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
    >
      <Container>
    <FadeIn>
      <div className="text-center mb-16">
        <p
          className ="
            text-violet-400
            uppercase
            tracking-[0.3em]
            text-sm
            mb-4"
        >
          Get to know me 
        </p>
        <h2 className="text-4xl md:text-6xl font-black">
          About Me
        </h2>
      </div>
    </FadeIn>
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <FadeIn x={-30}>
        <div>
          <p className="
                  text-lg
                  md:text-xl
                  leading-relaxed
                  text-gray-400"
          >
                I am a passionate Full Stack Developer
                completing my Bachelor of Computer Applications in 2026.

                <br />
                <br />

                I enjoy building scalable web applications,
                learning modern technologies and solving
                real-world problems through software.

                <br />
                <br />

                My primary stack includes React, Node.js,
                Express.js, MongoDB and Tailwind CSS.

                <br />
                <br />

                Through internships and personal projects,
                I have gained practical experience in
                developing responsive and user-friendly
                applications while following industry
                best practices.

                <br />
                <br />

                I am actively seeking Full Stack Developer
                opportunities where I can contribute,
                learn and grow as a software engineer.
          </p>        
        </div>
      </FadeIn>
      <FadeIn x={30}>
            <div className="grid gap-6">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
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
                  <h3
                    className="
                      text-4xl
                      md:text-5xl
                      font-black
                      text-violet-400
                    "
                  >
                    {item.number}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-gray-300
                      uppercase
                      tracking-widest
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
    </div>
      </Container>
    </section>
  );
}