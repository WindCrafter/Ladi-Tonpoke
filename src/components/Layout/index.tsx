"use client";

import { Footer } from "@/app/home/components/Footer";
import Header from "@/components/Header";

import styled from "styled-components";

const Wrapper = styled.div`
  /* font-family: var(--font-readex-pro); */
  background: var(--black-bg);
`;
interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default LayoutPage;
