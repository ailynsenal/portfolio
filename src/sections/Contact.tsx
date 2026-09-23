import Email from "../assets/svgs/Email";
import FadeIn from "../components/FadeIn";
import Section from "../components/Section";
import { socials } from "../constants/socials";

const Contact = () => {
  return (
    <Section id="contact" title="How to reach me">
      <FadeIn className="relative flex flex-col gap-12">
        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-3 pr-12">
            <p>Send me an email:</p>
            <div className="flex gap-3">
              <span className="text-primary">
                <Email />
              </span>
              <p>ailyn.angeles@yahoo.com</p>
            </div>
          </div>
          {socials.map((social) => (
            <div key={social.id} className="flex flex-col gap-3 pr-12">
              <p>{social.label}:</p>
              <a
                className="flex gap-3"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-primary">{social.icon}</span>
                {social.handle}
              </a>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};

export default Contact;
