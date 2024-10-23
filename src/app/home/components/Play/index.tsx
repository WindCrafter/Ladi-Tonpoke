import Script from 'next/script'

const TokenPage = () => {

  return (
    <div className="top-how-to-buy__container !pt-[15vh]">
    <div className="top-how-to-buy__book active book-top-how-to-buy">
      <div className="book-top-how-to-buy__box">
        <div data-watch-threshold="0.5" data-watch-once data-watch className="book-top-how-to-buy__item-first-page">
          <div className="book-top-how-to-buy__item-first-page-lables">
            {/* <div className="book-top-how-to-buy__item-first-page-lable">
              <img src="img/how-to-buy/label-box-active.svg" alt="Icon" />
              <img src="img/how-to-buy/desktop.svg" alt="Icon" />
            </div>
            <div className="book-top-how-to-buy__item-first-page-lable">
              <img src="img/how-to-buy/label-box.svg" alt="Icon" />
              <img src="img/how-to-buy/mobile.svg" alt="Icon" />
            </div>
            <div className="book-top-how-to-buy__item-first-page-lable">
              <img src="img/how-to-buy/label-box.svg" alt="Icon" />
              <img src="img/how-to-buy/wallet.svg" alt="Icon" />
            </div> */}
          </div>
          <div className="book-top-how-to-buy__item-first-page-body">
            <h2 className="book-top-how-to-buy__item-first-page-title">
              <span>H</span><span>o</span><span>w</span> <span>i</span><span>t</span><span>o</span> <span>i</span><span>P</span><span>l</span><span>a</span><span>y</span> <br />
              <span className="orange">T</span><span className="orange">O</span><span className="orange">N</span><span className="orange">P</span><span className="orange">O</span><span className="orange">K</span><span className="orange">E</span>
            </h2>
            {/* <p>ON DESKTOP</p> */}
          </div>
          <div className="book-top-how-to-buy__item-label">Page 1</div>
        </div>
        <div className="book-top-how-to-buy__item-wrapper">
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                Introduction
              </h3>
              <div className="book-top-how-to-buy__item-text">
                {/* <p>
                  Mochi is on <span className="base-icon">Base</span> The
                  Layer 2 blockchain by Coinbase.
                </p>
                <p>
                  You’ll need to add Base Network to your wallet and
                  bridge ETH in order to come over!
                </p>
                <p>
                  It’s very easy and we’ll guide you through it in a
                  few simple steps!
                </p> */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Page 2</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>1</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                {/* <p>
                  Go to ‘Settings’ in your wallet and find the
                  networks section.
                </p>
                <p>
                  Add a network manually and enter the following info
                  for Base:
                </p>
                <p>
                  Network Name: Base <br />
                  RPC Endpoint:
                  <a target="_blank" href="https://mainnet.base.org/">https://mainnet.base.org/</a>
                  <br />
                  Chain ID: 8453 <br />
                  Currency Symbol: ETH <br />
                  Block Explorer:
                  <a target="_blank" href="https://mainnet.base.org/">https://basescan.org</a>
                </p>
                <a className="blue-button" target="_blank" href="https://chainlist.org/chain/8453">CONNECT TO BASE</a>
                <p>
                  Once saved, you should be able to connect to Base by
                  selecting it from the network selection menu.
                </p> */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Page 3</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>
        <div className="book-top-how-to-buy__item-wrapper">
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>2</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                {/* <p>
                  Now you’ll need to deposit some ETH onto Base! Here
                  you have a couple options:
                </p>
                <p>
                  1. Withdraw ETH to your Base wallet from Coinbase,
                  Binance, Byit or OKX Make sure to select Base as the
                  withdrawal network!
                </p>
                <p>
                  2. Bridge ETH to Base from another chain using these
                  bridges: <br />
                  - Official Base Bridge
                  <a target="_blank" href="https://bridge.base.org/deposit">https://bridge.base.org/deposit</a>, <br />
                  - Orbiter
                  <a target="_blank" href="https://www.orbiter.finance/">https://www.orbiter.finance/</a>, <br />
                  - Stargate
                  <a target="_blank" href="https://stargate.finance/">https://stargate.finance/</a>,
                </p>
                <p>
                  To use these bridges simply connect your wallet,
                  select the network you want to bridge from, choose
                  Base as the network to bridge to, and input the
                  amount of ETH you would like to bridge!
                </p> */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Page 4</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>3</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                {/* <p>
                  1. In your wallet, switch the network to Base in the
                  network dropdown menu
                </p>
                <p>
                  2. Go to
                  <a target="_blank" href="https://www.sushi.com/swap">https://www.sushi.com/swap</a>
                </p>
                <p>3. Connect your wallet</p>
                <p>
                  4. In the bottom swap field, select a token and
                  input the official $MOCHI token address
                  <span className="break-word">0xF6e932Ca12afa26665dC4dDE7e27be02A7c02e50</span>
                </p> */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Page 5</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>

        <div className="book-top-how-to-buy__item-last-page">
          <div className="book-top-how-to-buy__item-body">
            <h3 className="book-top-how-to-buy__item-title">
              STEP <span>4</span>
            </h3>
            <div className="book-top-how-to-buy__item-text">
              {/* <p>Perform the swap.</p>
              <p>1. Enter an amount of ETH</p>
              <p>
                2. Set the slippage to 3-4% by clicking on the
                settings wheel and adjusting it
              </p>
              <p>3. Press Swap</p>
              <p>4. Confirm the transaction in your wallet</p> */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="book-top-how-to-buy__item-label">Page 6</div>
        </div>
      </div>
    </div>
    <div style={{display: "none"}} className="top-how-to-buy__book book-top-how-to-buy">
      <div className="book-top-how-to-buy__box">
        <div data-watch-threshold="0.5" data-watch-once data-watch className="book-top-how-to-buy__item-first-page">
          <div className="book-top-how-to-buy__item-first-page-lables">
            <div className="book-top-how-to-buy__item-first-page-lable">
              <img src="img/how-to-buy/label-box.svg" alt="Icon" />
              <img src="img/how-to-buy/desktop.svg" alt="Icon" />
            </div>
            <div className="book-top-how-to-buy__item-first-page-lable">
              <img src="img/how-to-buy/label-box-active.svg" alt="Icon" />
              <img src="img/how-to-buy/mobile.svg" alt="Icon" />
            </div>
            <div className="book-top-how-to-buy__item-first-page-lable">
              <img src="img/how-to-buy/label-box.svg" alt="Icon" />
              <img src="img/how-to-buy/wallet.svg" alt="Icon" />
            </div>
          </div>
          <div className="book-top-how-to-buy__item-first-page-body">
            <h2 className="book-top-how-to-buy__item-first-page-title">
              <span>H</span><span>o</span><span>w</span> <span>i</span><span>t</span><span>o</span> <span>i</span><span>B</span><span>u</span><span>y</span> <br />
              <span className="orange">$</span><span className="orange">M</span><span className="orange">O</span><span className="orange">C</span><span className="orange">H</span><span className="orange">I</span>
            </h2>
            <p>ON MOBILE</p>
          </div>
          <div className="book-top-how-to-buy__item-label">Mochi</div>
        </div>
        <div className="book-top-how-to-buy__item-wrapper">
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>1</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                <p>
                  You need to add the Base Network to your wallet of
                  choice.
                </p>
                <p>
                  Check out the official @BuildOnBase docs on how here
                </p>
                <p>
                  For a quicker way, use
                  <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                  and add Base from there.
                </p>
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Mochi</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>2</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                <p>
                  You need to add the Base Network to your wallet of
                  choice.
                </p>
                <p>
                  Check out the official @BuildOnBase docs on how here
                </p>
                <p>
                  For a quicker way, use
                  <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                  and add Base from there.
                </p>
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Mochi</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>
        <div className="book-top-how-to-buy__item-wrapper">
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>3</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                <p>
                  You need to add the Base Network to your wallet of
                  choice.
                </p>
                <p>
                  Check out the official @BuildOnBase docs on how here
                </p>
                <p>
                  For a quicker way, use
                  <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                  and add Base from there.
                </p>
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Mochi</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>4</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                <p>
                  You need to add the Base Network to your wallet of
                  choice.
                </p>
                <p>
                  Check out the official @BuildOnBase docs on how here
                </p>
                <p>
                  For a quicker way, use
                  <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                  and add Base from there.
                </p>
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Mochi</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>

        <div className="book-top-how-to-buy__item-last-page">
          <div className="book-top-how-to-buy__item-label">Mochi</div>
        </div>
      </div>
    </div>
    <div style={{display: "none"}} className="top-how-to-buy__book book-top-how-to-buy">
      <div className="book-top-how-to-buy__box">
        <div data-watch-threshold="0.5" data-watch-once data-watch className="book-top-how-to-buy__item-first-page">
          <div className="book-top-how-to-buy__item-first-page-lables">
            <div className="book-top-how-to-buy__item-first-page-lable">
              <img src="img/how-to-buy/label-box.svg" alt="Icon" />
              <img src="img/how-to-buy/desktop.svg" alt="Icon" />
            </div>
            <div className="book-top-how-to-buy__item-first-page-lable">
              <img src="img/how-to-buy/label-box.svg" alt="Icon" />
              <img src="img/how-to-buy/mobile.svg" alt="Icon" />
            </div>
            <div className="book-top-how-to-buy__item-first-page-lable">
              <img src="img/how-to-buy/label-box-active.svg" alt="Icon" />
              <img src="img/how-to-buy/wallet.svg" alt="Icon" />
            </div>
          </div>
          <div className="book-top-how-to-buy__item-first-page-body">
            <h2 className="book-top-how-to-buy__item-first-page-title">
              <span>H</span><span>o</span><span>w</span> <span>i</span><span>t</span><span>o</span> <span>i</span><span>B</span><span>u</span><span>y</span> <br />
              <span className="orange">$</span><span className="orange">M</span><span className="orange">O</span><span className="orange">C</span><span className="orange">H</span><span className="orange">I</span>
            </h2>
            <p>ON CB WALLET</p>
          </div>
          <div className="book-top-how-to-buy__item-label">Mochi</div>
        </div>
        <div className="book-top-how-to-buy__item-wrapper">
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>1</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                <p>
                  You need to add the Base Network to your wallet of
                  choice.
                </p>
                <p>
                  Check out the official @BuildOnBase docs on how here
                </p>
                <p>
                  For a quicker way, use
                  <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                  and add Base from there.
                </p>
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Mochi</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>2</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                <p>
                  You need to add the Base Network to your wallet of
                  choice.
                </p>
                <p>
                  Check out the official @BuildOnBase docs on how here
                </p>
                <p>
                  For a quicker way, use
                  <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                  and add Base from there.
                </p>
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Mochi</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>
        <div className="book-top-how-to-buy__item-wrapper">
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--front">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>3</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                <p>
                  You need to add the Base Network to your wallet of
                  choice.
                </p>
                <p>
                  Check out the official @BuildOnBase docs on how here
                </p>
                <p>
                  For a quicker way, use
                  <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                  and add Base from there.
                </p>
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Mochi</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
          <div className="book-top-how-to-buy__item book-top-how-to-buy__item--back">
            <div className="book-top-how-to-buy__item-body">
              <h3 className="book-top-how-to-buy__item-title">
                STEP <span>4</span>
              </h3>
              <div className="book-top-how-to-buy__item-text">
                <p>
                  You need to add the Base Network to your wallet of
                  choice.
                </p>
                <p>
                  Check out the official @BuildOnBase docs on how here
                </p>
                <p>
                  For a quicker way, use
                  <a target="_blank" href="https://chainlist.org">https://chainlist.org</a>
                  and add Base from there.
                </p>
              </div>
            </div>
            <div className="book-top-how-to-buy__item-label">Mochi</div>
            <button type="button" className="book-top-how-to-buy__item-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.6667 14.6666V13.3333H21.3333V12H18.6667V9.33329H16V6.66663H13.3333V3.99996H10.6667V2.66663H8V6.66663H10.6667V9.33329H13.3333V12H16V14.6666H18.6667V17.3333H16V20H13.3333V22.6666H10.6667V25.3333H8V29.3333H10.6667V28H13.3333V25.3333H16V24V22.6666H18.6667V21.3333V20H21.3333V18.6666H22.6667V17.3333H24V16V14.6666H22.6667Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>

        <div className="book-top-how-to-buy__item-last-page">
          <div className="book-top-how-to-buy__item-label">Mochi</div>
        </div>
      </div>
    </div>
    <Script src="/app.min.js" />

  </div>
  );
};

export default TokenPage;
