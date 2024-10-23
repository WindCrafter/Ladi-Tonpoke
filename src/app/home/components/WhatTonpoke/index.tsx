import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import useIsMobile from "@/hooks/useIsMobile";

const Wrapper = styled.div`
  background: var(--black-bg);
  width: 100%;
  min-height: 700px;
  padding: 5rem 0;

  .list-item-box {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    margin-top: 2rem;
  }

  .item-box {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title-box {
    position: relative;

    h1 {
      color: rgba(255, 255, 255, 0.8);
      position: absolute;
      top: 40%;
      left: 47%;
      transform: translate(-50%, -50%);
      font-weight: 400;
    }
  }

  .desc {
    margin-top: 4rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .coinLogo { 
  width: 120px,
  height: auto
  }
`;
const WhatTonpokePage = () => {
  const container = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const outImageScrollLeftX = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [isMobile ? -200 : -400, 0]
  );

  const outImageScrollRightX = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [isMobile ? 200 : 400, 0]
  );

  const midImageScrollY = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    [isMobile ? 460 : 860, 0]
  );

  const downScrollY = useTransform(scrollYProgress, [0.4, 0.55], [200, 0]);
  const outImageLeftX = useSpring(outImageScrollLeftX, {
    stiffness: 50,
    damping: 20,
  });

  const outImageRightX = useSpring(outImageScrollRightX, {
    stiffness: 50,
    damping: 20,
  });

  const midImageY = useSpring(midImageScrollY, { stiffness: 50, damping: 20 });

  const downX = useSpring(downScrollY, { stiffness: 50, damping: 20 });

  return (
    <Wrapper ref={container} id="about" className=" mt-[48px] lg:mt-[200px]">
      <div className="flex items-center flex-col px-[5vw] relative">
        <img src="/images/TonPoke.png" className="w-[10vw] h-auto absolute z-10 min-w-[48px] min-h-[48px] right-[10vw] -top-24"></img>
        <h1 className="text-purple-800 text-[48px] z-20 text-center">What is Tonpoke?</h1>
        <img src="/images/RareBox.png" className="w-[120px] h-auto absolute z-10 left-[10vw] -top-24"></img>

        {/* <img src="/images/what-tonpoke/title-bg.png" alt="" className="-mt-[20px] " /> */}
        <p className=" text-purple-500 text-[16px] z-20 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          tempore et ex libero aut assumenda consectetur tenetur illum velit eum
          fuga aspernatur fugit, provident incidunt dolorum, laboriosam tempora?
          Pariatur voluptatem, est numquam atque dignissimos suscipit quas qui
          perferendis quam quisquam commodi soluta rem repudiandae veniam
          officia sequi voluptate sint hic!
        </p>
      </div>



      <div className="flex md:flex-row flex-col items-center justify-center overflow-hidden mt-2">
        <motion.div style={{ x: outImageLeftX }} className="item-box">
          <img width={300} src="/images/game-screen.png" alt="" />
          <p className="text-purple-800 text-[24px] md:text-[48px]">Content 1</p>
        </motion.div>

        <motion.div style={{ y: midImageY }} className="item-box">
          <img width={300} src="/images/game-screen.png" alt="" />
          <p className="text-purple-800 text-[24px] md:text-[48px]">Content 2</p>
        </motion.div>

        <motion.div style={{ x: outImageRightX }} className="item-box">
          <img width={300} src="/images/game-screen.png" alt="" />
          <p className="text-purple-800 text-[24px] md:text-[48px]">Content 3</p>
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default WhatTonpokePage;
