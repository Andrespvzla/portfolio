import { useState } from 'react';

import logo from '../../assets/logo.png';

import { Link } from 'react-scroll';

import {
  IoHomeOutline,
  IoPersonOutline,
  IoBriefcaseOutline,
  IoSchoolOutline,
  IoChatbubblesOutline,
  IoMenuSharp,
  IoArrowBack,
} from 'react-icons/io5';

export const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <div>
      <aside className={toggle ? 'aside left-0 z-50' : 'aside'}>
        <a href="/">
          <img
            width={55}
            className="mx-auto my-5 scale__effect"
            src={logo}
            alt="Andres Palacios | Frontend Developer"
          />
        </a>
        <nav className="p-10">
          <div>
            <ul className="flex flex-col gap-y-8">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-indigo-500 font-bold cursor-pointer"
                >
                  <IoHomeOutline className="text-3xl scale__effect" />
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-indigo-500 font-bold cursor-pointer"
                >
                  <IoPersonOutline className="text-3xl scale__effect" />
                </Link>
              </li>
              <li>
                <Link
                  to="resume"
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-indigo-500 font-bold cursor-pointer"
                >
                  <IoSchoolOutline className="text-3xl scale__effect" />
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-indigo-500 font-bold cursor-pointer"
                >
                  <IoBriefcaseOutline className="text-3xl scale__effect" />
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-500 hover:text-indigo-500 font-bold cursor-pointer"
                >
                  <IoChatbubblesOutline className="text-3xl scale__effect" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="p-10">
          <span className="text-gray-500 text-md -rotate-180 vertical-rl">
            &copy; 2022 - 2023.
          </span>
        </div>
      </aside>
      <div
        className={toggle ? 'navToggle left-[120px]' : 'navToggle'}
        onClick={() => showMenu(!toggle)}
      >
        <IoMenuSharp
          className={
            toggle
              ? 'text-indigo-500 text-2xl hidden'
              : 'text-indigo-500 text-2xl duration-1000'
          }
        />
        <IoArrowBack
          className={
            toggle
              ? 'text-indigo-500 text-2xl'
              : 'text-indigo-500 text-2xl hidden duration-1000'
          }
        />
      </div>
    </div>
  );
};
