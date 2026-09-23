import Link from "../assets/svgs/Link";
import type { ProjectItem } from "../types";

type Props = {
  project: ProjectItem;
};

const ProjectCard = ({ project }: Props) => {
  const { title, description, logo, link } = project;

  return (
    <div className="flex flex-col gap-6">
      <img
        loading="lazy"
        src={logo}
        alt={title}
        className="h-56 rounded-lg transition hover:scale-105"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-xl">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary"
          >
            {title}
            <span aria-hidden="true">
              <Link />
            </span>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
