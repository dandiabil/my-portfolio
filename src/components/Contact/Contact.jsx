import React from "react";

const Contact = () => {
  return (
    /* <!-- Contact Section --> */
    <section className="bg-red relative z-10 py-8 text-white" id="contact">
      <div className="py-14 md:py-28 w-[80vw] md:max-w-6xl mx-auto font-montserrat text-center">
        <h1 className="font-krona text-2xl md:text-3xl mb-8 md:mb-16">
          GET IN TOUCH
        </h1>
        <p className="text-lg md:text-5xl mb-16">
          If you want to contact me for a project or collaboration. Feel free to
          send me an email.
        </p>
        <a
          href="mailto:dandiabil24@gmail.com"
          className="font-semibold text-xl md:text-5xl mb-16 block w-fit mx-auto hover:bg-white hover:text-red p-2 transition rounded border-[1px] border-white"
        >
          dandiabil24@gmail.com
        </a>
        <p className="font-bold text-2xl md:text-2xl">
          Let's make something great together.
        </p>
      </div>
    </section>
  );
};

export default Contact;
