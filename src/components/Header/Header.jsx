import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  //Close Burger
  function hamburgerMenu(e) {
    const menu = document.getElementById("menu");
    menu.style = "";
    if (e.target.getAttribute("name") === "burger") {
      menu.style.transform = "translate(-450px, 0)";
      menu.style.zIndex = "999";
    } else {
      menu.style.transform = "translate(200px, 0)";
    }
  }

  return (
    <>
      {/* <!-- Header Website --> */}
      <header className=" w-full h-[15vh] relative z-10" id="header">
        <div className="flex items-center justify-between h-full w-[80vw] md:max-w-6xl mx-auto">
          <figure>
            <a href="#top">
              <img
                src="/assets/img/Dan-Izzulhaq-Logo.svg"
                alt="portfolio logo"
                className="w-36"
              />
            </a>
          </figure>
          <nav className="font-cabin text-xl text-white">
            <ul className="hidden md:flex gap-16">
              <li className="opacity-70 hover:opacity-100 transition">
                <a href="#about">About</a>
              </li>
              <li className="opacity-70 hover:opacity-100 transition">
                <a href="#projects">Projects</a>
              </li>
              <li className="opacity-70 hover:opacity-100 transition">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <Icon
              icon={"charm:menu-hamburger"}
              className="iconify md:hidden cursor-pointer text-2xl"
              onClick={(e) => hamburgerMenu(e)}
              name="burger"
            />
          </nav>
        </div>
      </header>

      {/* <!-- Burger Menu --> */}
      <nav
        className="transition-transform fixed md:hidden top-0 -right-[450px] -z-[999] bg-[#C8524F] opacity-95 text-white h-[100vh] w-[100vw]"
        id="menu"
      >
        <div className="relative right-8">
          <Icon
            className="iconify cursor-pointer text-3xl h-[15vh] mr-0 ml-auto"
            icon="charm:cross"
            onClick={(e) => hamburgerMenu(e)}
            name="close"
          />
        </div>
        <ul className="h-[85vh] text-center flex flex-col justify-center items-center pb-8 font-krona">
          <li className="transition text-4xl w-full h-full">
            <a href="#about" className="h-full flex flex-col justify-center">
              ABOUT
            </a>
          </li>
          <li className="transition text-4xl w-full h-full">
            <a href="#projects" className="h-full flex flex-col justify-center">
              PROJECTS
            </a>
          </li>
          <li className="transition text-4xl w-full h-full">
            <a href="#contact" className="h-full flex flex-col justify-center">
              CONTACT
            </a>
          </li>
          <div className="flex justify-end w-[80vw] gap-2">
            <button className="w-fit rounded-full border-2 p-2 border-white hover:bg-red transition text-white">
              <a
                href="https://twitter.com/dandiabil"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  className="iconify text-3xl mx-auto"
                  icon="akar-icons:twitter-fill"
                ></Icon>
              </a>
            </button>
            <button className="w-fit rounded-full border-2 p-2 border-white hover:bg-red transition text-white">
              <a
                href="https://linkedin.com/in/dandiabil"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  className="iconify text-3xl mx-auto"
                  icon="akar-icons:linkedin-box-fill"
                ></Icon>
              </a>
            </button>
            <button className="w-fit rounded-full border-2 p-2 border-white hover:bg-red transition text-white">
              <a
                href="https://github.com/dandiabil"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  className="iconify text-3xl mx-auto"
                  icon="akar-icons:github-fill"
                ></Icon>
              </a>
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
