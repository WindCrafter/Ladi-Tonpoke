import styled from "styled-components";
import ItemSlider from "./ItemSlider";

const Wrapper = styled.div`
  background: rgba(86, 189, 147, 1);
  height: 768px;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  .box-slider {
    display: flex;
    gap: 8px;
    padding: 20px;
    border-radius: 20px;
    animation: slide 20s linear infinite;

    border: 4px dashed rgba(188, 199, 224, 1);
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        25%
      ); /* Adjusted to cover exactly one full set of items */
    }
  }

  .wrapper-animate {
    transform: rotate(-3deg);
    height: 456px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CarSlider = () => {
  // create an array of 7 items and double it
  const array = Array.from({ length: 7 }, (_, index) => index);

  const dataLength = array.length - 1;

  return (
    <Wrapper>
      <div className="wrapper-animate">
        <div className="box-slider">
          {array.map((item, index) => (
            <div className="item-slider" key={index}>
              <ItemSlider image={`/images/slider-car/car-${index}.png`} />
              <ItemSlider
                isBottom
                image={`/images/slider-car/car-${dataLength - index}.png`}
              />
            </div>
          ))}

          {array.map((item, index) => (
            <div className="item-slider" key={index}>
              <ItemSlider image={`/images/slider-car/car-${index}.png`} />
              <ItemSlider
                isBottom
                image={`/images/slider-car/car-${dataLength - index}.png`}
              />
            </div>
          ))}

          {array.map((item, index) => (
            <div className="item-slider" key={index}>
              <ItemSlider image={`/images/slider-car/car-${index}.png`} />
              <ItemSlider
                isBottom
                image={`/images/slider-car/car-${dataLength - index}.png`}
              />
            </div>
          ))}

          {array.map((item, index) => (
            <div className="item-slider" key={index}>
              <ItemSlider image={`/images/slider-car/car-${index}.png`} />
              <ItemSlider
                isBottom
                image={`/images/slider-car/car-${dataLength - index}.png`}
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default CarSlider;
