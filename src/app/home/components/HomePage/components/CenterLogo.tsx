import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  .box-container {
    width: 249.13px;
    height: 124px;
    padding: 24px 40px;

    border-radius: 32px;
    box-shadow: 0px 16px 32px 0px rgba(101, 110, 126, 0.25);
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      width: 181px;
      height: 90px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 23.358px;
      box-shadow: 0px 11.679px 23.358px 0px rgba(101, 110, 126, 0.25);
    }
  }

  position: relative;

  .main-logo {
    @media (max-width: 768px) {
      width: 123.449px;
      height: 58.394px;
    }
  }

  .bg-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
`;

const CenterLogo = () => {
  return (
    <Wrapper>
      <div className="box-container">
        <Image
          className="main-logo"
          src="/images/color-logo.svg"
          width={170}
          height={80}
          alt=""
        />
      </div>

      <Image
        className="bg-logo"
        src="/images/home/logo-bg.svg"
        width={264}
        height={263}
        alt=""
      />
    </Wrapper>
  );
};

export default CenterLogo;
