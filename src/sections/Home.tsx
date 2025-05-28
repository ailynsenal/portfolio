import { motion } from "motion/react";
import Her from "../assets/images/her.jpg";
import CV from "../assets/files/AILYN_ANGELES_CV.pdf";
import { socials } from "../data/socials";
import type { SectionRef } from "../types";

interface Props {
  ref: SectionRef;
}

const Home = ({ ref }: Props) => {
  return (
    <section
      id="home"
      className=" flex items-center py-6 sm:min-h-screen"
      ref={ref}
    >
      <motion.div
        className="flex flex-col-reverse gap-6 sm:flex-row"
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
        <div className="flex flex-col gap-4 w-full sm:w-3/4">
          <h1 className="font-semibold text-xl w-fit py-2">
            Hey!👋 I'm <span className="text-primary">Ailyn Angeles</span>
          </h1>
          <p className="font-semibold text-3xl sm:text-5xl">
            Experienced <span className="text-primary">software engineer</span>{" "}
            with a focus on{" "}
            <span className="text-primary">front-end development</span>.
          </p>
          <p className="flex gap-2 font-semibold text-3xl animate-bounce my-4">
            <span className="text-primary">ctrl</span>
            <span>+</span>
            <span className="text-primary">{"<code>"}</span>
            <span>+</span>
            <span className="text-primary">create</span>
          </p>

          <div className="flex items-center gap-6">
            <a
              href={CV}
              download="AILYN_ANGELES_CV"
              className="border border-rose-500 w-fit rounded-md text-base py-2 px-3 hover:bg-rose-100/15 hover:text-secondary"
            >
              Download CV
            </a>
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                className="transition ease-in-out hover:scale-125"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="self-center-safe">
          <img
            src={Her}
            alt="Ailyn Angeles"
            className="rounded-full w-50 sm:w-72"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
