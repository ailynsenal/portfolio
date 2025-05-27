import Skill from "../components/Skill";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col gap-12 py-12">
      <h1 className="text-4xl">
        Skills
        <span className="text-primary text-sm"> ❤</span>
      </h1>
      <div className="flex flex-row flex-wrap gap-6">
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
