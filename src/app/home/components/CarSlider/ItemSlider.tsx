import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div<{ bottom?: boolean }>`
  width: 200px;
  height: 256px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 30px;
  background: radial-gradient(
    97.36% 66.02% at 50% 48.44%,
    #ffffff 0%,
    #e1e8f5 56.43%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${({ bottom }) => (bottom ? "8px" : "0")};
`;

interface ItemSliderProps {
  image: string;
  isBottom?: boolean;
}

const ItemSlider: React.FC<ItemSliderProps> = ({ image, isBottom }) => {
  return (
    <Wrapper bottom={isBottom}>
      <img src={image} alt="" />
    </Wrapper>
  );
};

export default ItemSlider;
