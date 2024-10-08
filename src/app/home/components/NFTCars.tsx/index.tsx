/* eslint-disable @next/next/no-img-element */
import AnimatedInview from "@/components/AnimatedInview.tsx";
import { menuHeader } from "@/config/menuHeader";
import { socialLinks } from "@/config/socialLinks";
import { Col, Flex, Row } from "antd";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(80, 66, 209, 1);
  padding: 29px 0 90px;
  font-family: var(--font-readex-pro);

  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0 77px;
  }

  .list-item-box {
    &:last-child {
      position: relative;
      top: 61px;
      margin-left: 8px;
    }

    @media (max-width: 768px) {
      & > div:last-child {
        display: none;
      }
    }
  }

  .item-box {
    width: 192.16px;
    height: 211.37px;
    background: radial-gradient(
      97.36% 70.42% at 50% 45%,
      #ffffff 0%,
      #e1e8f5 56.43%
    );
    border-radius: 20px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      width: 168.137px;
      height: 184.951px;
      flex-shrink: 0;

      img {
        width: 90%;
      }
    }
  }

  .mobile-row {
    @media (max-width: 768px) {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .page-content {
    max-width: 500px;
    margin: 1rem 0;

    &:first-child {
      margin: 1rem 0;
    }
  }

  .top-title {
    color: rgba(208, 203, 246, 1);
    margin-bottom: 0.5rem;
    margin-top: 127px;

    @media (max-width: 768px) {
      margin-top: 97px;
    }
  }

  .social-list {
    gap: 24px;
    display: flex;
    margin-top: 2rem;

    @media (max-width: 768px) {
      justify-content: center;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  .right-content {
    margin-left: 2rem;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

const NFTCars = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const outImageScrollY = useTransform(scrollYProgress, [0.07, 0.3], [-660, 0]);
  const midImageScrollY = useTransform(scrollYProgress, [0.2, 0.4], [660, 0]);
  const outImageY = useSpring(outImageScrollY, { stiffness: 20, damping: 7 });
  const midImageY = useSpring(midImageScrollY, { stiffness: 20, damping: 10 });

  return (
    <Wrapper id={menuHeader[3].id} ref={container}>
      <div className="container">
        <Row>
          <Col sm={12} xs={24}>
            <Flex className="mobile-row">
              <motion.div style={{ y: outImageY }} className="list-item-box">
                <div className="item-box center">
                  <img src="/images/nft/car-1.png" alt="" />
                </div>
                <div className="item-box center">
                  <img src="/images/nft/car-2.png" alt="" />
                </div>
                <div className="item-box center">
                  <img src="/images/nft/car-1.png" alt="" />
                </div>
              </motion.div>

              <motion.div style={{ y: midImageY }} className="list-item-box">
                <div className="item-box center">
                  <img src="/images/nft/car-3.png" alt="" />
                </div>
                <div className="item-box center">
                  <img src="/images/nft/car-4.png" alt="" />
                </div>
                <div className="item-box center">
                  <img src="/images/nft/car-3.png" alt="" />
                </div>
              </motion.div>
            </Flex>
          </Col>

          <Col sm={12} xs={24}>
            <div className="right-content">
              <AnimatedInview duration={0.5}>
                <p className="top-title">COLLECTION</p>
              </AnimatedInview>
              <AnimatedInview duration={0.6}>
                <p className="page-title">NFT Cars</p>
              </AnimatedInview>
              <AnimatedInview duration={0.65}>
                <p className="page-content desc-title">
                  At the core of GrabWay is the innovative concept of NFT-based
                  vehicles, known as NTT Cars.
                </p>
              </AnimatedInview>
              <AnimatedInview duration={0.7}>
                <p className="page-content desc-title">
                  These digital assets are not just collectibles—they are your
                  gateway to earning rewards during your daily travels. Each NTT
                  Car is uniquely designed with varying levels of performance
                  and earning potential.
                </p>
              </AnimatedInview>
              <AnimatedInview duration={0.75}>
                <div className="social-list">
                  {socialLinks.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <Image src={item.icon} width={50} height={50} alt="" />
                    </Link>
                  ))}
                </div>
              </AnimatedInview>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default NFTCars;
