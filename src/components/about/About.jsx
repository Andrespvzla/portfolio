import React from "react";

import Image from "../../assets/avatar-2.svg";

import { IoLogoReact } from "react-icons/io5";
import {
  SiTailwindcss,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: IoLogoReact },
  { name: "Angular", icon: SiAngular },
  { name: "NodeJS", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
];

const About = () => {
  return (
    <section className="max-w-5xl px-4 mx-auto my-0 pt-28 pb-8">
      <h2 className="section__title lg:pb-8 pb-none">About Me</h2>
      <div className="grid gap-x-[1.875rem] grid-cols-1 lg:grid-cols-3">
        <img
          src={Image}
          alt=""
          className="justify-self-center -mt-3 lg:mb-none mb-5"
        />
        <div className="grid p-[1.875rem] custom_shadow rounded-lg bg-white col-span-2 lg:-mt-8">
          <div className="text-justify">
            <p className="text-gray-500 mb-4">
              I'm
              <span className="text-indigo-500 font-bold">
                &nbsp;Andres Palacios
              </span>
              , web developer from
              <span className="text-indigo-500 font-bold">
                &nbsp;Barquisimeto, Venezuela&nbsp;
              </span>
              but currently living in
              <span className="text-indigo-500 font-bold">
                &nbsp;Atlanta, Georgia.&nbsp;
              </span>
              I have good experience in web design and building web
              applications, also learning backend with NodeJs.
            </p>
            <a href="/" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-16 text-center text-white text-xl">
        {skills.map((skill) => {
          return (
            <div className="skills__box-card">
              <skill.icon className="skills__box-icon" />
              <h3>{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
