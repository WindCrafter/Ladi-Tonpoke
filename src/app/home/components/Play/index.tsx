import AnimatedInview from "@/components/AnimatedInview.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5rem 0;

  .title {
    font-size: 3rem;
    text-align: center;
    font-weight: 600;
  }

  .box-right {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 2.5rem;
  }

  .bottom-image {
    position: absolute;
    bottom: 0;
    width: 100px;
    right: 0;
  }

  .tele-qr {
    width: 300px;
    height: 300px;
    border-radius: 10px;
  }

  .box-poke-list {
    margin-top: 4rem;
    gap: 4rem;
  }

  .box-wrapper {
    margin: 6rem 0 8rem;
  }

  .box-poke {
    position: relative;
    background: url("/images/poke-bg.png") no-repeat;
    background-position: center;
    background-size: contain;
    height: 500px;
    width: 300px;

    @keyframes bounceY {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .poke {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        will-change: transform;
        animation: bounceY 3s infinite ease-in-out;
      }
    }

    @keyframes glow {
      0%,
      100% {
        filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.5))
          drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))
          drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))
          drop-shadow(0 0 4px rgba(255, 255, 255, 0.5));
      }
      50% {
        filter: drop-shadow(0 0 2px rgba(255, 255, 255, 1))
          drop-shadow(0 0 4px rgba(255, 255, 255, 1))
          drop-shadow(0 0 6px rgba(255, 255, 255, 1))
          drop-shadow(0 0 8px rgba(255, 255, 255, 1));
      }
    }

    .star-list {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-50% + 130px));
      will-change: transform;

      img {
        animation: glow 2s infinite ease-in-out;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        will-change: filter, transform;
      }
    }
  }

  .profit-boxs {
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
  background: url("/images/poke-slider.png") no-repeat;
  background-size: cover;
  background-position: center;

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
    will-change: transform;
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

const TokenPage = () => {
  const pokeData = [
    {
      imgSrc: "/images/character-2.png",
      stars: 1,
    },
    {
      imgSrc: "/images/character-2.png",
      stars: 2,
    },
    {
      imgSrc: "/images/character-2.png",
      stars: 3,
    },
  ];

  const logoItems = [
    Array.from({ length: 6 }).map((item, index) => (
      <ItemWrapper key={`svg-${index}`}>
        <img src={`/images/character/character-${index}.png`} alt="logo" />
      </ItemWrapper>
    )),
  ];

  const profitData = [
    { text: "Simple and Easy!" },
    { text: "Clear and Equitable" },
    { text: "Safe and Decentralized" },
    { text: "Highly Rewarding" },
  ];

  const ProfitBox = () => {
    return (
      <div className="profit-boxs">
        {profitData.map((item, index) => (
          <AnimatedInview key={index} duration={1}>
            <div className="flex align-center gap-3">
              <img
                className="rotate"
                width={30}
                src="/images/icons/tick-2.png"
                alt=""
              />
              <p>{item.text}</p>
            </div>
          </AnimatedInview>
        ))}
      </div>
    );
  };

  return (
    <Wrapper id="play">
      <div className="container relative">
        <AnimatedInview duration={1}>
          <p className="title center gap-4">
            <img width={60} src="/images/icons/package.png" alt="" />
            Play To Earn With Us
          </p>
        </AnimatedInview>
        <div className="box-wrapper mt-6 flex">
          <div className="box-left column flex  col-1">
            <img className="tele-qr" src="/images/qr.png" alt="" />
          </div>

          <div className="box-right  flex justify-between col-2">
            {ProfitBox()}

            <img width={350} src="/images/character-1.png" alt="" />
          </div>
        </div>

        {/* <div className="box-poke-list flex justify-center w-100">
          {pokeData.map((poke, index) => (
            <div key={index} className="box-poke">
              <div className="poke">
                <img width={220} src={poke.imgSrc} alt="" />
              </div>
              <div className="star-list flex gap-2">
                {Array.from({ length: poke.stars }).map((_, starIndex) => (
                  <img
                    key={starIndex}
                    width={50}
                    src="/images/icons/star.png"
                    alt=""
                  />
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <MarqueeAnimation>
        <div className="marquee">{logoItems} </div>
        <div className="marquee">{logoItems} </div>
        <div className="marquee">{logoItems} </div>
      </MarqueeAnimation>
    </Wrapper>
  );
};

export default TokenPage;
