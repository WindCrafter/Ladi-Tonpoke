import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Col, Row } from "antd";
import Image from "next/image";
import AnimatedInview from "@/components/AnimatedInview.tsx";

ChartJS.register(ArcElement, Tooltip, Legend);

const Wrapper = styled.div`
  padding: 5rem 0 10rem;

  background: var(--Orange-Orange-400, #ed662c);

  @media (max-width: 768px) {
    padding: 2rem 0 5rem;
  }

  .chart {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    height: 400px;

    position: relative;

    @media (max-width: 768px) {
      height: 70vw;
      width: 70vw;
      margin-bottom: 5rem;
    }

    &:before {
      content: "";
      display: block;
      width: 130%;
      height: 130%;
      margin-bottom: 20px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .data-chart {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;

    font-family: var(--font-readex-pro);

    h2 {
      text-align: center;
      color: #000;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        margin: 10px 0;

        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 100% */
        color: #000;
        div {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 10px;
          flex-shrink: 0;
        }
      }
    }
  }

  .token-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 768px) {
      width: 40%;
    }
  }

  .page-title {
    margin-bottom: 6rem;
    text-align: center;
  }
`;

const data = {
  labels: [
    "Private Sale",
    "Marketing and Listing Initiatives",
    "Venture Capital and Community Development",
    "Development Fund",
    "Ecosystem Growth Fund",
  ],
  datasets: [
    {
      label: "Token Distribution",
      data: ["30", 20, 30, 10, 10],
      backgroundColor: [
        "rgba(86, 189, 147, 1)",
        "rgba(111, 97, 234, 1)",
        "rgba(220, 96, 104, 1)",
        "rgba(247, 135, 94, 1)",
        "rgba(245, 201, 43, 1)",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const Tokenomics = () => {
  return (
    <Wrapper>
      <div className="container">
        <AnimatedInview>
          <p className="page-title">Tokenomics</p>
        </AnimatedInview>

        <Row className="w-100 h-100">
          <Col sm={12} xs={24}>
            <div className="chart">
              <Doughnut data={config.data} options={options} />

              <Image
                className="token-image"
                src="/images/tokens/token.svg"
                width={160}
                height={160}
                alt=""
              />
            </div>
          </Col>
          <Col sm={12} className="center" xs={24}>
            <div className="h-100 center">
              <div className="data-chart">
                <h2 className="text-center">Token Distribution</h2>
                <ul>
                  {data.labels.map((label, index) => (
                    <li key={index}>
                      <div
                        style={{
                          backgroundColor:
                            data.datasets[0].backgroundColor[index],
                        }}
                      ></div>
                      {label} : {data.datasets[0].data[index]}%
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default Tokenomics;
