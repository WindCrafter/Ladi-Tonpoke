import styled from "styled-components";
import ItemFeature from "./ItemFeature";
import { listFeature } from "@/config";
import { Col, Row } from "antd";
import Image from "next/image";
import { Flex } from "@/components/Box";
import AnimatedInview from "@/components/AnimatedInview.tsx";

const Wrapper = styled.div`
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 1rem 0 80px;
  }

  .box-container {
    background: radial-gradient(
      81.96% 81.96% at 50% 50%,
      #a6dfc7 0%,
      #6bb393 100%
    );
    padding: 60px 103px;

    border-radius: 80px;
    width: 100%;
    height: 700px;
    z-index: 2;

    @media (max-width: 768px) {
      padding: 32px 44px;
      height: auto;
      border-radius: 40px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        81.96% 81.96% at 50% 50%,
        #a6dfc7 0%,
        #6bb393 100%
      );
      border-radius: 80px;
      opacity: 0.25;

      z-index: -1;
      top: 36px;
      left: 28px;

      @media (max-width: 768px) {
        border-radius: 40px;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 30px);
      }
    }
  }

  .title {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
    text-align: left;
    margin: 1rem 0 2rem;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 40px;
      line-height: 48px;
    }
  }

  .list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 800px;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      gap: 20px;

      img {
        width: 72px;
        height: 72px;
      }
    }
  }

  .phone-image {
    position: absolute;
    bottom: -35px;
    right: -72px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const FeaturePage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="box-container relative">
          <AnimatedInview duration={0.7}>
            <p className="title">WHY US?</p>
          </AnimatedInview>

          <AnimatedInview duration={0.8}>
            <h1>Outstanding features</h1>
          </AnimatedInview>

          <Flex>
            <div className="list-item">
              <Row gutter={[20, 40]}>
                {listFeature.map((item, index) => (
                  <Col sm={12} key={index}>
                    <ItemFeature index={index + 1} item={item} />
                  </Col>
                ))}
              </Row>
            </div>
          </Flex>
          <Image
            className="phone-image"
            src="/images/feature/phone.svg"
            width={480}
            height={535}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturePage;
