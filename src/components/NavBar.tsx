import type { SectionKey } from "../types";
import Menu from "./Menu";

type Props = {
  activeItem: string;
  title: string;
  onClickItem: (item: SectionKey) => void;
};

const NavBar = ({ activeItem, title, onClickItem }: Props) => {
  const menuItems = [
    { id: "home", name: "HOME", link: "#home" },
    { id: "about", name: "ABOUT", link: "#about" },
    { id: "skills", name: "SKILLS", link: "#skills" },
    { id: "experience", name: "EXPERIENCE", link: "#experience" },
    { id: "projects", name: "PROJECTS", link: "#projects" },
  ];

  return (
    <nav className="sticky top-0 w-full p-4 z-10 bg-neutral-900">
      <div className="flex flex-col items-center justify-center mx-auto w-full sm:flex-row sm:w-[80vw]">
        <a href="/" className="font-leckerlie-one text-primary mb-4 sm:mb-0">
          {title}
          <span className="text-white text-xs"> ♡</span>
        </a>

        <Menu
          active={activeItem}
          menuItems={menuItems}
          onItemClick={onClickItem}
        />
      </div>
    </nav>
  );
};

export default NavBar;
