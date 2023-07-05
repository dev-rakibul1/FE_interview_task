import React from "react";
import Choose from "../../components/choose/Choose";
import Destinations from "../../components/choose/destinations/Destinations";
import HeroArea from "../../components/heroArea/HeroArea";
import HeroTimeSlot from "../../components/heroTimeSlot/HeroTimeSlot";
import Holidays from "../../components/holidays/Holidays";

const bgImage = "https://i.ibb.co/h8dn13K/New-Project.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="theme-width w-full h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <HeroTimeSlot />
        <HeroArea />
      </div>
      <Choose />
      <Destinations />
      <Holidays />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
