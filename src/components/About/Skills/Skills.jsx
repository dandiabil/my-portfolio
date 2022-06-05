import React from "react";

const Skills = ({ title, desc }) => {
  return (
    <div className="mb-14 md:flex justify-between items-start">
      <h2 className="font-cabin text-2xl font-semibold mb-4">{title}</h2>
      <p className="md:w-[70%] md:text-2xl">{desc}</p>
    </div>
  );
};

export default Skills;
