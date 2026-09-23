import "./App.css";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { useState } from "react";
import type { SectionKey } from "./types";
import Contact from "./sections/Contact";

function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const scrollToSection = (section: SectionKey) => {
    const element = document.getElementById(section);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${section}`);
    setActiveSection(section);
  };

  return (
    <div className="bg-page text-fg font-national-park">
      <NavBar
        title="ailynangeles"
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <main className="mx-auto sm:w-[80vw] px-3">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <div id="footer" className="flex flex-wrap py-12">
          <p>© ailynangeles</p>
        </div>
      </main>
    </div>
  );
}

export default App;
