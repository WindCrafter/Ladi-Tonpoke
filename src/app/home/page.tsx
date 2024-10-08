"use client";
import { Box } from "@/components/Box";
import styled from "styled-components";
import HomeSection from "./components/HomePage";
import CarSlider from "./components/CarSlider";
import OurStory from "./components/OurStory";
import FeaturePage from "./components/Feature";
import HowToPlay from "./components/HowToPlay";
import NFTCars from "./components/NFTCars.tsx";
import DownApp from "./components/DownApp";
import Roadmap from "./components/Roadmap";
import Teams from "./components/Teams";
import Tokenomics from "./components/Tokenomics";

const Wrapper = styled.div`
  width: 100%;
  color: #fff;

  .page {
    background-color: green;
    width: 100%;
    height: 100vh;
    border: 1px solid red;
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <HomeSection />

      {/* <CarSlider /> */}

      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>

      {/* 
      <OurStory />

      <FeaturePage />

      <HowToPlay />

      <NFTCars />

      <DownApp />

      <Roadmap />

      <Tokenomics />

      <Teams /> */}
    </Wrapper>
  );
};

export default HomePage;
