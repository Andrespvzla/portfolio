/* eslint-disable array-callback-return */
import React from "react";

import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="max-w-5xl px-4 mx-auto my-0 pt-28 pb-8" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
        <div className="grid p-8 rounded-lg custom_shadow bg-white">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
        <div className="grid p-8 rounded-lg custom_shadow bg-white">
          {Data.map((val, id) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
