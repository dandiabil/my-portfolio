import React from "react";
import { Icon } from "@iconify/react";
import Project from "./Project/Project";

const Projects = () => {
  return (
    /* <!-- Projects Section --> */
    <section className="bg-white text-black" id="projects">
      <div className="w-[80vw] md:max-w-6xl mx-auto py-20 font-montserrat">
        <div className="mb-12 md:mb-20">
          <h1 className="font-krona text-2xl lg:text-3xl mb-3 md:mb-9 md:text-center">
            PROJECTS
          </h1>
          <p className="text-xl md:text-3xl md:text-center md:w-[640px] mx-auto">
            Below are some of my work that I've had worked on.
          </p>
        </div>
        <div className="block md:grid grid-cols-2 font-montserrat gap-12">
          <Project
            id="investx"
            title="InvestX"
            desc="An equity crowdfunding website built using React. I helped make the
          admin dashboard for InvestX website while I was on an internship at
          Sagara Technology from September 2021 to December 2021."
            src="assets/img/Homepage-investx.png"
            href="https://github.com/dandiabil"
            techUsed={["React", "Redux", "SCSS"]}
          />
          <Project
            id="creaven"
            title="CREAVEN"
            desc="This was my group projects for our thesis in college. I helped
            creating the front end of the user page and admin page. This
            website could help you find the best laptop by using machine
            learning algorithm."
            src="assets/img/Dashboard-creaven.png"
            href="https://github.com/Fikrilogic/Prediction-Laptop-ML"
            techUsed={["React", "Redux", "Material UI"]}
          />
          <Project
            id="weather-info"
            title="Weather Info"
            desc="Weather Info was one of my mini projects. This website used React as front end library and using Tailwind CSS. Has few features like checking weather in certain area and also the weather forecast, and there is weather map where you can look the weather information in other part of the world."
            src="assets/img/Dashboard-weather.png"
            href="https://github.com/dandiabil/weather-info"
            techUsed={["React", "Tailwind CSS"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
