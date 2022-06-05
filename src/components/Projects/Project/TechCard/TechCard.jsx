import React from "react";

const TechCard = ({ tech }) => {
  return (
    <div className="bg-[#d7e2e6] rounded-sm py-1 px-2 hover:bg-[#c4d5da] transition cursor-default">
      <p className="text-sm text-[#608b9d] font-semibold">{tech}</p>
    </div>
  );
};

export default TechCard;
