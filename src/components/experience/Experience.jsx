import "./experience.css";
import { HiCodeBracket, HiCircleStack, HiPaintBrush, HiWrenchScrewdriver } from "react-icons/hi2";

const skillGroups = [
  { icon: HiCodeBracket, title: "Core", skills: ["HTML", "CSS", "JavaScript", "React"] },
  { icon: HiPaintBrush, title: "Interface", skills: ["Responsive Design", "Bootstrap", "UI Implementation", "Accessibility"] },
  { icon: HiCircleStack, title: "Backend", skills: ["C#", "ASP.NET Core", "MySQL", "REST APIs"] },
  { icon: HiWrenchScrewdriver, title: "Workflow", skills: ["Git", "GitHub", "Vite", "Problem Solving"] },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-heading">
          <div><span className="section-index">02 / TOOLKIT</span><p className="eyebrow">Technologies I work with</p></div>
          <h2>A practical toolkit for building complete web experiences.</h2>
        </div>
        <div className="experience__container">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article className="skill-group" key={title}>
              <Icon className="skill-group__icon" />
              <h3>{title}</h3>
              <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
