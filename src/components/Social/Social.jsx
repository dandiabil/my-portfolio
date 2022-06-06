import React from "react";
import { Icon } from "@iconify/react";

const Social = () => {
  return (
    /* <!-- Social Links --> */
    <section className="hidden md:block w-fit mx-auto relative -top-20 z-40">
      <div className="flex flex-col justify-end w-[90vw] gap-8 md:max-w-6xl">
        <button className="w-fit rounded-full hover:text-red transition text-white">
          <a
            href="https://twitter.com/dandiabil"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              className="iconify text-2xl mx-auto"
              icon="akar-icons:twitter-fill"
            ></Icon>
          </a>
        </button>
        <button className="w-fit rounded-full hover:text-red transition text-white">
          <a
            href="https://linkedin.com/in/dandiabil"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              className="iconify text-2xl mx-auto"
              icon="akar-icons:linkedin-box-fill"
            ></Icon>
          </a>
        </button>
        <button className="w-fit rounded-full hover:text-red transition text-white">
          <a
            href="https://github.com/dandiabil"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              className="iconify text-2xl mx-auto"
              icon="akar-icons:github-fill"
            ></Icon>
          </a>
        </button>
      </div>
    </section>
  );
};

export default Social;
