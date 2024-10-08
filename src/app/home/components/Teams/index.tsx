import styled from "styled-components";
import Slider from "react-slick";
import Member from "./Member";
import { teamList } from "@/config";
import SliderArrow from "@/components/SliderArrow";
import Image from "next/image";
import AnimatedInview from "@/components/AnimatedInview.tsx";
import { motion } from "framer-motion";
import { width } from "styled-system";

const Wrapper = styled.div`
  background: var(--Green-Green-300, #56bd93);
  padding: 80px 0 143px;

  .wrapper {
    margin: 0 16px;
    height: 100%;
  }

  .slider-container {
    margin-top: 44px;
  }

  .slick-dots {
    bottom: -60px;

    li {
      position: relative;
    }

    .slick-active > div {
      width: 14px;
      height: 14px;
    }
  }

  .partners {
    margin-top: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-top: 5rem;

      flex-direction: column;
    }

    & > p {
      color: var(--White, #fff);
      font-family: var(--font-readex-pro);
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 56px; /* 116.667% */
      letter-spacing: -0.2px;
      margin-bottom: 44px;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 32px;
        line-height: 38px;
        margin-bottom: 2.5rem;
      }
    }

    .name-partner {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      white-space: nowrap;

      .partner {
        width: 288px;
        height: 74px;

        &.border-left-right {
          border-left: 1px solid rgba(233, 237, 247, 1);
          border-right: 1px solid rgba(233, 237, 247, 1);

          @media (max-width: 768px) {
            border: none;
          }
        }
      }

      .row-partners {
        width: 100%;

        @media (max-width: 768px) {
          flex-direction: column;
          gap: 25px;
        }

        .partner {
          padding-top: 20px;
        }

        &.bottom-line {
          border-bottom: 1px solid rgba(233, 237, 247, 1);

          @media (max-width: 768px) {
            border: none;
          }

          .partner {
            padding-bottom: 20px;
            padding-top: 0;

            @media (max-width: 768px) {
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }
`;

const MarqueeAnimation = styled.div`
  overflow: hidden;
  display: flex;
  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 100vw;
  .marquee {
    display: flex;
    padding: 10px 0;
    animation: marquee 30s infinite linear;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const ItemWrapper = styled.div`
  width: 289.628px;
  height: 106.212px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15.918px;
  border: 0.936px solid #fdfdfd;
  background: #fff;
  box-shadow: 0px 3.745px 3.745px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  margin: 0 10px;
  overflow: hidden;

  img {
    object-fit: contain;
  }

  @media (max-width: 524px) {
    width: 225.628px;
  }
`;

const CustomDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Teams = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderArrow isRight />,
    prevArrow: <SliderArrow />,
    customPaging: () => <CustomDot />,
    arrows: true,
    dots: true,
    draggable: true,
    infinite: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  const data = [
    {
      src: "/images/partners/logo-1.svg",
      width: 289.628,
      height: 106.212,
    },
    {
      src: "/images/partners/logo-2.svg",
      width: 189.628,
      height: 76.212,
    },
    {
      src: "/images/partners/logo-3.svg",
      width: 229,
      height: 100,
    },
    {
      src: "/images/partners/logo-4.svg",
      width: 329.628,
      height: 146.212,
    },
    {
      src: "/images/partners/logo-png-0.png",
      width: 229.628,
      height: 50.212,
    },
    {
      src: "/images/partners/logo-png-1.png",
      width: 339.628,
      height: 160.212,
    },
    {
      src: "/images/partners/logo-png-2.png",
      width: 190,
      height: 50,
    },
  ];

  const logoItems = [
    data.map((item, index) => (
      <ItemWrapper key={`svg-${index}`}>
        <Image {...item} alt="logo" />
      </ItemWrapper>
    )),
  ];

  return (
    <Wrapper>
      <div className="container">
        <AnimatedInview duration={0.7}>
          <p className="page-title center">Meet Our Team</p>
        </AnimatedInview>

        <div className="container">
          <div className="slider-container">
            <Slider {...settings}>
              {teamList.map((item, index) => (
                <div key={index}>
                  <div className="wrapper">
                    <Member {...item} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="partners">
            <p>Investors & Partners</p>

            <MarqueeAnimation>
              <div className="marquee">{logoItems} </div>
              <div className="marquee">{logoItems} </div>
              <div className="marquee">{logoItems} </div>
            </MarqueeAnimation>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Teams;
