import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import { Box, Flex } from "../Box";
import Link from "next/link";
import { Drawer } from "antd";
import MobileMenu from "./MobileMenu";
import { menuHeader } from "@/config/menuHeader";

const Wrapper = styled.div<{ isShow: boolean }>`
  padding: 0 20px;
  color: #fff;
  height: 90px;
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding: 0 20px;
    display: flex;
    align-items: center;
  }

  .header-menu {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }

  ${(props) =>
    css`
      transform: ${props.isShow ? "translateY(0)" : "translateY(-100%)"};
      background: ${props.isShow ? "rgba(0, 0, 0, 0.2)" : "unset"};
    `}
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  .menu-item {
    padding: 8px 24px;
    cursor: pointer;
    font-size: 24px;
    opacity: 0.8;

    &.active {
      color: rgba(247, 135, 94, 1);
    }
  }
`;

export const JoinButton = styled.div`
  max-width: 175px;
  width: 100%;
  height: 40px;
  padding: 8px 32px 8px 32px;
  gap: 8px;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: fit-content;
    padding: 8px 16px 8px 16px;
    gap: 4px;
  }

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  background: rgba(247, 135, 94, 1);

  transition: scale 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: 1.05;
    opacity: 0.9;
  }
`;

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  // useEffect(() => {
  //   let scrollTimeout: NodeJS.Timeout | null = null;

  //   const handleScroll = () => {
  //     if (scrollTimeout) {
  //       clearTimeout(scrollTimeout);
  //     }

  //     scrollTimeout = setTimeout(() => {
  //       const currentScrollPos = window.pageYOffset;

  //       setHeaderVisible(
  //         prevScrollPos > currentScrollPos || currentScrollPos < 10
  //       );

  //       setPrevScrollPos(currentScrollPos);
  //     }, 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     if (scrollTimeout) {
  //       clearTimeout(scrollTimeout);
  //     }
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  return (
    <Wrapper isShow={isHeaderVisible}>
      <Drawer
        width="340px"
        zIndex={1000}
        title=" Drawer"
        onClose={onClose}
        open={open}
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: 0 }}
      >
        <MobileMenu onClose={onClose} />
      </Drawer>

      <Flex
        className="w-100"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <img src="/images/logo.png" width={135} alt="" />
        </Link>

        <MenuWrapper>
          {menuHeader.map((item) => (
            <Link key={item.id} href={`#${item.id}`}>
              <Flex
                className={`menu-item ${
                  activeItem === item.name ? "active" : ""
                }`}
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </Flex>
            </Link>
          ))}
        </MenuWrapper>

        <Link
          href="https://whitepaper.grabway.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <JoinButton>Play Now</JoinButton>
        </Link>

        <Box className="header-menu center" onClick={showDrawer}>
          <Image src="/images/icons/menu.svg" width={32} height={32} alt="" />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Header;
