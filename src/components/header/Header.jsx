import "./header.css";
import CTA from "./CTA";
import profilePict from "../../assets/profilpict.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__content">
          <div className="availability">
            <span aria-hidden="true" />
            Available for opportunities
          </div>
          <p className="eyebrow">Hello, I am Gilang.</p>
          <h1>
            I build <span>thoughtful digital experiences</span> for the web.
          </h1>
          <p className="header__intro">
            Front-end developer based in Indonesia, focused on creating fast,
            responsive, and accessible interfaces with React and modern web
            technologies.
          </p>
          <CTA />
          <HeaderSocial />
        </div>

        <div className="header__visual" aria-label="Portrait of Gilang Ananda Akbar">
          <div className="header__visual-grid" aria-hidden="true" />
          <div className="header__badge header__badge--top">
            <span>FOCUS</span>
            React &amp; UI Engineering
          </div>
          <div className="me">
            <img src={profilePict} alt="Gilang Ananda Akbar" />
          </div>
          <div className="header__badge header__badge--bottom">
            <strong>02</strong>
            Projects completed
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
