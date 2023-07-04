import React from "react";
import { Outlet } from "react-router-dom";
import HeroLogoArea from "../components/heroLogoArea/HeroLogoArea";
import HeroTopBar from "../components/heroTopBar/HeroTopBar";
import Navbar from "../shared/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <HeroTopBar />
      <HeroLogoArea />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
