import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;

  p {
    font-family: var(--font-readex-pro);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin-left: 1rem;
    font-weight: bold;
  }

  div {
    font-family: var(--font-readex-pro);
    font-size: 12px;
    margin-top: 4px;
    font-weight: 400;
    text-align: left;
    margin-left: 1rem;
  }
`;

interface ItemFeatureProps {
  item: {
    title: string;
    desc: string;
  };
  index: number;
}

const ItemFeature: React.FC<ItemFeatureProps> = ({ index, item }) => {
  return (
    <Wrapper>
      <Image
        src={`/images/feature/item-${index}.svg`}
        width={80}
        height={80}
        alt=""
      />
      <div>
        <p>{item.title}</p>
        <div>{item.desc}</div>
      </div>
    </Wrapper>
  );
};

export default ItemFeature;
