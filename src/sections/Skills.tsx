import FadeIn from "../components/FadeIn";
import Section from "../components/Section";
import SkillBadge from "../components/SkillBadge";
import { skillGroups } from "../constants/skills";

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <FadeIn key={group.title} className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-tertiary">
              {group.title}
            </h3>
            <div className="flex flex-row flex-wrap gap-3">
              {group.items.map((skill) => (
                <SkillBadge key={skill.label} skill={skill} />
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
