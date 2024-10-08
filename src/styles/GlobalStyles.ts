"use client";

import { createGlobalStyle } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyles = createGlobalStyle`

//grid 
  .flex{
    display: flex;
  }

  .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .justify-between{
    justify-content: space-between;
  }

  .column{
    flex-direction: column;
  }

  .row{
    flex-direction: row;
  }

  .mobile-reverse-column {
    @media (max-width: 768px) {
      flex-direction: column-reverse !important;
    }
  }

  .container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 0 16px;
    }
  }

  .hover{
    transition: opacity 0.3s;

    &:hover{
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .relative{
    position: relative;
  }

  .h-100{
    height: 100%;
  }

  .w-100{
    width: 100%;
  }

  // css page style
  .page-title{
    font-family: var(--font-readex-pro);
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 40px;
      line-height: 48px;
    }
  }

  .top-title{
    font-family: var(--font-readex-pro);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .desc-title{
    font-family: var(--font-readex-pro);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }

`;

export default GlobalStyles;