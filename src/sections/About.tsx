import { motion } from "motion/react";
import { education } from "../data/education";
import type { SectionRef } from "../types";

interface Props {
  ref: SectionRef;
}

const About = ({ ref }: Props) => {
  return (
    <section id="about" className="flex flex-col gap-12 py-24" ref={ref}>
      <article className="flex flex-col gap-12">
        <h1 className="text-4xl">About me</h1>
        <motion.div
          className="flex flex-col font-roboto text-lg gap-6"
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
          <p>
            I'm a <span className="text-primary">Front-End Developer</span> with
            over 8 years of experience building responsive, scalable web and
            mobile applications. I specialize in modern technologies like React,
            React Native, and TypeScript. I've worked across diverse industries
            and collaborated closely with cross-functional teams to build
            multi-tenant e-commerce platforms, network apps, educational games,
            and UI libraries aligned with design systems.
          </p>
          <p>
            In my previous company, I had the opportunity to work on backend
            related tasks, which sparked my interest in full-stack development.
          </p>
        </motion.div>
      </article>
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl">Education</h1>
        <motion.div
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
          {education.map((edu, index) => (
            <article
              key={index}
              className="flex flex-row items-center gap-6 font-roboto text-lg"
            >
              <img
                loading="lazy"
                src={edu.logo}
                alt={edu.school}
                className="rounded-full w-28"
              />
              <div className="flex flex-col gap-3">
                <h1 className="text-primary">{edu.course}</h1>
                <div>
                  <p>{edu.school}</p>
                  <p>{edu.duration}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
