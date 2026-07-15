import "./nav.css";
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("header[id], section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = (href) => {
    setActiveNav(href);
    setIsOpen(false);
  };

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="container nav__container">
        <a className="nav__logo" href="#home" onClick={() => closeMenu("#home")}>
          GA<span>.</span>
        </a>

        <div className={`nav__links ${isOpen ? "nav__links--open" : ""}`}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => closeMenu(href)}
              className={activeNav === href ? "active" : ""}
            >
              {label}
            </a>
          ))}
          <a className="nav__contact" href="#contact" onClick={() => closeMenu("#contact")}>
            Let&apos;s talk
          </a>
        </div>

        <button
          className="nav__toggle"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
