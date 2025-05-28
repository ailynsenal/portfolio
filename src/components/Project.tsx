import Link from "../assets/svgs/Link";
import type { ProjectItem } from "../types";

type Props = {
  item: ProjectItem;
};

const Project = ({ item }: Props) => {
  const { title, description, logo, link } = item;

  return (
    <div className="flex flex-col gap-6 w-full sm:w-2/5">
      <img
        src={logo}
        alt={title}
        className="rounded-lg h-56 hover:scale-105 hover:border-rose-500"
      />
      <div className="">
        <a
          href={link}
          target="_blank"
          className="flex gap-1 items-center text-xl text-rose-400 mb-3"
        >
          {title}
          <span>
            <Link />
          </span>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
