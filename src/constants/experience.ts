import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    type: "job",
    id: "aleph-uob",
    company: "Aleph Pte Ltd · Client: UOB Singapore",
    position: "Frontend Developer",
    start: "September 2025",
    description: [
      "Build customer-facing banking features (accounts, payments, investments) across micro-frontend repos using Webpack Module Federation.",
      "Own features end-to-end, from requirements through delivery, and support penetration testing and DAST cycles.",
    ],
  },
  {
    type: "job",
    id: "cupa",
    company: "Cambridge University Press & Assessment",
    position: "Senior Software Engineer",
    start: "October 2023",
    end: "March 2025",
    description: [
      "Built interactive English-learning games for web (React) and mobile (React Native), including a text-to-speech feature for audio-based learning.",
      "Built and maintained a reusable UI component library with Storybook and Chromatic.",
    ],
  },
  {
    type: "job",
    id: "srph",
    company: "Samsung R&D Philippines (SRPH)",
    position: "React Developer",
    start: "April 2022",
    end: "October 2023",
    description: [
      "Built network monitoring applications with live alerts, notifications, and statistical graphs.",
      "Worked within a monorepo, sharing code and libraries across multiple internal packages.",
    ],
  },
  {
    type: "note",
    id: "acn",
    note: "September 2021 – April 2022 · Accenture Inc. — completed a six-month upskilling programme in modern frontend technologies and cloud tools.",
  },
  {
    type: "job",
    id: "infor",
    company: "Infor PSSC. Inc.",
    position: "Software Engineer",
    start: "September 2016",
    end: "September 2021",
    description: [
      "Built and maintained an e-commerce platform on Liferay CMS, migrating legacy code from Liferay 6 to 7.",
      "Mentored junior developers and contributed to team knowledge-sharing sessions.",
    ],
  },
];
