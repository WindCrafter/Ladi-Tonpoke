import AnimatedInview from "@/components/AnimatedInview.tsx";
import { menuHeader } from "@/config/menuHeader";
import { Flex } from "antd";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(80, 66, 209, 1);
  padding: 80px 0 0;
  overflow: hidden;

  .title {
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
    text-align: center;
    margin: 0.5rem 0;
  }

  .name-roadmap {
    font-size: 14px;
    line-height: 28px;
    text-align: center;
  }

  .description {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    @media (max-width: 768px) {
      text-align: left;
    }
  }

  .roapmap-list {
    justify-content: space-between;
    position: relative;
    padding-bottom: 350px;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding-bottom: 0;
    }

    .line {
      background: rgba(201, 76, 19, 1);
      height: 8px;
      border-radius: 4px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 36px;
      width: calc(100% - 200px);
      z-index: 1;

      @media (max-width: 768px) {
        height: 84%;
        width: 8px;
        left: 37px;
      }
    }
  }

  .item-content {
    width: 100%;
    position: relative;
    z-index: 2;
    justify-content: flex-start;

    @media (max-width: 768px) {
      flex-direction: row;
      max-width: 100%;
      align-items: flex-start;
    }
  }

  .content-map {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;
      margin-bottom: 2.5rem;
    }
  }

  .page-title {
    margin-bottom: 2rem;
  }

  .tree-image {
    position: absolute;
    right: 0;
    bottom: -20px;

    @media (max-width: 768px) {
      width: 83px;
      height: 112.912px;
      bottom: 70px;
      right: 20px;
    }
  }

  .road-image {
    position: absolute;
    left: 90px;
    bottom: -40px;
    margin-top: 78px;

    @media (max-width: 768px) {
      position: unset;
      margin-top: 0;
      padding-bottom: 30px;
    }

    .car-image {
      position: absolute;
      top: -96px;
      left: -158px;
      transform: rotate(-10.868deg);

      @media (max-width: 768px) {
        display: none;
      }
    }

    .tree-image-bottom {
      @media (max-width: 768px) {
        display: none;
      }
    }

    .mobile-road {
      display: none;
      @media (max-width: 768px) {
        display: block;
        position: relative;
        transform: translateX(-20%);
      }
    }
  }
`;

const roadmapData = [
  {
    phase: "Phase 1",
    name: "Building Foundations",
    image: "/images/feature/item-1.svg",
    descriptions: [
      "Establish Core Team",
      "Engage with Community",
      "Conduct Initial Research",
      "Develop Mechanism",
    ],
  },
  {
    phase: "Phase 2",
    name: "Product Development",
    image: "/images/feature/item-2.svg",
    descriptions: [
      "Design interface",
      "Develop the platform",
      "Create NFT Cars",
      "Integrate Blockchain",
      "Build the Marketplace",
    ],
  },
  {
    phase: "Phase 3",
    name: "Testing",
    image: "/images/feature/item-3.svg",
    descriptions: [
      "Launch Testnet",
      "Conduct Testing",
      "Gather Community Feedback",
    ],
  },
  {
    phase: "Phase 4",
    name: "Final Preparations",
    image: "/images/feature/item-4.svg",
    descriptions: [
      "Finalize Development",
      "Security Audits",
      "Develop Marketing Strategy",
    ],
  },
  {
    phase: "Phase 5",
    name: "Scaling & Growth",
    image: "/images/feature/item-5.svg",
    descriptions: [
      "Start User Acquisition",
      "Develop Partnerships",
      "Initiate Global Expansion",
    ],
  },
];

const Roadmap = () => {
  return (
    <Wrapper id={menuHeader[2].id}>
      <div className="container relative">
        <AnimatedInview duration={0.7}>
          <p className="page-title center">Roadmap</p>
        </AnimatedInview>

        <div className="flex w-100 roapmap-list">
          <div className="line" />
          {roadmapData.map((item, index) => (
            <div key={index} className="item-content center column">
              <Image
                src={item.image}
                width={72}
                height={72}
                quality={100}
                alt=""
              />
              <div className="content-map">
                <p className="title">{item.name}</p>
                <ul>
                  {item.descriptions.map((desc, idx) => (
                    <li key={idx} className="description">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <Image
          className="tree-image"
          src="/images/roadmap/tree.svg"
          width={173}
          height={236}
          alt=""
        />

        <div className="road-image">
          <Image
            className="car-image"
            src="/images/roadmap/car.png"
            width={328}
            height={285}
            quality={100}
            alt=""
          />
          <Image
            className="tree-image-bottom"
            src="/images/roadmap/road.png"
            width={1134}
            height={311}
            quality={100}
            alt=""
          />
          <Image
            className="mobile-road"
            src="/images/roadmap/mobile-road.svg"
            width={734}
            height={207}
            quality={100}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Roadmap;
