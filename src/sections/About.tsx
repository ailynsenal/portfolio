import { education } from "../data/education";

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-12 py-12">
      <article className="flex flex-col gap-12">
        <h1 className="text-4xl">
          About me
          <span className="text-primary text-sm"> ❤</span>
        </h1>
        <div className="flex flex-col font-roboto text-lg gap-6">
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
        </div>
      </article>
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl">
          Education
          <span className="text-primary text-sm"> ❤</span>
        </h1>
        {education.map((edu, index) => (
          <article
            key={index}
            className="flex flex-row items-center gap-6 font-roboto text-lg"
          >
            <img
              src={edu.logo}
              alt={edu.school}
              className="rounded-full w-28"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-primary">{edu.course}</h1>
              <div>
                <p>{edu.duration}</p>
                <p>{edu.school}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
