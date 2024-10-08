import { menuHeader } from "@/config/menuHeader";
import { socialLinks } from "@/config/socialLinks";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Box, Flex } from "../Box";

const Wrapper = styled.div`
  background: var(--Green-Green-600, #20523e);
  color: var(--White, #fff);
  padding: 80px 0 32px;

  @media (max-width: 768px) {
    padding: 2.5rem 0 32px;
  }

  .page-title {
    margin-bottom: 4rem;
  }

  .item-footer {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      flex: unset;

      margin-bottom: 3rem;
    }

    & > a {
      transition: transform 150ms ease-in-out;
    }

    & > a:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      img {
        width: 60px;
        height: 60px;
      }
    }
  }

  .social-list {
    margin-bottom: 172px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 100%;

    flex-wrap: wrap;
  }

  .title {
    font-size: 30px;
    font-weight: 600;
    line-height: 28px;
    margin: 0.5rem 0 2rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .ref-links {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    & > * {
      color: var(--White, #fff);
      font-family: var(--font-readex-pro);
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;

      @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    @media (max-width: 768px) {
      margin-top: 1.5rem;
      justify-content: center;
    }
  }

  .footer-text {
    font-family: var(--font-readex-pro);
  }

  .bottom-link {
    margin-top: 4rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .column-footer {
    @media (max-width: 768px) {
      margin-top: 3rem;
      width: 100%;
      justify-content: center;

      &.first-child {
        margin-top: 0;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper id={menuHeader[4].id}>
      <div className="container">
        <Row>
          <Col xs={24} sm={5}>
            <div className="column-footer first-child">
              <p className="title">Link</p>

              <div className="ref-links">
                <Link
                  className="hover"
                  href="https://whitepaper.grabway.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  White Paper
                </Link>
                <Link className="hover" href="/">
                  Terms & Conditions
                </Link>

                <Link className="hover" href="/">
                  Cookies
                </Link>

                <Link className="hover" href="/">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={8}>
            <div className="column-footer">
              <p className="title">Contact us</p>

              <div className="ref-links ">
                <Link
                  className="hover flex"
                  href="/"
                  style={{ alignItems: "center" }}
                >
                  <Box ml={3}>1 Wallich, Singapore 078881</Box>
                </Link>

                <Link
                  className="hover flex"
                  href="mailto:support@grabway.site"
                  style={{ alignItems: "center" }}
                >
                  <Box ml={3}>support@grabway.site</Box>
                </Link>

                <Flex className="item-footer" mt={3}>
                  {socialLinks.map((item, index) => (
                    <Link
                      href={item.link}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </Link>
                  ))}
                </Flex>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={11}></Col>
        </Row>

        <div className="bottom-link center">
          <p className="footer-text center">© 2024 All rights reserved</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
