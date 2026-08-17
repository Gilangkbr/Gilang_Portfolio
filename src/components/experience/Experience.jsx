import "./experience.css";
import { FaUniversalAccess } from "react-icons/fa";
import { HiCodeBracket, HiCircleStack, HiLightBulb, HiPaintBrush, HiWrenchScrewdriver } from "react-icons/hi2";
import { MdDevices } from "react-icons/md";
import { SiAngular, SiBootstrap, SiCss, SiDotnet, SiGit, SiGithub, SiHtml5, SiJavascript, SiMysql, SiPostgresql, SiReact, SiVite } from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";

const skillGroups = [
  { icon: HiCodeBracket, title: "Core", skills: ["HTML", "CSS", "JavaScript", "React", "Angular"] },
  { icon: HiPaintBrush, title: "Interface", skills: ["Responsive Design", "Bootstrap", "UI Implementation", "Accessibility"] },
  { icon: HiCircleStack, title: "Backend", skills: ["C#", "ASP.NET Core", "MySQL", "PostgreSQL", "REST APIs"] },
  { icon: HiWrenchScrewdriver, title: "Workflow", skills: ["Git", "GitHub", "Vite", "Problem Solving"] },
];

const skillIcons = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  Angular: SiAngular,
  "Responsive Design": MdDevices,
  Bootstrap: SiBootstrap,
  "UI Implementation": HiPaintBrush,
  Accessibility: FaUniversalAccess,
  "C#": TbBrandCSharp,
  "ASP.NET Core": SiDotnet,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  "REST APIs": TbApi,
  Git: SiGit,
  GitHub: SiGithub,
  Vite: SiVite,
  "Problem Solving": HiLightBulb,
};

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
              <ul>
                {skills.map((skill) => {
                  const SkillIcon = skillIcons[skill];

                  return (
                    <li key={skill}>
                      <SkillIcon aria-hidden="true" />
                      <span>{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
