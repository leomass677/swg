import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-bg">
        <img src="/svgs/footer-bg.svg" alt="" />
      </div>
      <div className="container">
        <div className="footer__main">
          <div className="footer__links-section">
            <div>
              <div className="footer__links">
                <span className="footer__links__title">About Us</span>
                <ul>
                  <li>
                    <a className="link link--undefined" href="/about-us">
                      <span className="link__text">About SWG</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="link link--undefined"
                      href="/about-us#history"
                    >
                      <span className="link__text">History</span>
                    </a>
                  </li>
                  {/* ... other list items ... */}
                </ul>
              </div>
            </div>
            {/* Repeat the rest of your sections here, same pattern */}
          </div>

          <div className="footer__newsletter__socials">
            <div className="footer__newsletter">
              <span className="footer__newsletter__title">Newsletter</span>
              <span className="footer__newsletter__description">
                Stay Industry-connected with our monthly newsletter written by
                our editorial team.
              </span>
              <div className="footer__newsletter__input">
                <div className="input-container">
                  <input placeholder="Your email address" />
                  <span className="search-icon"></span>
                </div>
              </div>
            </div>

            <div className="footer__socials">
              <span className="footer__socials__title">Our Socials</span>
              <div className="footer__socials__icons">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/icons/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src="/icons/twitter.svg" alt="Twitter" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src="/icons/facebook.svg" alt="Facebook" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__meta">
          <div>
            <div className="footer__meta__brand">
              <span className="footer__meta__logo">
                <img src="/svgs/swg-logo.svg" alt="SWG Logo" />
              </span>
            </div>
            <div className="footer__meta__copyright">
              Copyright © {new Date().getFullYear()} Mag Group Limited
            </div>
          </div>
          <span className="footer__meta__image">
            <img src="/images/footer-image.png" alt="Footer" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
