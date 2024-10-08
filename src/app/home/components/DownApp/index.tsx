import AnimatedInview from "@/components/AnimatedInview.tsx";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(237, 102, 44, 1);
  padding: 80px 0 80px;
  font-family: var(--font-readex-pro);

  .desc-title {
    margin: 1.5rem 0;
    max-width: 319px;

    @media (max-width: 768px) {
      margin: 1.5rem 0 2.5rem;
    }
  }

  .box-down-app {
    gap: 16px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      img {
        scale: 1.2;
      }
    }
  }

  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      margin-bottom: 40px;
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
      width: 170px;
      height: 170px;
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

  @keyframes pulse {
    100% {
      opacity: 0;
      scale: 3;
    }
  }
`;

const PhoneGroup = styled.div`
  position: relative;
  width: 480px;
  height: 415px;
  z-index: 3;

  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
  }

  .dot-light-1,
  .dot-light-2,
  .dot-light-3,
  .dot-light-4,
  .dot-light-5,
  .phone-1,
  .phone-2,
  .phone-3 {
    position: absolute;

    @media (max-width: 768px) {
      scale: 0.8;
    }
  }

  .dot-light-1,
  .dot-light-2,
  .dot-light-3,
  .dot-light-4,
  .dot-light-5 {
    z-index: 4;
  }

  .dot-light-1 {
    top: 1%;
    left: 22%;
  }

  .dot-light-2 {
    bottom: 0;
    left: 40%;
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
    top: 35%;
    right: 4%;
  }

  .phone-1 {
    top: 0;
    left: -100px;
    z-index: 3;
    @media (max-width: 768px) {
      left: -120px;
    }
  }

  .phone-2 {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    @media (max-width: 768px) {
      left: -30px;
      transform: none;
    }
  }

  .phone-3 {
    top: -40px;
    right: -123px;
    z-index: 1;

    @media (max-width: 768px) {
      right: -133px;
    }
  }
`;

const DownApp = () => {
  const spans = Array.from({ length: 4 }, (_, i) => (
    <span key={i} style={{ "--i": i + 1 } as React.CSSProperties}></span>
  ));

  return (
    <Wrapper>
      <div className="container">
        <Row className="mobile-reverse-column">
          <Col sm={9}>
            <AnimatedInview duration={0.5}>
              <h1 className="page-title">Get started now</h1>
            </AnimatedInview>

            <AnimatedInview duration={0.6}>
              <p className="desc-title">
                Join the GrabWay community and turn every journey into an
                earning opportunity. Don’t miss out—start earning extra income
                today through the power of blockchain and decentralized
                technology.
              </p>
            </AnimatedInview>

            <AnimatedInview duration={0.7}>
              <div className="box-down-app flex">
                <Link href="#">
                  <Image
                    src="/images/google-play.svg"
                    alt=""
                    width={120}
                    height={35}
                    quality={100}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/app-store.svg"
                    alt=""
                    width={120}
                    height={35}
                    quality={100}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/android-app.svg"
                    alt=""
                    width={100}
                    height={35}
                    quality={100}
                  />
                </Link>
              </div>
            </AnimatedInview>
          </Col>

          <Col sm={15}>
            <div className="relative right-content">
              <PhoneGroup>
                <Image
                  className="dot-light-1"
                  src="/images/icons/light-dot-1.svg"
                  width={24}
                  height={24}
                  alt=""
                />

                <Image
                  className="dot-light-2"
                  src="/images/icons/light-dot-1.svg"
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

                <Image
                  src="/images/down/phone-1.png"
                  width={447}
                  height={399}
                  alt=""
                  className="phone-1"
                  quality={100}
                />

                <Image
                  src="/images/down/phone-2.png"
                  width={453}
                  height={405}
                  alt=""
                  className="phone-2"
                  quality={100}
                />

                <Image
                  src="/images/down/phone-3.png"
                  width={467}
                  height={417}
                  alt=""
                  className="phone-3"
                  quality={100}
                />
              </PhoneGroup>

              <div className="pulse">{spans}</div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default DownApp;
