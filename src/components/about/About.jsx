import React from "react";
import "./about.css";
import wallpaper from "../../assets/wiring-0764.jpg";
import { MdWork } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={wallpaper} alt="Wiring wallpaper" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Experience</h5>
              <small>Fresh Graduates</small>
            </article>
            <article className="about__card">
              <AiFillProject className="about__icon" />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ad
            iusto minus autem iste dolorum voluptatem delectus eveniet natus
            cumque debitis reiciendis, quaerat architecto repellendus illo omnis
            quod ex qui?
          </p>
          <a href="#contacts" className="btn btn-primary">
            Lets Tic Tac!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
