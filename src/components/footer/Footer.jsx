import "./footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => (
  <footer>
    <div className="container footer__container">
      <a href="#home" className="footer__logo">GA<span>.</span></a>
      <p>Designed and built with care by Gilang Ananda Akbar.</p>
      <div className="footer__right">
        <div className="footer__socials">
          <a href="https://github.com/Gilangkbr" target="_blank" rel="noreferrer" aria-label="GitHub"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/gilangkbr99/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin /></a>
        </div>
        <small>&copy; {new Date().getFullYear()} Gilang Ananda Akbar</small>
      </div>
    </div>
  </footer>
);

export default Footer;
