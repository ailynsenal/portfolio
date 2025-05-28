import { motion } from "motion/react";
import type { SectionRef } from "../types";
import Email from "../assets/svgs/Email";
import Github from "../assets/svgs/Github";
import LinkedIn from "../assets/svgs/LinkedIn";

interface Props {
  ref: SectionRef;
}

const Contact = ({ ref }: Props) => {
  return (
    <section id="contact" className="flex flex-col gap-12 py-24" ref={ref}>
      <h1 className="text-4xl">
        Contact
        <span className="text-primary text-sm"> ♡</span>
      </h1>
      <motion.div
        className="relative flex flex-col gap-12"
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
        <h2>HOW TO REACH ME</h2>
        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-3 pr-12">
            <p>Send me an email:</p>
            <div className="flex gap-3">
              <Email fill="#ff637e" />
              <p>ailyn.angeles@yahoo.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pr-12">
            <p>Github:</p>
            <a className="flex gap-3" href="https://github.com/ailynsenal">
              <Github stroke="#ff637e" />
              /ailynsenal
            </a>
          </div>
          <div className="flex flex-col gap-3 pr-12">
            <p>LinkedIn:</p>
            <a className="flex gap-3" href="www.linkedin.com/in/ailynangeles">
              <LinkedIn stroke="#ff637e" />
              /in/ailynangeles
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
