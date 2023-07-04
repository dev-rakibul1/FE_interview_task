import React from "react";
const logo = "https://i.ibb.co/QHNpWYd/logo-1.png";

const HeroLogoArea = () => {
  return (
    <div className="flex items-center justify-between theme-width py-4">
      <div className="max-w-[150px] w-full">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <button class=" btn-primary capitalize text-lg font-extralight text-white py-1 px-5 rounded-lg">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default HeroLogoArea;
