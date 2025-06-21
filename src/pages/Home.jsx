import React from "react";
import MainLayout from "../components/MainLayout";
import Hero from "../components/Hero";
import Notification from "../components/Notification";
import Genesis from "../components/Genesis";
import Spotlight from "../components/Spotlight";
import Bulletin from "../components/Bulletin";
import OurGems from "../components/OurGems";
import Principal from "../components/Principal";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Notification />
      <Genesis />
      <Principal />
      <Spotlight />
      <Bulletin />
      <OurGems />
    </MainLayout>
  );
};

export default Home;
