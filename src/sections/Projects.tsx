import { motion } from "motion/react";
import Project from "../components/Project";
import { projects } from "../data/project";

import type { SectionRef } from "../types";

interface Props {
  ref: SectionRef;
}

const Projects = ({ ref }: Props) => {
  return (
    <section id="experience" className="flex flex-col gap-12 py-24" ref={ref}>
      <h1 className="text-4xl">Projects</h1>
      <motion.div
        className="relative flex flex-col gap-12 sm:flex-row"
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
        {projects.map((project, index) => (
          <Project key={index} item={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
