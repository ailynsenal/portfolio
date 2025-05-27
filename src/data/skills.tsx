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

const frameworks = [
  { icon: <React />, label: "React" },
  { icon: <Redux />, label: "Redux" },
  { icon: <Javacript />, label: "Javacript" },
  { icon: <Typescript />, label: "Typescript" },
  { icon: <HTML />, label: "HTML" },
  { icon: <CSS />, label: "CSS" },
  { icon: <SASS />, label: "SASS" },
  { icon: <Tailwind />, label: "Tailwind" },
];

const tools = [
  { icon: <AWS />, label: "AWS Basics" },
  { icon: <Terraform />, label: "Terraform" },
  { icon: <Jest />, label: "Jest" },
  { icon: <Git />, label: "Git" },
  { icon: <Jira />, label: "Jira" },
  { icon: <GithubActions />, label: "GH Actions" },
];

export const skills = [...frameworks, ...tools];
