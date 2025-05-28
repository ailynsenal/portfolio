import React from "../assets/svgs/React";
import Redux from "../assets/svgs/Redux";
import Javacript from "../assets/svgs/Javacript";
import Typescript from "../assets/svgs/Typescript";
import HTML from "../assets/svgs/HTML";
import CSS from "../assets/svgs/CSS";
import SASS from "../assets/svgs/SASS";
import Tailwind from "../assets/svgs/Tailwind";

import AWS from "../assets/svgs/AWS";
import Terraform from "../assets/svgs/Terraform";
import Jest from "../assets/svgs/Jest";
import Git from "../assets/svgs/Git";
import Jira from "../assets/svgs/Jira";
import GithubActions from "../assets/svgs/GithubActions";
import Node from "../assets/svgs/Node";
import Contentful from "../assets/images/contentful.png";
import Storybook from "../assets/images/storybook.png";

const frameworks = [
  { icon: <Javacript />, img: "", label: "Javacript" },
  { icon: <Typescript />, img: "", label: "Typescript" },
  { icon: <React />, img: "", label: "React / React Native" },
  { icon: <Node />, img: "", label: "Node.js" },
  { icon: <Redux />, img: "", label: "Redux" },
  { icon: <HTML />, img: "", label: "HTML" },
  { icon: <CSS />, img: "", label: "CSS" },
  { icon: <SASS />, img: "", label: "SASS" },
  { icon: <Tailwind />, img: "", label: "Tailwind" },
];

const tools = [
  { icon: <AWS />, img: "", label: "AWS Basics" },
  { icon: <Terraform />, img: "", label: "Terraform" },
  { icon: <Git />, img: "", label: "Git" },
  { icon: <GithubActions />, img: "", label: "GH Actions" },
  { icon: "", img: Contentful, label: "Contentful" },
  { icon: "", img: Storybook, label: "Storybook" },
  { icon: <Jest />, img: "", label: "Jest" },
  { icon: <Jira />, img: "", label: "Jira" },
];

export const skills = [...frameworks, ...tools];
