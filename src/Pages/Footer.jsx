import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <img src="/svgs/footer-bg.svg" alt="" />
      </div>
      <div className="">
        <div className="">
          <div className="">
            <div>
              <div className="">
                <span className="">About Us</span>
                <ul>
                  <li>
                    <a className="" href="/about-us">
                      <span className="">About SWG</span>
                    </a>
                  </li>
                  <li>
                    <a className="" href="/about-us#history">
                      <span className="">History</span>
                    </a>
                  </li>
                  {/* ... other list items ... */}
                </ul>
              </div>
            </div>
            {/* Repeat the rest of your sections here, same pattern */}
          </div>

          <div className="">
            <div className="">
              <span className="">Newsletter</span>
              <span className="">
                Stay Industry-connected with our monthly newsletter written by
                our editorial team.
              </span>
              <div className="">
                <div className="">
                  <input placeholder="Your email address" />
                  <span className=""></span>
                </div>
              </div>
            </div>

            <div className="">
              <span className="">Our Socials</span>
              <div className="">
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

        <div className="">
          <div>
            <div className="">
              <span className="">
                <img src="/svgs/swg-logo.svg" alt="SWG Logo" />
              </span>
            </div>
            <div className="">
              Copyright © {new Date().getFullYear()} Mag Group Limited
            </div>
          </div>
          <span className="">
            <img src="/images/footer-image.png" alt="Footer" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
