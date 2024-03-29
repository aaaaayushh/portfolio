/* eslint-disable @next/next/no-img-element */
import React from "react";
import { userData } from "../constants/userData";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto h-48">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="dark:bg-gray-900 bg-[#F1F1F1]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((project, idx) => (
            <ProjectCard
              title={project.title}
              link={project.link}
              imgUrl={project.imgUrl}
              number={`${idx + 1}`}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a
      href={link}
      className="w-full px-8 xl:px-0 block shadow-2xl"
      target="_blank"
      rel="noreferrer"
    >
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="project image"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-black text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
