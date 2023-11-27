import { IoLogoGithub, IoChevronForwardOutline } from 'react-icons/io5';

import data from './data.js';

export const Portfolio = () => {
    return (
        <section id="portfolio" className="max-w-5xl px-4 mx-auto my-0 pt-28 pb-8">
            <h2 className="section__title">Projects I&apos;ve done</h2>
            <div className="grid gap-x-4 grid-cols-1 lg:grid-cols-2">
                {data.map((elem) => {
                    return (
                        <div key={elem.id} className="my-8">
                            <div className="bg-white custom_shadow rounded-lg p-5 relative">
                                <div className="bg-indigo-200 text-white rounded-lg h-16 w-16 absolute top-[-10%] left-[10%] grid place-content-center">
                                    <elem.icon className="text-indigo-500 text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-indigo-500 mt-8 mb-2">{elem.name}</h3>
                                <p className="text-light text-gray-500 mb-4 text-justify">{elem.desc}</p>
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
                                    {elem.git ? (
                                        <a
                                            href={elem.git}
                                            className="text-indigo-500 font-semibold scale__effect"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View Github
                                            <IoLogoGithub className="inline ml-1" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
