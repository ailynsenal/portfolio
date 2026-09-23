import ExperienceCard from "../components/ExperienceCard";
import FadeIn from "../components/FadeIn";
import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../constants/experience";

const Experience = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="flex flex-col">
        {experience.map((entry, index) => (
          <FadeIn key={entry.id}>
            <TimelineItem
              isLast={index === experience.length - 1}
              variant={entry.type}
            >
              {entry.type === "note" ? (
                <p className="flex w-full items-center text-sm italic text-tertiary">
                  {entry.note}
                </p>
              ) : (
                <ExperienceCard job={entry} />
              )}
            </TimelineItem>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
