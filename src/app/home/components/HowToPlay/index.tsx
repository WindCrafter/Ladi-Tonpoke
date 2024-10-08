import { Col, Row } from "antd";
import styled from "styled-components";
import InforCard from "./InforCard";
import { listPlayCards } from "@/config";

const Wrapper = styled.div`
  background: rgba(86, 189, 147, 1);
  padding: 80px 0 193px;

  @media (max-width: 768px) {
    padding: 44px 0 48px;
  }

  .page-title {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const HowToPlay = () => {
  return (
    <Wrapper>
      <div className="container">
        <p className="page-title">How to start</p>
        <Row
          gutter={[
            { sm: 24, xs: 40 },
            { sm: 24, xs: 40 },
          ]}
        >
          {listPlayCards.map((item, index) => (
            <Col key={index} sm={6} xs={24}>
              <InforCard {...item} index={index + 1} />
            </Col>
          ))}
        </Row>
      </div>
    </Wrapper>
  );
};

export default HowToPlay;
