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
    <div className="base__container">
    <div className="base__decor-item base__decor-item--1">
      <img loading="lazy" src="img/base/decor1.png" alt="Decor Image" />
    </div>
    <div className="base__decor-item base__decor-item--2">
      <img loading="lazy" src="img/base/decor2.png" alt="Decor Image" />
      <img loading="lazy" src="img/base/decor-3.svg" alt="Decor Image" />
    </div>
    <div data-watch-threshold="0.6" data-watch-once data-watch className="base__header mt-[15vh]">
      <h2 className="base__header-title">
        <span>T</span><span>o</span><span>N</span><span>P</span><span>O</span><span>K</span><span>E</span><i></i>
      </h2>
      <div className="base__header-label">Telegram Web App</div>
    </div>
    <div className="base__items">
      <div className="base__item item-base">
        <div className="item-base__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div data-watch-threshold="0.8" data-watch-once data-watch className="item-base__image">
          <span>Wow
            {/* That's quite <br />
            the combo! */}
          </span>
          <img src="img/base/01.svg" alt="Icon" />
        </div>
      </div>
      <div className="base__item item-base">
        <div className="item-base__text">
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
        <div data-watch-threshold="0.8" data-watch-once data-watch className="item-base__image">
          <span>
            {/* We've already done <br />
            (and won) a lot! */}
            Interesting
            </span>
          <img src="img/base/02.svg" alt="Icon" />
        </div>
      </div>
      <div className="base__item item-base">
        <div className="item-base__text">
          <span>
            <span>
              {/* Seen support from top Base executives, KYC'd to Coinbase,
              and receiver of */}
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            </span>
          </span>
          <span><span className="no-wrap">a grant</span> <i></i></span>
          <span><span>from Coinbase.</span></span>
        </div>
        <div data-watch-threshold="0.8" data-watch-once data-watch className="item-base__image">
          <span>Yes that's right!</span>
          <img src="img/base/03.svg" alt="Icon" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default WhatTonpokePage;
