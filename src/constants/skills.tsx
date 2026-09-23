import React from "../assets/svgs/React";
import Redux from "../assets/svgs/Redux";
import JavaScript from "../assets/svgs/JavaScript";
import Typescript from "../assets/svgs/Typescript";
import HTML from "../assets/svgs/HTML";
import CSS from "../assets/svgs/CSS";
import SASS from "../assets/svgs/SASS";
import Tailwind from "../assets/svgs/Tailwind";
import Node from "../assets/svgs/Node";

import AWS from "../assets/svgs/AWS";
import Terraform from "../assets/svgs/Terraform";
import Jest from "../assets/svgs/Jest";
import Git from "../assets/svgs/Git";
import Jira from "../assets/svgs/Jira";
import GithubActions from "../assets/svgs/GithubActions";
import Contentful from "../assets/images/contentful.png";
import Storybook from "../assets/images/storybook.png";
import type { SkillGroup, SkillItem } from "../types";

const languagesAndFrameworks: SkillItem[] = [
  { icon: <JavaScript />, label: "JavaScript" },
  { icon: <Typescript />, label: "Typescript" },
  { icon: <React />, label: "React / React Native" },
  { icon: <Node />, label: "Node.js" },
  { icon: <Redux />, label: "Redux" },
  { label: "Zustand" },
  { label: "Backbone" },
  { label: "Marionette" },
  { icon: <HTML />, label: "HTML" },
  { icon: <CSS />, label: "CSS" },
];

const uiAndArchitecture: SkillItem[] = [
  { icon: <Tailwind />, label: "Tailwind" },
  { icon: <SASS />, label: "SASS" },
  { label: "Styled Components" },
  { label: "Material UI" },
  { label: "Framer Motion" },
  { label: "Reanimated" },
  { label: "Handlebars" },
  { img: Storybook, label: "Storybook" },
  { label: "Chromatic" },
  { label: "Micro-Frontend / Webpack Module Federation" },
  { label: "Monorepo" },
];

const toolsAndQuality: SkillItem[] = [
  { icon: <Git />, label: "Git" },
  { label: "Bitbucket" },
  { icon: <GithubActions />, label: "GitHub Actions" },
  { label: "Jenkins" },
  { icon: <Jira />, label: "Jira" },
  { label: "Figma" },
  { img: Contentful, label: "Contentful" },
  { icon: <AWS />, label: "AWS" },
  { icon: <Terraform />, label: "Terraform" },
  { label: "Adobe Analytics" },
  { label: "Google Analytics" },
  { icon: <Jest />, label: "Jest" },
  { label: "SonarQube" },
  { label: "Sentry" },
];

const aiAssistedDevelopment: SkillItem[] = [
  { label: "GitHub Copilot" },
  { label: "Claude Code" },
  { label: "Cursor" },
];

export const skillGroups: SkillGroup[] = [
  { title: "Languages & Frameworks", items: languagesAndFrameworks },
  { title: "UI & Architecture", items: uiAndArchitecture },
  { title: "Tools & Quality", items: toolsAndQuality },
  { title: "AI-Assisted Development", items: aiAssistedDevelopment },
];
