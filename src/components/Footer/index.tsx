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



const Copyright = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  width: 100%;
`;

export default function Footer() {
  return (
<></>
  );
}
