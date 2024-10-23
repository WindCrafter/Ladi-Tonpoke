export const Footer = () => {
    return <footer data-watch-threshold="0.6" data-watch-once data-watch className="footer">
    <div className="footer__container">
        <div className="footer__box">
            <div className="footer__top">
              
                <div className="footer__social">
                    <a target="_blank" href="https://www.dextools.io/app/en/base/pair-explorer/0xbe09692245268B607c3029469d14bE06191A0566" className="footer__social-item">
                        <img src="img/footer/01.svg" alt="Icon" />
                    </a>
                    <a target="_blank" href="https://t.me/mochientry" className="footer__social-item">
                        <img src="img/footer/02.svg" alt="Icon" />
                    </a>

                    <a target="_blank" href="https://medium.com/@mochibase" className="footer__social-item">
                        <img src="img/footer/04.svg" alt="Icon" />
                    </a>
                    <a target="_blank" href="https://twitter.com/mochi_token" className="footer__social-item">
                        <img src="img/footer/05.svg" alt="Icon" />
                    </a>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-top">
                    <a href="mailto:info@mochithecatcoin.com" className="footer__email"><span>INFO@MOCHITHECATCOIN.COM</span><img src="img/footer/email.svg" alt="Email Icon" /></a>
                    <div className="footer__copy">2023 © ALL RIGHTS RESERVED</div>
                </div>
                <div className="footer__bottom-bottom">
                    <a href="https://t.me/osnovoco"><span>Designed by Osnovo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="18" viewBox="0 0 29 18" fill="none">
                            <path d="M21.6898 0.59668H15.3555L18.5227 5.87484L21.6898 11.153L24.8563 5.87484L28.0235 0.59668H21.6898Z" fill="url(#paint0_linear_418_5)"></path>
                            <path d="M8.73308 17.4011H16.4869L12.6104 10.9397L8.73308 4.47754L4.8558 10.9397L0.978516 17.4011H8.73308Z" fill="url(#paint1_linear_418_5)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_418_5" x1="24.3973" y1="-2.77552" x2="16.5038" y2="8.84742" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#003AF9"></stop>
                                    <stop offset="1" stop-color="#00ACFF"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_418_5" x1="15.7805" y1="5.14307" x2="5.34157" y2="23.3002" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFDF00"></stop>
                                    <stop offset="1" stop-color="#FF6100"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="footer__decor">
        <img loading="lazy" src="img/footer/cat.png" alt="Cat Image" />
    </div>
</footer>
}