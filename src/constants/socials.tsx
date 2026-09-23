import Github from "../assets/svgs/Github";
import LinkedIn from "../assets/svgs/LinkedIn";
import type { SocialItem } from "../types";

export const socials: SocialItem[] = [
  {
    id: "github",
    label: "GitHub",
    handle: "/ailynsenal",
    link: "https://github.com/ailynsenal",
    icon: <Github />,
  },
  {
    id: "linkedIn",
    label: "LinkedIn",
    handle: "/in/ailynangeles",
    link: "https://www.linkedin.com/in/ailynangeles/",
    icon: <LinkedIn />,
  },
];
