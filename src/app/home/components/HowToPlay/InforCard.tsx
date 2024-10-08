import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 288px;
  height: 445px;
  border-radius: 40px;
  padding: 40px 24px 43px;
  position: relative;

  box-shadow: 0px 16px 32px 0px rgba(101, 110, 126, 0.15);
  background-color: #fff;
  font-family: var(--font-readex-pro);

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  .attach-item {
    position: absolute;
    top: -20px;
    left: -32px;
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
    color: #fff;

    p {
      position: absolute;
      top: 25px;
      left: 45px;
    }
  }

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(64, 76, 107, 1);

  .icon-item {
    padding: 30px 0 0;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    text-align: center;
    color: rgba(64, 76, 107, 1);
    margin: 1rem 0 0.5rem;
  }

  .content {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(64, 76, 107, 1);
    text-align: center;
  }
`;

interface InforCardProps {
  image: string;
  title: string;
  content: string;
  index: number;
}

const InforCard: React.FC<InforCardProps> = ({
  image,
  title,
  content,
  index,
}) => {
  return (
    <Wrapper>
      <div className="attach-item">
        <Image
          src="/images/how-to-play/top-item.svg"
          width={120}
          height={120}
          alt=""
        />
        <p>{index}</p>
      </div>

      <div className="center">
        <Image
          className="icon-item"
          src={image}
          width={140}
          height={140}
          alt=""
        />
      </div>

      <p className="title">{title}</p>

      <p className="content">{content}</p>
    </Wrapper>
  );
};

export default InforCard;
