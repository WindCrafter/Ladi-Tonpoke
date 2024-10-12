// Footer.js
import { socialLinks } from "@/config";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #111; // Dark background
  padding: 40px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 400;
  .logo-container {
    img {
      max-width: 300px;
    }
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 28px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }

  .box-items {
    display: flex;
    gap: 35px;
    max-width: 300px;
    flex-wrap: wrap;
    font-weight: 400;

    p {
      cursor: pointer;
    }
  }
`;

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

const Copyright = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className="flex justify-between w-100 align-center">
        <div className="logo-container col-2">
          <img src="/images/logo.png" alt="Tonpoke Explore Logo" />
        </div>

        <MenuItems className="col-2">
          <div className="box-items">
            <p>Token</p>
            <p>Gameplay</p>
            <p>Feature</p>
            <p>Rank</p>
          </div>
        </MenuItems>
      </div>

      <Divider>
        <img src="/images/icons/ball.png" alt="Pokeball Icon" />
      </Divider>
      <div className="flex justify-between w-100">
        <Copyright>Copyright 2024</Copyright>

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
    </FooterContainer>
  );
}
