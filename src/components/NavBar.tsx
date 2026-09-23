import { navItems } from "../constants/navigation";
import type { SectionKey } from "../types";
import NavLink from "./NavLink";

type Props = {
  title: string;
  activeSection: SectionKey;
  onNavigate: (section: SectionKey) => void;
};

const NavBar = ({ title, activeSection, onNavigate }: Props) => {
  return (
    <nav className="sticky top-0 z-10 w-full bg-neutral-900 p-4">
      <div className="mx-auto flex w-full flex-col items-center justify-center sm:w-[80vw] sm:flex-row">
        <a
          href="/"
          className="mb-4 font-national-park font-bold text-primary sm:mb-0"
        >
          {title}
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-5 font-national-park text-base sm:ml-auto sm:justify-end">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              isActive={item.id === activeSection}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
