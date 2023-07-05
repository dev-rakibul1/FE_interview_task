import React from "react";

const HeroArea = () => {
  return (
    <section className="theme-container hero-area h-full max-h-full">
      <div className="h-screen pt-36 text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold">
          Search, Save and My<span className="text-[#0010B5]">voiag</span>
        </h1>
        <p className="">
          Choice from over{" "}
          <span className="text-[#0010B5] font-semibold">450 airlines</span> &{" "}
          <span className="text-[#0010B5] font-semibold">
            1.5 million + hotels
          </span>{" "}
          worldwide!
        </p>
      </div>
    </section>
  );
};

export default HeroArea;
