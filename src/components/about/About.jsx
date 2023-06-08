import { IoLogoReact } from 'react-icons/io5';
import {
  SiTailwindcss,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: IoLogoReact },
  { name: 'Angular', icon: SiAngular },
  { name: 'NodeJS', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
];

export const About = () => {
  return (
    <section id="about" className="max-w-5xl px-4 mx-auto my-0 pt-28 pb-8">
      <h2 className="section__title lg:pb-8 pb-none">About Me</h2>
      <div className="grid gap-x-[1.875rem] grid-cols-1 lg:grid-cols-3">
        <div className="grid p-[1.875rem] custom_shadow rounded-lg bg-white col-span-12 lg:-mt-8">
          <p className="text-gray-500 text-justify">
            I&apos;m
            <span className="text-indigo-500 font-bold">
              &nbsp;Andres Palacios
            </span>
            , a Front-End developer with 2 years of experience in the field that
            helps me understand web technologies and build interactive web
            applications that captivates users... You can download my resume by
            <button className="ml-1 text-indigo-500 font-bold hover:underline">
              clicking here
            </button>
          </p>
          <div className="mt-4">
            <p className="text-gray-500 text-justify">
              Below are some technologies that I&apos;ve work with
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 text-center font-semibold text-indigo-500 mt-8">
            {skills.map((skill) => {
              return (
                <div key={skill.name} className="skills__box-card">
                  <skill.icon className="skills__box-icon" />
                  <h3>{skill.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
