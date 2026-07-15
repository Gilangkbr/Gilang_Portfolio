import "./about.css";
import wallpaper from "../../assets/wiring-0764.jpg";
import { HiArrowUpRight } from "react-icons/hi2";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <span className="about__index">01 / ABOUT</span>
          <div className="about__me-image">
            <img src={wallpaper} alt="Electronic wiring project" />
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow">A little about me</p>
          <h2>Building with purpose, learning with curiosity.</h2>
          <p>
            I am a developer who enjoys turning ideas into clear, usable digital
            products. My foundation spans front-end development and backend
            technologies, helping me understand how an experience works from
            interface to data.
          </p>
          <p>
            I care about thoughtful details, responsive behavior, and code that
            remains understandable as a project grows. I am currently looking
            for a team where I can contribute, learn, and ship meaningful work.
          </p>
          <div className="about__facts">
            <div><span>Based in</span><strong>Indonesia</strong></div>
            <div><span>Primary focus</span><strong>Front-end development</strong></div>
          </div>
          <a href="#contact" className="text-link">
            Start a conversation <HiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
