import { motion } from "motion/react";
import Skill from "../components/Skill";
import { skills } from "../data/skills";
import type { SectionRef } from "../types";

interface Props {
  ref: SectionRef;
}

const Skills = ({ ref }: Props) => {
  return (
    <section id="skills" className="flex flex-col gap-12 py-24" ref={ref}>
      <h1 className="text-4xl">
        Skills
        <span className="text-primary text-sm"> ♡</span>
      </h1>
      <motion.div
        className="flex flex-row flex-wrap gap-6"
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeIn",
          },
        }}
        viewport={{ once: true, amount: 0 }}
      >
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} label={skill.label} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
