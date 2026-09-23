import Her from "../assets/images/ailyn.jpg";
import CV from "../assets/files/AILYN_ANGELES.pdf";
import FadeIn from "../components/FadeIn";
import { socials } from "../constants/socials";

const Home = () => {
  return (
    <section id="home" className="flex items-center py-6 sm:min-h-screen">
      <FadeIn className="flex flex-col-reverse gap-6 sm:flex-row">
        <div className="flex flex-col gap-4 w-full sm:w-3/4">
          <h1 className="font-semibold text-xl w-fit py-2">
            Hey!👋 I'm <span className="text-primary">Ailyn Angeles</span>
          </h1>
          <p className="font-semibold text-3xl sm:text-5xl">
            Experienced <span className="text-primary">software engineer</span>{" "}
            with a focus on{" "}
            <span className="text-primary">front-end development</span>.
          </p>
          <p className="font-leckerlie-one text-lg animate-bounce my-4">
            ~ never stop learning ~
          </p>

          <div className="flex items-center gap-6">
            <a
              href={CV}
              download="AILYN_ANGELES_CV"
              className="border border-line/15 w-fit rounded-md text-base py-2 px-3 hover:border-accent hover:bg-line/15 hover:text-secondary"
            >
              Download CV
            </a>
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transition ease-in-out hover:scale-125"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="self-center-safe">
          <img
            src={Her}
            alt="Ailyn Angeles"
            className="rounded-full w-50 sm:w-72"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Home;
