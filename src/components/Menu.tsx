import type { MenuItem, SectionKey } from "../types";

type Props = {
  active: string;
  menuItems: MenuItem[];
  onItemClick: (id: SectionKey) => void;
};

const Menu = ({ active, menuItems, onItemClick }: Props) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-5 font-national-park text-base sm:ml-auto sm:justify-end">
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={`transition ease-in-out hover:text-rose-300 hover:scale-110 ${
            active === item.id
              ? "font-bold border-b-2 border-rose-500"
              : "font-semibold"
          }`}
        >
          <a
            href={item.link}
            aria-current={active === item.id ? "true" : undefined}
            onClick={(e) => {
              e.preventDefault();
              onItemClick(item.id as SectionKey);
            }}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
