import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gilangkbr99/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Gilangkbr" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
