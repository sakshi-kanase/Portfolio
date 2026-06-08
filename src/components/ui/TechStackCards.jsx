import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: <FaReact size={28} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={28} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={28} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={28} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={28} />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={28} />,
  },
];

export default function TechStackCards() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {techStack.map((item, index) => (
        <motion.div
          key={item.name}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-6
            flex
            flex-col
            items-center
            justify-center
            gap-3
            shadow-xl
            hover:border-violet-500/50
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >
          <div className="text-violet-400">
            {item.icon}
          </div>

          <span className="font-medium text-center">
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}