import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5, color: "#e44d26" },
  { skill: "CSS", icon: FaCss3Alt, color: "#264de4" },
  { skill: "JavaScript", icon: IoLogoJavascript, color: "#f0db4f" },
  { skill: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { skill: "ReactJS", icon: FaReact, color: "#61dbfb" },
  { skill: "Redux", icon: SiRedux, color: "#764abc" },
  { skill: "NextJS", icon: SiNextdotjs, color: "#000000" },
  { skill: "TailwindCSS", icon: RiTailwindCssFill, color: "#38bdf8" },
];

const AllSkills = () => {
  return (
    <div className="flex flex-nowrap gap-6 justify-center items-center overflow-x-auto px-4 w-full max-w-[100%] mx-auto">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <SingleSkill
            text={item.skill}
            imgSvg={
              <item.icon style={{ color: item.color, fontSize: "1.5rem" }} />
            }
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
