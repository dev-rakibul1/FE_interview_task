import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title, details }) => {
  return (
    <div className="section-title flex items-center justify-center flex-col">
      <div className="theme-container md:max-w-[50%] text-center">
        <h2 className="font-semibold text-3xl">{title}</h2>
        <p className="mt-4 ">{details}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
