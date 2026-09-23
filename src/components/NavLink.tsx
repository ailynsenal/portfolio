import type { NavItem, SectionKey } from "../types";

type Props = {
  item: NavItem;
  isActive: boolean;
  onNavigate: (section: SectionKey) => void;
};

const NavLink = ({ item, isActive, onNavigate }: Props) => {
  return (
    <li
      className={`transition ease-in-out hover:text-secondary ${
        isActive ? "border-b-2 border-accent font-bold" : "font-semibold"
      }`}
    >
      <a
        href={`#${item.id}`}
        aria-current={isActive ? "true" : undefined}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(item.id);
        }}
      >
        {item.label}
      </a>
    </li>
  );
};

export default NavLink;
