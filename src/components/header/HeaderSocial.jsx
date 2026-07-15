import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <span>Find me online</span>
      <a
        href="https://www.linkedin.com/in/gilangkbr99/"
        target="_blank"
        rel="noreferrer"
        aria-label="Gilang on LinkedIn"
      >
        <BsLinkedin />
        LinkedIn
      </a>
      <a
        href="https://github.com/Gilangkbr"
        target="_blank"
        rel="noreferrer"
        aria-label="Gilang on GitHub"
      >
        <BsGithub />
        GitHub
      </a>
    </div>
  );
};

export default HeaderSocial;
