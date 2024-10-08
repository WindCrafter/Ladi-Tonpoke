import Image from "next/image";
import styled from "styled-components";

const Arrow = styled.div<{ isRight: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;

  &.slick-prev {
    left: -50px;

    @media (max-width: 768px) {
      left: -40px;
    }

    &::before {
      display: none;
    }
  }

  &.slick-next {
    right: -50px;

    @media (max-width: 768px) {
      right: -40px;
    }

    &::before {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: ${(props) => (props.isRight ? "rotate(180deg)" : "none")};
  }
`;

interface SliderArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  isRight?: boolean;
}

const SliderArrow: React.FC<SliderArrowProps> = (props) => {
  const { className, style, isRight = false, onClick } = props;

  return (
    <Arrow
      className={className}
      style={{ ...style }}
      onClick={onClick}
      isRight={isRight}
    >
      <Image
        src="/images/icons/left-arrow.svg"
        width={40}
        height={40}
        alt={isRight ? "Next" : "Previous"}
      />
    </Arrow>
  );
};

export default SliderArrow;
