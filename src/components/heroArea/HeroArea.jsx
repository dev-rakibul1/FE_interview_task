import React from "react";

const HeroArea = () => {
  return (
    <section className="theme-width h-screen hero-area flex items-center justify-start  flex-col pt-36">
      <h1 className="text-5xl font-semibold">
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
    </section>
  );
};

export default HeroArea;
