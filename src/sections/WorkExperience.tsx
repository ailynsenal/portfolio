import Work from "../components/Work";
import { works } from "../data/works";

const WorkExperience = () => {
  return (
    <section id="experience" className="flex flex-col gap-12 py-12">
      <h1 className="text-4xl">
        Work Experience
        <span className="text-primary text-sm"> ❤</span>
      </h1>
      <div className="relative flex flex-col gap-12">
        {works.map((work, index) => (
          <>
            <Work work={work} index={index} />
          </>
        ))}
        <div className="absolute left-0 h-full z-10 border-r-2 border-dashed border-white hidden sm:left-1/2 sm:block"></div>
      </div>
    </section>
  );
};

export default WorkExperience;
