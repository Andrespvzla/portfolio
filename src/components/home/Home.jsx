import React from "react";

import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoGithub,
  IoArrowDown,
} from "react-icons/io5";

import { Link } from "react-scroll";

const home = () => {
  return (
    <div
      className="lg:bg-[url('./assets/test.png')] bg-no-repeat bg-none bg-cover bg-center"
      id="home"
    >
      <section className="max-w-5xl px-4 mx-auto my-0 flex relative min-h-screen items-center justify-center">
        <div className="z-1 max-width-[540px] text-center">
          <img src="" alt="" className="mb-6" />
          <h1 className="font-extrabold text-6xl text-indigo-500 mb-4">
            Andres Palacios
          </h1>
          <span className="text-2xl text-gray-500 font-bold">
            I'm a Front-End Developer
          </span>
          <div className="flex items-center justify-center gap-x-7 mt-6 mb-8">
            <a
              className="social__media-icon"
              href="https://twitter.com/_Aepalacios"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/andres-palacios-01218316a/"
              target="_blank"
              rel="noreferrer"
              className="social__media-icon"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/Andrespvzla"
              target="_blank"
              rel="noreferrer"
              className="social__media-icon"
            >
              <IoLogoGithub />
            </a>
          </div>
          <Link
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
            className="btn"
          >
            Hire me
          </Link>
          <div className="absolute bottom-10 left-0 w-[100%] grid place-content-center">
            <Link
              to="about"
              smooth={true}
              offset={50}
              duration={500}
              className="text-gray-500 cursor-pointer"
            >
              <span>Scroll Down</span>
              <IoArrowDown className="text-2xl text-indigo-500 scale__effect my-2 mx-auto" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
