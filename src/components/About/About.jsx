import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    /* <!-- About Section --> */
    <>
      <section className="bg-[#2e2e2e] text-white" id="about">
        <figure className="relative z-[1] md:max-w-6xl w-[80vw] mx-auto top-32">
          <img
            src="/assets/vector/Circles.png"
            alt=""
            className="relative left-[30%] sm:left-[70%] md:left-[80%] lg:left-[90%]"
          />
        </figure>
        <div className="w-[80vw] md:max-w-6xl mx-auto py-44 md:flex items-center justify-between sm:block">
          <div className="md:flex items-start justify-between">
            <div className="mb-8">
              <h1 className="font-krona text-2xl lg:text-3xl about__title">
                ABOUT ME
              </h1>
              <figure className="w-fit mx-auto md:ml-0">
                <img
                  src="/assets/img/profile2.jpg"
                  alt="profile-photo"
                  className="max-h-[350px] rounded-xl"
                />
              </figure>
            </div>
            <div className="font-montserrat md:text-xl lg:text-3xl md:w-[60%] text-justify">
              <p className="mb-16">
                My name is Dandi Sabilli Izzulhaq and I'm a front end developer
                from Jakarta, Indonesia. I love building websites using HTML,
                CSS and Javascript. But now, I bulid website mainly using React
                and Tailwind.
              </p>
              <p>
                I also like to learn new technologies so that I can improve
                myself as a front end developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skillset bg-[#2e2e2e] text-white">
        <div className="w-[80vw] md:max-w-6xl mx-auto py-16 md:flex items-center justify-between sm:block">
          <div>
            <div className="mb-6 md:mb-16">
              <h1 className="font-krona text-2xl lg:text-3xl skillset__title">
                TECH SKILLSETS
              </h1>
            </div>

            <div className="font-montserrat">
              <p className="mb-14 md:mb-28 text-xl md:text-3xl">
                These are the skillsets that I currently have. I will always
                trying to keep updated by the latest technologies.
              </p>

              <Skills
                title="HTML/CSS/JS"
                desc="Building websites using semantic HTML and also using plain CSS with BEM naming conventions. Although, now I also like to use CSS framework like Tailwind CSS or preprocessor like SASS. For JavaScript, I like to use React as a front end library to build single-page applications."
                techUsed={["HTML5", "SASS", "BEM", "Tailwind CSS", "React"]}
              />
              <Skills
                title="Version Control"
                desc="I used Git as version control system to keep track of my project's code progress and then published it to public repository like GitHub for collaborating."
                techUsed={["Git", "GitHub"]}
              />
              {/* <Skills
                title="Design Tools"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere error
        quibusdam eos repudiandae eum unde?"
                techUsed={["Figma"]}
              /> */}
              {/* <Skills
                title="HTML/CSS/JS"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere error
        quibusdam eos repudiandae eum unde?"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <img
        src="/assets/background/divider.svg"
        alt=""
        className="w-full relative bg-white"
      />
    </>
  );
};

export default About;
