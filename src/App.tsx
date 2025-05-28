import "./App.css";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import WorkExperience from "./sections/WorkExperience";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { useRef, useState } from "react";
import type { SectionKey, SectionRef } from "./types";
import Contact from "./sections/Contact";

function App() {
  const [activeNavItem, setActiveNavItem] = useState<SectionKey>("home");
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs: Record<SectionKey, SectionRef> = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const updateActiveNavItem = (section: SectionKey) => {
    const ref = sectionRefs[section];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${section}`);
      setActiveNavItem(section);
    }
  };

  return (
    <div className="bg-neutral-800 text-white font-national-park">
      <NavBar
        activeItem={activeNavItem}
        title="ailynangeles"
        onClickItem={updateActiveNavItem}
      />
      <main className="mx-auto sm:w-[80vw] px-3">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <WorkExperience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <div id="footer" className="flex flex-wrap justify-end py-12">
          <p>
            design inspo ©{" "}
            <a
              href="https://www.jomkv.tech/"
              target="_blank"
              className="underline text-primary"
            >
              here
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
