"use client";
import styled from "styled-components";
import HomeSection from "./components/HomePage";
import WhatTonpokePage from "@/app/home/components/WhatTonpoke";
import TokenPage from "@/app/home/components/Play";
import Roadmap from "@/app/home/components/Roadmap";
import Roadmap2 from "@/app/home/components/Roadmap2";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";
const Wrapper = styled.div`
  width: 100%;

`;

const HomePage = () => {
  return (
    <Wrapper>
    
        <Background></Background>
        
      <HomeSection />

      <WhatTonpokePage />

      <TokenPage />

      <Roadmap2 />
      
    </Wrapper>
  );
};

export default HomePage;
