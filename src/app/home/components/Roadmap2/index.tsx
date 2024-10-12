import AnimatedInview from "@/components/AnimatedInview.tsx";
import { roadmapItems } from "@/config";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5rem 0;
`;

const RoadmapContainer = styled.div`
  padding: 7rem 0 8rem;

  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
  }
`;

const RoadmapItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    top: 0;
    left: 0;
    transform: translateY(-50%);
    z-index: 1;

    @media (max-width: 768px) {
      width: 4px;
      height: 100%;
      top: 0;
      left: 100px;
      transform: translateX(-50%);
    }
  }

  &::after {
    position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    background: url("/images/icons/ball-2.png") no-repeat;
    background-size: contain;
    border-radius: 50%;
    z-index: 2;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 768px) {
      top: 50%;
      left: 100px;
      transform: translate(-50%, -50%);
    }
  }

  &:first-child::before {
    border-radius: 2px 0 0 2px;
  }

  &:last-child::before {
    border-radius: 0 2px 2px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
    width: 100%;
  }
`;

const YearWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("/images/icons/year.png") no-repeat;
  background-size: contain;
  background-position: center;
  padding: 5px 10px; /* Padding for better appearance */
  border-radius: 5px; /* Rounded corners */
  width: 290px; /* Width of the year */
  height: 80px; /* Height of the year */

  @media (max-width: 768px) {
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`;

const Year = styled.div`
  font-size: 30px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const RoadmapContent = styled.div`
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 20px;
  padding: 10px 10px 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    margin-left: calc(100px + 20px);
    width: calc(100% - 100px - 20px - 20px);
    border-radius: 0 6px 6px 0;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

const RoadmapContentItem = styled.li`
  padding: 5px 0;
  position: relative;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
`;

function Roadmap2() {
  return (
    <Wrapper id="roadmap">
      <div className="container">
        <AnimatedInview duration={1}>
          <Title>Roadmap</Title>
        </AnimatedInview>

        <RoadmapContainer>
          {roadmapItems.map((roadmapItem, index) => (
            <RoadmapItem key={index}>
              <YearWrapper>
                <Year>Phase {index + 1}</Year>
              </YearWrapper>
              <RoadmapContent>
                <ul>
                  {roadmapItem.item.map((content, index) => (
                    <RoadmapContentItem key={index}>
                      {content}
                    </RoadmapContentItem>
                  ))}
                </ul>
              </RoadmapContent>
            </RoadmapItem>
          ))}
        </RoadmapContainer>
      </div>
    </Wrapper>
  );
}

export default Roadmap2;
