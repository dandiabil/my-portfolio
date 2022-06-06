import React from "react";

const TechCard = ({
  tech,
  bgColor = "bg-[#d7e2e6]",
  bgHover = "hover:bg-[#c4d5da]",
  textColor = "text-[#608b9d]",
}) => {
  return (
    <div
      className={`${bgColor} rounded-sm py-1 px-2 ${bgHover} transition cursor-default`}
    >
      <p className={`text-sm ${textColor} font-semibold`}>{tech}</p>
    </div>
  );
};

export default TechCard;
