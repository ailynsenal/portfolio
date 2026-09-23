import FadeIn from "../components/FadeIn";
import Section from "../components/Section";
import { education } from "../constants/education";

const About = () => {
  return (
    <Section id="about" title="About me">
      <FadeIn className="flex flex-col font-roboto text-lg gap-6">
        <p>
          I'm a <span className="text-primary">Front-End Developer</span> with
          10 years of experience building responsive, user-centric web and
          mobile applications using React, React Native, and TypeScript. I'm
          currently building customer-facing banking features in Singapore
          within a micro-frontend architecture.
        </p>
        <p>
          Earlier in my career, I built interactive learning games for adult
          English learners, reusable UI component libraries, and CI/CD
          pipelines. I've worked across diverse industries — banking, EdTech,
          and e-commerce — and collaborate closely with product owners, solution
          architects, and cross-functional teams in agile projects.
        </p>
      </FadeIn>
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl">Education</h2>
        <FadeIn>
          {education.map((edu) => (
            <article
              key={edu.id}
              className="flex flex-row items-center gap-6 font-roboto text-lg"
            >
              <img
                loading="lazy"
                src={edu.logo}
                alt={edu.school}
                className="rounded-full w-28"
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-primary">{edu.course}</h3>
                <div>
                  <p>{edu.school}</p>
                  <p>{edu.duration}</p>
                </div>
              </div>
            </article>
          ))}
        </FadeIn>
      </div>
    </Section>
  );
};

export default About;
