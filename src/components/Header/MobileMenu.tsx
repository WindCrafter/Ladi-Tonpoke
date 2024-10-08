import styled from "styled-components";
import { Box, Flex } from "../Box";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "antd";
import { socialLinks } from "@/config/socialLinks";
import { menuHeader } from "@/config/menuHeader";
import { JoinButton } from ".";

const Wrapper = styled.div`
  background: var(--Green-Green-300, #56bd93);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 35px 24px;
  overflow-y: auto;

  .center-menu {
    display: flex;

    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    height: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    left: unset;

    .menu-item {
      padding: 20px 20px 8px;
      border-bottom: 2px solid transparent;

      &.active {
        border-bottom: 3px solid;
        border-image-slice: 1;
        border-color: #fff;
      }
    }

    a {
      font-family: var(--font-readex-pro);

      font-size: 18px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: left;
      color: #fff;
    }
  }

  .line-slider {
    width: 100%;
    height: 1px;
    background: #fff;
    margin-top: 20px;
  }

  .socials {
    font-family: var(--font-readex-pro);

    font-size: 20px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: center;
    margin-bottom: 20px;
  }

  .socials-list {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

const MobileMenu = ({ onClose }: any) => {
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <Wrapper>
      <Flex flexDirection="column" justifyContent="center" alignItems="cneter">
        <Box className="close-image" onClick={onClose}>
          <Image src="/images/icons/timeX.svg" width={20} height={20} alt="" />
        </Box>
        <Flex justifyContent="center" mt={3}>
          <Image
            src="/images/logo.svg"
            width={145}
            height={55}
            alt=""
            quality={100}
          />
        </Flex>

        <Box className="" mt={4}>
          <Flex className="center-menu">
            {menuHeader.map((item, index) => (
              <Link
                className={`${
                  selectedItem === item.name && "active"
                } menu-item`}
                onClick={() => setSelectedItem(item.name)}
                href={`#${item.id}`}
                key={index}
              >
                {item.name}
              </Link>
            ))}

            <Box mt={3}>
              <Link
                href="https://whitepaper.grabway.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <JoinButton>White Paper</JoinButton>
              </Link>
            </Box>

            <Box className="line-slider" />
          </Flex>
        </Box>

        <Box className="socials" mt={4} mb={3}>
          Official social media
        </Box>

        <Flex justifyContent="space-between" className="socials-list">
          {socialLinks.map((item, index) => (
            <a href={item.link} key={index} className="social-item">
              <Image
                src={item.icon}
                width={40}
                height={40}
                alt=""
                quality={100}
              />
            </a>
          ))}
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default MobileMenu;
