import AnimatedInview from "@/components/AnimatedInview.tsx";
import { Box } from "@/components/Box";
import { menuHeader } from "@/config/menuHeader";
import { Col, Row } from "antd";
import { useInView, motion } from "framer-motion";

import Image from "next/image";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(237, 102, 44, 1);
  font-family: var(--font-readex-pro);
  padding: 80px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 50px 0 80px;
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.20000000298023224px;
    text-align: left;
    margin: 1rem 0 1.5rem;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 40px;
      line-height: 48px;
      margin: 10px 0 1.5rem;
    }
  }

  .desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    max-width: 394px;
    width: 100%;

    &:last-child {
      margin-top: 30px;
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      z-index: 2;
      position: relative;
    }
  }

  .top-title {
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  .pulse {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    z-index: 1;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      animation: pulse 4s ease-out infinite;
      animation-delay: calc(var(--i) * 0.8s);
    }
  }

  .light-dot {
    position: relative;

    .dot-light-1,
    .dot-light-2,
    .dot-light-3,
    .dot-light-4,
    .dot-light-5 {
      position: absolute;
      z-index: 4;
    }

    .dot-light-1 {
      top: 16%;
      left: 10%;
    }

    .dot-light-2 {
      top: 30%;
      right: 20%;
    }

    .dot-light-3 {
      top: 40%;
      left: 0;
    }

    .dot-light-4 {
      top: 55%;
      right: 0;
    }

    .dot-light-5 {
      bottom: 15%;
      right: 20%;
    }

    @media (max-width: 768px) {
      img:not(.phone-image) {
        scale: 0.7;
      }
    }
  }

  .phone-image {
    @media (max-width: 768px) {
      width: 240px;
      height: 362.227px;
    }
  }

  @keyframes pulse {
    100% {
      opacity: 0;
      scale: 3;
    }
  }
`;

const OurStory = () => {
  const spans = Array.from({ length: 4 }, (_, i) => (
    <span key={i} style={{ "--i": i + 1 } as React.CSSProperties}></span>
  ));

  //  const isMobile = useIsMobile(mobileWith)

  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Wrapper id={menuHeader[1].id}>
      <div className="container">
        <Row className="mobile-reverse-column">
          <Col sm={12}>
            <div>
              <AnimatedInview duration={0.7}>
                <p className="top-title">GRABWAY</p>
              </AnimatedInview>

              <AnimatedInview duration={0.8}>
                <h1>Our story</h1>
              </AnimatedInview>

              <AnimatedInview duration={0.9}>
                <p className="desc-title desc">
                  GrabWay was created to provide drivers, gig workers, and
                  frequent travelers with the opportunity to monetize their
                  daily commutes. By harnessing advanced blockchain technology
                  and GPS tracking, GrabWay transforms ordinary travel into a
                  rewarding experience.
                </p>
                <p className="desc-title desc">
                  Whether you&apos;re driving for work or moving around the
                  city, GrabWay allows you to convert your movements into
                  valuable rewards, offering a seamless and innovative way to
                  earn as you go.
                </p>
              </AnimatedInview>
            </div>
          </Col>
          <Col sm={12}>
            <div className="relative right-content">
              <div className="light-dot">
                <Image
                  className="dot-light-1"
                  src="/images/icons/light-dot-1.svg"
                  width={24}
                  height={24}
                  alt=""
                />

                <Image
                  className="dot-light-2"
                  src="/images/icons/light-dot-4.svg"
                  width={16}
                  height={16}
                  alt=""
                />

                <Image
                  className="dot-light-3"
                  src="/images/icons/light-dot-2.svg"
                  width={13}
                  height={13}
                  alt=""
                />

                <Image
                  className="dot-light-4"
                  src="/images/icons/light-dot-2.svg"
                  width={10}
                  height={10}
                  alt=""
                />

                <Image
                  className="dot-light-5"
                  src="/images/icons/light-dot-3.svg"
                  width={10}
                  height={10}
                  alt=""
                />

                <Box zIndex={3} position="relative">
                  <Image
                    className="phone-image"
                    src="/images/our-story/phone.png"
                    width={425}
                    height={642}
                    alt=""
                    quality={100}
                  />
                </Box>
              </div>

              <div className="pulse">{spans}</div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default OurStory;
