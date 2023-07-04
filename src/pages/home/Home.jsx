import React from "react";

const bgImage = "https://i.ibb.co/5v51vZW/hero-bg.png";

const Home = () => {
  return (
    <div
      className="theme-width w-full h-full py-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* <HeroTopBar /> */}
      {/* <HeroLogoArea /> */}
    </div>
  );
};

export default Home;
