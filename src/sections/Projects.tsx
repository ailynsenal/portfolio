import Project from "../components/Project";
import { projects } from "../data/project";

const Projects = () => {
  return (
    <section id="experience" className="flex flex-col gap-12 py-12">
      <h1 className="text-4xl">
        Projects
        <span className="text-primary text-sm"> ❤</span>
      </h1>
      <div className="relative flex flex-col gap-12">
        {projects.map((project) => (
          <Project item={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
