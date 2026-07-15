import "./services.css";
import { HiArrowUpRight } from "react-icons/hi2";

const services = [
  { number: "01", title: "Landing pages", description: "Focused pages that communicate your offer clearly, look polished on every screen, and guide visitors toward action." },
  { number: "02", title: "Front-end development", description: "Responsive React interfaces translated from concepts or designs into maintainable, accessible components." },
  { number: "03", title: "UI implementation", description: "Careful implementation of layouts, design systems, and interactions with attention to consistency and usability." },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-heading section-heading--compact">
          <div><span className="section-index">03 / SERVICES</span><p className="eyebrow">How I can contribute</p></div>
          <h2>From idea to a clear, responsive interface.</h2>
        </div>
        <div className="service__container">
          {services.map(({ number, title, description }) => (
            <article className="service" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <HiArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
