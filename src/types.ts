import type { ReactNode } from "react";

export type SectionKey =
  "home" | "about" | "skills" | "experience" | "projects" | "contact";

export type NavItem = {
  id: SectionKey;
  label: string;
};

export type ExperienceJob = {
  type: "job";
  id: string;
  position: string;
  company: string;
  start: string;
  end?: string;
  description: string[];
};

export type ExperienceNote = {
  type: "note";
  id: string;
  note: string;
};

export type ExperienceEntry = ExperienceJob | ExperienceNote;

export type EducationItem = {
  id: string;
  course: string;
  school: string;
  duration: string;
  logo: string;
};

export type SkillItem = {
  label: string;
  icon?: ReactNode;
  img?: string;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  logo: string;
  link: string;
};

export type SocialItem = {
  id: string;
  label: string;
  handle: string;
  link: string;
  icon: ReactNode;
};
