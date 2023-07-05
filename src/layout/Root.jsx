import React from "react";
import { Outlet } from "react-router-dom";
import HeroLogoArea from "../components/heroLogoArea/HeroLogoArea";
import HeroTopBar from "../components/heroTopBar/HeroTopBar";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <HeroTopBar />
      <HeroLogoArea />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
