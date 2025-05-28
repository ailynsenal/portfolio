export type SectionKey = "home" | "about" | "skills" | "experience" | "projects" | "contact";

export type MenuItem = {
  id: number | string;
  name: string;
  link: string;
}

export type WorkItem = {
  position: string;
  company: string;
  duration: string;
  description: string;
  logo: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  logo: string;
  link: string;
}