import FadeIn from "../components/FadeIn";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { projects } from "../constants/projects";

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <FadeIn className="grid gap-12 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </FadeIn>
    </Section>
  );
};

export default Projects;
