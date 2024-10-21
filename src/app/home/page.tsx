"use client";
import styled from "styled-components";
import HomeSection from "./components/HomePage";
import WhatTonpokePage from "@/app/home/components/WhatTonpoke";
import TokenPage from "@/app/home/components/Play";
import Roadmap from "@/app/home/components/Roadmap";
import Roadmap2 from "@/app/home/components/Roadmap2";

const Wrapper = styled.div`
  width: 100%;
  color: #fff;
  background: url("/images/home/sky.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed; /* Fix the background image to the screen */
`;

const HomePage = () => {
  return (
    <Wrapper>
      <HomeSection />

      <WhatTonpokePage />

      <TokenPage />

      <Roadmap2 />
    </Wrapper>
  );
};

export default HomePage;
