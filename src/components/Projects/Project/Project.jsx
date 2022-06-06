import React from "react";
import { Icon } from "@iconify/react";
import TechCard from "./TechCard/TechCard";

const Project = ({ id, src, desc, title, href, techUsed }) => {
  return (
    <>
      <div id={id} className="mb-6 max-w-md mx-auto">
        <figure>
          <img src={src} alt={title} />
        </figure>
      </div>

      <div className="mb-12 md:flex flex-col justify-evenly">
        <div
          className={`project-title mb-3 text-2xl lg:text-5xl font-cabin font-semibold ${title}`}
        >
          <h2>{title}</h2>
        </div>
        <div className="lg:text-xl mb-2">
          <p>{desc}</p>
        </div>
        <div className="mb-5">
          <h2 className="font-bold mb-2 lg:text-xl">Tech Used</h2>
          <div className="flex gap-2">
            {techUsed.map((item) => (
              <TechCard tech={item} />
            ))}
          </div>
        </div>
        <button className="px-5 py-2 rounded-md bg-red text-white w-28">
          <a href={href} target="_blank" rel="noreferrer">
            <Icon
              className="iconify mr-2 mb-1 inline-block"
              icon="akar-icons:github-fill"
            ></Icon>
            Repo
          </a>
        </button>
      </div>
    </>
  );
};

export default Project;
