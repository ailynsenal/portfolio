import { motion } from "motion/react";
import Work from "../components/Work";
import { works } from "../data/works";
import type { SectionRef } from "../types";

interface Props {
  ref: SectionRef;
}

const WorkExperience = ({ ref }: Props) => {
  return (
    <section id="experience" className="flex flex-col gap-12 py-24" ref={ref}>
      <h1 className="text-4xl">Work Experience</h1>
      <div className="relative flex flex-col gap-12">
        {works.map((work, index) => (
          <motion.div
            key={index}
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
            <Work work={work} index={index} />
          </motion.div>
        ))}
        <div className="absolute left-0 h-full z-10 border-r-2 border border-white hidden sm:left-1/2 sm:block"></div>
      </div>
    </section>
  );
};

export default WorkExperience;
