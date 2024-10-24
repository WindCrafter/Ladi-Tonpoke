import SpineBox from "@/app/home/components/HomePage/components/SpineBox";
import SpineAnimation from "@/app/home/components/HomePage/components/SpineBox";
import SpineComponent from "@/app/home/components/HomePage/components/SpineBox";
import { socialLinks } from "@/config";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`;

const LogoBox = styled(motion.div)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  will-change: transform;

  .logo {
    filter: drop-shadow(0px 30px 30px rgba(0, 0, 0, 1));
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
    z-index: 10;
  }
`;

const GrassBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: -100px;
  will-change: transform;
  user-select: none;
  pointer-events: none;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: -50%;
    z-index: 2;
    background: #111113;
    transform: translateY(-20px);
  }

  img {
    width: 100%;
  }
`;

const MountainBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0%;
  will-change: transform;
  user-select: none;
  pointer-events: none;
  img {
    width: 100%;
  }
`;

const HomePage = () => {
  const { scrollY } = useScroll();

  const logoY = useSpring(
    useTransform(scrollY, [0, 300], [0, 220], { clamp: false }),
    { stiffness: 100, damping: 20 }
  );
  const mountainY = useSpring(
    useTransform(scrollY, [0, 300], [0, -50], { clamp: false }),
    { stiffness: 100, damping: 20 }
  );
  const grassY = useSpring(
    useTransform(scrollY, [0, 300], [0, -100], { clamp: false }),
    { stiffness: 100, damping: 20 }
  );

  return (
    <Wrapper className="w-screen h-screen">
      <SpineBox
        spineDataUrl="/spine/main.json"
        initialAnimation="effect_loop"
        scale={0.5}
        backgroundColor={0x1099bb}
      />

      {/* <LogoBox style={{ y: logoY, x: "-50%" }}> */}
      <div className="w-screen h-screen flex items-center justify-center flex-col z-20 relative">
        <img className="logo w-[80vw] lg:w-[40vw] h-auto" src="/images/logo.png" alt="logo" />
        <div className="flex flex-row items-center gap-[16px]">
          {socialLinks.map((item) => (
            <a
              href={item.link}
              key={item.name}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 opacity-100  hover:translate-y-2"
            >
              <img width={50} src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
        <div className="w-full absolute ">


        </div>
      </div>

      {/* <MountainBox style={{ y: mountainY }}>
        <img src="/images/home/mountain.webp" alt="mountain" />
      </MountainBox> */}
      {/* 
      <GrassBox style={{ y: grassY }}>
        <img src="/images/home/grass.svg" alt="grass" />
      </GrassBox> */}
    </Wrapper>
  );
};

export default HomePage;
