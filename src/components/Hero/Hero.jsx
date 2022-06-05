import React from "react";

const Hero = () => {
  return (
    /* <!-- Hero --> */
    <section className="py-24 md:py-32 lg:pt-24 lg:pb-0 relative z-10">
      <div className="w-[70vw] md:max-w-6xl mx-auto text-white flex flex-col justify-center">
        <h1 className="text-3xl md:text-6xl lg:text-8xl mb-3 md:mb-8 font-krona w-44 sm:w-96 md:w-2/3 lg:w-full leading-normal md:leading-normal lg:leading-tight">
          Hello, I'm Dandi <span className="text-red">Izzulhaq</span>
        </h1>
        <h3 className="font-semibold w-44 md:w-auto md:text-3xl lg:text-4xl font-montserrat">
          I Build Websites
        </h3>
        <figure className="relative z-[1] w-full">
          <img
            src="/assets/vector/shapes.png"
            alt=""
            className="relative md:left-[80%] md:bottom-28"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
