"use client";
import styled from "styled-components";
import HomeSection from "./components/HomePage";
import AboutPage from "@/app/home/components/About";

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

      <AboutPage />

      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
    </Wrapper>
  );
};

export default HomePage;
