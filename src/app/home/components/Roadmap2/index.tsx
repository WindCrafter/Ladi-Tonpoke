import { socialLinks } from "@/config";
import styled from "styled-components";


function Roadmap2() {
  const Divider = styled.div`
  width: 100%;
  margin: 20px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45%;
    height: 1px;
    background-color: rgba(255, 255, 255, 1);
    z-index: 1;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  img {
    z-index: 2;
    position: relative;
  }
`;
  return (
    <div className="road-map__container z-50 !pt-[15vh]">
    <h2 data-watch-threshold="0.5" data-watch-once data-watch className="road-map__title z-10">
      <span>R</span><span>O</span><span>A</span><span>D</span><span>M</span><span>A</span><span>P</span>
    </h2>
    <div data-watch-threshold="0.5" data-watch-once data-watch data-prlx-parent className="road-map__image !z-20">
      <img loading="lazy" data-prlx src="img/roadmap/01.png" alt="Island with Cats" />
    </div>
    <div data-watch-threshold="0.5" data-watch-once data-watch className="road-map__steps steps-road-map">
      <div className="steps-road-map__row">
        <div data-watch-threshold="0.5" data-watch-once data-watch className="steps-road-map__row-item item-steps-road-map">
          <h3 className="item-steps-road-map__title">
            <span>Phase 1</span>
          </h3>
          <div className="item-steps-road-map__text">
            <p>
              <span>Lorem ipsum dolor sit amet, </span>
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
        </div>
        <div className="steps-road-map__row-road">
          <div className="steps-road-map__row-road-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="879" height="164" viewBox="0 0 879 164" fill="none">
              <path d="M0 1H759.102C917.633 0.999026 917.633 163 759.102 163" stroke="black" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="steps-road-map__row">
        <div className="steps-road-map__row-road">
          <div className="steps-road-map__row-road-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="566" height="164" viewBox="0 0 566 164" fill="none">
              <path d="M566 1H77.5115C-24.5038 0.999026 -24.5038 163 77.5115 163" stroke="black" stroke-width="2" />
            </svg>
          </div>
        </div>
        <div data-watch-threshold="0.5" data-watch-once data-watch className="steps-road-map__row-item item-steps-road-map">
          <h3 className="item-steps-road-map__title">
            <span>Phase 2</span>
          </h3>
          <div className="item-steps-road-map__text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>
      <div className="steps-road-map__row">
        <div data-watch-threshold="0.5" data-watch-once data-watch className="steps-road-map__row-item item-steps-road-map">
          <h3 className="item-steps-road-map__title">
            <span>Phase 3
               {/* — <br />
              Mochi’s own NFT <br />
              Game. */}
              </span>
          </h3>
          <div className="item-steps-road-map__text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
            <p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</span>
            </p>
          </div>
        </div>
        <div className="steps-road-map__row-road">
          <div className="steps-road-map__row-road-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="203" height="171" viewBox="0 0 203 171" fill="none">
              <path d="M202 171V58.5C202 27.0198 176.48 1.5 145 1.5H0" stroke="black" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="steps-road-map__row">
        <div className="steps-road-map__row-road"></div>
        <div data-watch-threshold="0.5" data-watch-once data-watch className="steps-road-map__row-item item-steps-road-map">
          <h3 className="item-steps-road-map__title">
            <span>Phase 4</span>
          </h3>
          <div className="item-steps-road-map__text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-screen bg-purple-400">
      <div className="flex justify-between w-[100px] align-center">
        <div className="">
          <img src="/images/logo.png" alt="Tonpoke Explore Logo" />
        </div>

        <div className="col-2">
          <div className="box-items">
            <p>Token</p>
            <p>Gameplay</p>
            <p>Feature</p>
            <p>Rank</p>
          </div>
        </div>
      </div>

      <Divider>
        <img src="/images/icons/ball.png" alt="Pokeball Icon" />
      </Divider>
      <div className="flex justify-between w-100">
        <p>Copyright 2024</p>

        <div className="flex gap-6">
          {socialLinks.map((item) => (
            <a
              className="hover"
              href={item.link}
              key={item.name}
              target="_blank"
              rel="noreferrer"
            >
              <img width={50} src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </div> */}
    </div>
 
  </div>
  );
}

export default Roadmap2;
