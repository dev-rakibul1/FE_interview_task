import React from "react";
const logo = "https://i.ibb.co/QHNpWYd/logo-1.png";

const HeroLogoArea = () => {
  return (
    <div className=" hidden lg:block">
      <div className="flex items-center justify-between theme-container py-4 ">
        <div className="max-w-[150px] w-full">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <button class="btn-primary capitalize text-lg font-extralight text-white px-7 py-2 rounded-lg">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroLogoArea;
