import React from "react";
import TechCard from "../../Projects/Project/TechCard/TechCard";

const Skills = ({ title, desc, techUsed }) => {
  return (
    <div className="mb-14 md:flex justify-between items-start">
      <div className="font-cabin text-2xl font-semibold mb-4">
        <h2>{title}</h2>
      </div>
      <div className="md:w-[70%] md:text-2xl">
        <p className="mb-3">{desc}</p>
        <div className="flex gap-2 flex-wrap">
          {techUsed &&
            techUsed.map((item) => (
              <TechCard
                tech={item}
                bgColor="bg-red"
                bgHover="hover:bg-[#e34946]"
                textColor="text-smoky-black"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
