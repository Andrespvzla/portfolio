import React, { useState } from "react";

import { IoLogoGithub, IoChevronForwardOutline } from "react-icons/io5";

import Data from "./Data";

const filters = [
  { key: "all", label: "Everything" },
  { key: "react", label: "React" },
  { key: "tailwindcss", label: "TailwindCSS" },
  { key: "ionic", label: "Ionic" },
  { key: "wordpress", label: "WordPress" },
];

const Portfolio = () => {
  const [items, setItems] = useState(Data);
  const [filter, setFilter] = useState("all");

  const filterItem = (categoryItem) => {
    setFilter(categoryItem);

    if (categoryItem === "all") {
      setItems(Data);
    } else {
      const updateItems = Data.filter((curElem) => {
        return curElem.category === categoryItem;
      });
      setItems(updateItems);
    }
  };
  return (
    <section className="max-w-5xl px-4 mx-auto my-0 pt-28 pb-8" id="portfolio">
      <h2 className="section__title">Projects I've done</h2>
      <div className="flex items-center flex-wrap gap-x-7 mb-10 lg:justify-start justify-center">
        {filters.map((filterOne) => (
          <span
            key={filterOne.key}
            className={
              "portfolio__filter-item " +
              (filter === filterOne.key ? "active" : "")
            }
            onClick={() => filterItem(filterOne.key)}
          >
            {filterOne.label}
          </span>
        ))}
      </div>
      <div className="grid gap-x-4 grid-cols-1 lg:grid-cols-3">
        {items.map((elem) => {
          const { id } = elem;
          return (
            <div className="my-8">
              <div
                className="bg-white custom_shadow rounded-lg p-5 relative"
                key={id}
              >
                <div className="bg-indigo-200 text-white rounded-lg h-16 w-16 absolute top-[-10%] left-[10%] grid place-content-center">
                  <elem.icon className="text-indigo-500 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-indigo-500 mt-8 mb-2">
                  {elem.name}
                </h3>
                <p className="text-light text-gray-500 mb-4">{elem.desc}</p>
                <div className="flex justify-between">
                  <a
                    href={elem.demo}
                    className="text-indigo-500 font-semibold scale__effect"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View demo
                    <IoChevronForwardOutline className="inline" />
                  </a>
                  <a
                    href={elem.git}
                    className="text-indigo-500 font-semibold scale__effect"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Github
                    <IoLogoGithub className="inline ml-1" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
