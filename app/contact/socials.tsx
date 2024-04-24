import React from "react";
import { FaGithub, FaLinkedin, FaMediumM } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex gap-5 my-5">
      <a href="https://www.github.com/karlaferry" target="_blank">
        <FaGithub size={40} />
      </a>
      <a href="https://linkedin.com/in/karla-carreon" target="_blank">
        <FaLinkedin size={40} />
      </a>
      <a href="https://medium.com/@karlacodes" target="_blank">
        <FaMediumM size={40} />
      </a>
    </div>
  );
}
