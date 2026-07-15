import "./work-process.css";

const steps = [
  { number: "01", title: "Discover", text: "Clarify the goal, audience, constraints, and what a successful result should achieve." },
  { number: "02", title: "Structure", text: "Turn requirements into a clear content hierarchy, interface direction, and practical plan." },
  { number: "03", title: "Build", text: "Develop responsive components, refine interactions, and test the experience across screens." },
  { number: "04", title: "Deliver", text: "Review the details, optimize the build, and hand over a dependable result ready to use." },
];

const WorkProcess = () => (
  <section id="process" className="process">
    <div className="container">
      <div className="section-heading section-heading--compact">
        <div><span className="section-index">05 / PROCESS</span><p className="eyebrow">How I approach the work</p></div>
        <h2>A simple process, with clarity at every stage.</h2>
      </div>
      <div className="process__grid">
        {steps.map(({ number, title, text }) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WorkProcess;
