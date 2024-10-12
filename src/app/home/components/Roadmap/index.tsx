import AnimatedInview from "@/components/AnimatedInview.tsx";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5rem 1rem;
  min-height: 670px;
  color: rgba(255, 255, 255, 0.8);

  .hover-card {
    position: relative;
    transition: max-height 0.5s ease;
    max-height: 220px;
    overflow: hidden;
  }

  .hover-card ul {
    transition: all 0.5s ease;
    transform: translateY(20px);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  .hover-card:hover {
    max-height: 1000px;
  }

  .hover-card:hover ul {
    transform: translateY(0);
    opacity: 1;
    max-height: 100%;
  }

  @media (max-width: 768px) {
    .hover-card:hover {
      max-height: 1000px;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: #01030e;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  width: 100%;
  cursor: pointer;
  border: 1px solid #8080808c;
  @media (min-width: 768px) {
    width: 25%;
  }
`;

const FlagIcon = styled.div<{ active: boolean }>`
  height: 66px;
  width: 80px;
  margin-bottom: 1.5rem;
  img {
    filter: ${(props) => (props.active ? "none" : "grayscale(100%)")};
  }
`;

const PhaseTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  font-weight: 400;
  flex: 1;
`;

const CardTitle = styled.h4`
  color: #36ef99c3;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-weight: 400;
  display: flex;
  word-spacing: 0.3rem;
`;

const CardTitleIndicator = styled.div`
  width: 10px;
  height: 16px;
  background-color: #36ef99;
  margin-right: 0.75rem;
  margin-top: 0.375rem;
  flex-shrink: 0;
`;

const CardTitleText = styled.div<{ index: number }>``;

const PointsList = styled.ul`
  list-style-type: disc;
  list-style-position: outside;
  space-y: 0.5rem;
  padding-left: 1.25rem;
`;

const Point = styled.li`
  color: #b2b2b2;
`;

const Roadmap = () => {
  const roadmapData = [
    {
      phase: "PHASE 1",
      title: "SYSTEM FOUNDATION (COMPLETED)",
      points: [
        "Successfully built and launched the TonFree platform, providing a solid infrastructure for user engagement.",
        "Enabled users to claim TONFree through a variety of activities, including:",
        "Farming – Earn rewards by participating in free mode/ Premium mode/ VIP mode.",
      ],
      active: true,
    },
    {
      phase: "PHASE 2",
      title: "NFT & STAKING INTEGRATION (IN PROGRESS)",
      points: [
        "Launched the exclusive TONFREE NFT collection, allowing users to collect unique, valuable digital assets.",
        "Rolled out the Take Node feature, giving users the opportunity to stake their TONFree and earn passive rewards",
      ],
      active: false,
    },
    {
      phase: "PHASE 3",
      title: "NFT GAMING & ENHANCED FEATURES (IN PROGRESS)",
      points: [
        "Developing an engaging NFT-based battle game where users can compete using their NFTs in PvP combat.",
        "Introducing peer-to-peer (P2P) asset transfer functionality, allowing direct exchanges between users within the TONFREE ecosystem.",
      ],
      active: false,
    },
    {
      phase: "PHASE 4",
      title: "EXCHANGE LISTINGS & MARKET EXPANSION (PLANNED)",
      points: [
        "Expand the ecosystem and foster strategic partnerships to strengthen collaboration across multiple platforms and industries.",
        "List $TONFREE on top-tier centralized exchanges (CEX) ensuring wider market access and liquidity for our users.",
        "List $TONFREE on top-tier centralized exchanges (CEX) ensuring wider market access and liquidity for our users.",
        "List $TONFREE on top-tier centralized exchanges (CEX) ensuring wider market access and liquidity for our users.",
      ],
      active: false,
    },
  ];

  return (
    <Container id="roadmap">
      <AnimatedInview duration={1}>
        <Title>Roadmap</Title>
      </AnimatedInview>
      <FlexContainer>
        {roadmapData.map((item, index) => (
          <Card key={index} className="hover-card">
            <div className="flex mb-4 flex-col">
              <FlagIcon active={item.active}>
                <img src="/images/icons/active-flag.png" alt="" />
              </FlagIcon>
              <PhaseTitle>{item.phase}</PhaseTitle>
            </div>
            <CardTitle>
              <CardTitleIndicator />
              <CardTitleText index={index}>{item.title}</CardTitleText>
            </CardTitle>
            <PointsList>
              {item.points.map((point, i) => (
                <Point key={i}>{point}</Point>
              ))}
            </PointsList>
          </Card>
        ))}
      </FlexContainer>
    </Container>
  );
};

export default Roadmap;
