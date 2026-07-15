import "./portfolio.css";
import Portfolio1 from "../../assets/portfolio1.jpg";
import { BsGithub } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-heading">
          <div><span className="section-index">04 / SELECTED WORK</span><p className="eyebrow">A few things I have built</p></div>
          <h2>Projects shaped by real problems and practical decisions.</h2>
        </div>
        <div className="portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfolio1} alt="Daiva Leather e-commerce interface" />
            <span>Web application</span>
          </div>
          <div className="portfolio__item-content">
            <div className="portfolio__meta"><span>01</span><span>ASP.NET Core / MySQL / JavaScript</span></div>
            <h3>Daiva Leather E-Commerce</h3>
            <p>An e-commerce experience designed to organize leather products and make product discovery and purchasing straightforward.</p>
            <a href="https://github.com/Gilangkbr" target="_blank" rel="noreferrer" className="text-link">
              View GitHub profile <HiArrowUpRight />
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image portfolio__item-image--code" aria-label="Gilang portfolio website preview">
            <div className="code-window" aria-hidden="true">
              <div><i /><i /><i /></div>
              <pre><span>const</span> developer = {`{`}<br />&nbsp;&nbsp;name: <b>&quot;Gilang&quot;</b>,<br />&nbsp;&nbsp;focus: <b>&quot;the web&quot;</b><br />{`}`};</pre>
            </div>
            <span>Personal website</span>
          </div>
          <div className="portfolio__item-content">
            <div className="portfolio__meta"><span>02</span><span>React / Vite / CSS</span></div>
            <h3>Developer Portfolio</h3>
            <p>A responsive personal platform built to communicate capabilities, selected work, and ways to collaborate in one focused experience.</p>
            <a href="https://github.com/Gilangkbr/Gilang_Portfolio" target="_blank" rel="noreferrer" className="text-link">
              View source <BsGithub />
            </a>
          </div>
        </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
