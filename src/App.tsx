import "./App.css";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import WorkExperience from "./sections/WorkExperience";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="bg-neutral-800 text-white font-national-park">
      <NavBar activeItem="home" title="ailynangeles" onClickItem={() => {}} />
      <main className="mx-auto sm:w-[80vw] px-3">
        <Home />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <div className="flex items-center justify-center">
          <img
            src={
              "https://sismo.app/wp-content/uploads/2019/02/under-construction-gif-11.gif"
            }
            alt="Under Construction"
            className="w-full rounded-lg mt-12 sm:h-[400px]"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
