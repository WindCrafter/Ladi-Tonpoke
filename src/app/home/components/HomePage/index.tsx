import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  background: url("/images/home/bg.webp") no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 3;
`;

const LogoBox = styled(motion.div)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  will-change: transform;

  .logo {
    width: 25rem;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
  }
`;

const GrassBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: -100px;
  will-change: transform;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: -50%;
    z-index: 2;
    background: #111113;
    transform: translateY(-20px);
  }

  img {
    width: 100%;
  }
`;

const MountainBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0%;
  will-change: transform;

  img {
    width: 100%;
  }
`;

const HomePage = () => {
  const { scrollY } = useViewportScroll();

  const logoY = useSpring(
    useTransform(scrollY, [0, 300], [0, 220], { clamp: false }),
    { stiffness: 100, damping: 20 }
  );
  const mountainY = useSpring(
    useTransform(scrollY, [0, 300], [0, -50], { clamp: false }),
    { stiffness: 100, damping: 20 }
  );
  const grassY = useSpring(
    useTransform(scrollY, [0, 300], [0, -100], { clamp: false }),
    { stiffness: 100, damping: 20 }
  );

  return (
    <Wrapper>
      <LogoBox style={{ y: logoY, x: "-50%" }}>
        <img className="logo" src="/images/logo.png" alt="logo" />
        <div className="socials">
          <img width={50} src="/images/social/telegram.svg" alt="telegram" />
          <img width={50} src="/images/social/twitter.svg" alt="twitter" />
          <img width={50} src="/images/social/discord.svg" alt="discord" />
        </div>
      </LogoBox>

      <MountainBox style={{ y: mountainY }}>
        <img src="/images/home/mountain.webp" alt="mountain" />
      </MountainBox>

      <GrassBox style={{ y: grassY }}>
        <img src="/images/home/grass.svg" alt="grass" />
      </GrassBox>
    </Wrapper>
  );
};

export default HomePage;
