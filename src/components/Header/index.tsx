import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Box, Flex } from "../Box";
import Link from "next/link";
import { Drawer } from "antd";
import MobileMenu from "./MobileMenu";
import { menuHeader } from "@/config";
import useAudio from "@/hooks/useAudio";
import Image from "next/image";

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

  backdrop-filter: blur(10px);

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
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }

  .menu-item {
    padding: 8px 24px;
    cursor: pointer;
    font-size: 24px;
    opacity: 0.8;
    transition: color 0.2s ease-in-out;

    &.active,
    &:hover {
      color: rgba(247, 135, 94, 1);
    }
  }
`;

export const JoinButton = styled.div`
  max-width: 175px;
  width: 100%;
  height: 60px;
  padding: 8px 32px 8px 32px;
  gap: 8px;
  border-radius: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    width: fit-content;
    padding: 8px 16px 8px 16px;
    gap: 4px;
  }

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background: url("/images/icons/button.png") no-repeat center;
  background-size: contain;
  background-position: center;

  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05); /* Changed scale to transform */
    opacity: 0.9;
  }
`;

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [open, setOpen] = useState(false);
  const { isPlaying, togglePlay } = useAudio("/sounds/sound-app.mp3");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

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

      <div className="w-100 flex justify-between align-center">
        <Link href="/">
          <img src="/images/logo.png" width={135} alt="" />
        </Link>

        <MenuWrapper>
          {menuHeader.map((item) => (
            <Link key={item.id} href={`#${item.id}`}>
              <div
                className={`menu-item flex`}
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </MenuWrapper>

        <div className="flex gap-4">
          {isPlaying ? (
            <img
              className="hover"
              src="/images/icons/sound.svg"
              alt=""
              onClick={togglePlay}
            />
          ) : (
            <img
              className="hover"
              src="/images/icons/un-sound.svg"
              alt=""
              onClick={togglePlay}
            />
          )}

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <JoinButton className="center">
              <img width={20} src="/images/social/white-telegram.png" alt="" />
              Play Now
            </JoinButton>
          </Link>
        </div>

        <div className="header-menu center" onClick={showDrawer}>
          <Image src="/images/icons/menu.svg" width={32} height={32} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
