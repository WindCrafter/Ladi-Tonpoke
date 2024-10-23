

const WhatTonpokePage = () => {


  return (
    <div className="base__container">
    <div className="base__decor-item base__decor-item--1">
      <img loading="lazy" src="img/base/decor1.png" alt="Decor Image" />
    </div>
    <div className="base__decor-item base__decor-item--2">
      <img loading="lazy" src="img/base/decor2.png" alt="Decor Image" />
      <img loading="lazy" src="img/base/decor-3.svg" alt="Decor Image" />
    </div>
    <div data-watch-threshold="0.6" data-watch-once data-watch className="base__header mt-[15vh]">
      <h2 className="base__header-title">
        <span>T</span><span>o</span><span>N</span><span>P</span><span>O</span><span>K</span><span>E</span><i></i>
      </h2>
      <div className="base__header-label">Telegram Web App</div>
    </div>
    <div className="base__items">
      <div className="base__item item-base">
        <div className="item-base__text">
          <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        </div>
        <div data-watch-threshold="0.8" data-watch-once data-watch className="item-base__image">
          <span>Wow
            {/* That&apos;s quite <br />
            the combo! */}
          </span>
          <img src="img/base/01.svg" alt="Icon" />
        </div>
      </div>
      <div className="base__item item-base">
        <div className="item-base__text">
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
        <div data-watch-threshold="0.8" data-watch-once data-watch className="item-base__image">
          <span>
            {/* We&apos;ve already done <br />
            (and won) a lot! */}
            Interesting
            </span>
          <img src="img/base/02.svg" alt="Icon" />
        </div>
      </div>
      <div className="base__item item-base">
        <div className="item-base__text">
          <span>
            <span>
              {/* Seen support from top Base executives, KYC&apos;d to Coinbase,
              and receiver of */}
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            </span>
          </span>
          <span><span className="no-wrap">a grant</span> <i></i></span>
          <span><span>from Coinbase.</span></span>
        </div>
        <div data-watch-threshold="0.8" data-watch-once data-watch className="item-base__image">
          <span>Yes right!</span>
          <img src="img/base/03.svg" alt="Icon" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default WhatTonpokePage;
