import React from "react";

const VendorFinancing = () => {
  return (
    <div class="vendor-financing">
      <div class="section-bg">
        <img src="/svgs/vendor-financing-bg.svg" alt="" />
      </div>
      <div class="container">
        <div class="vendor-financing__image">
          <img src="/images/home/vendor-financing.png" alt="" />
        </div>
        <div class="vendor-financing__content">
          <h3 class="vendor-financing__title">Zero Cost / Vendor Financing</h3>
          <span class="vendor-financing__subtitle">
            Our unique model of operation ensures that our projects are
            completely financed by vendors, and investments are recovered
            through subscriptions or pay-as-you-go.
          </span>
          <ul class="vendor-financing__text">
            <li>
              - You do not pay any upfront fees for the solutions we provide
            </li>
            <li>- Your users bear the cost of the solution</li>
            <li>
              - Recovery cost can be spread over a period of time and the number
              of users
            </li>
            <li>- Fulfill your extensive ICT needs on a limited ICT budget</li>
          </ul>
          <a
            class="link link--white vendor-financing__action link--with-icon"
            href="/"
          >
            <span class="link__icon">
              <span class="link__icon__shader"></span>
              <span class="link__icon__arrow_line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.626"
                  height="1.5"
                >
                  <g>
                    <path
                      d="M.75.75h19.126"
                      fill="none"
                      stroke="#031d44"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                  </g>
                </svg>
              </span>
              <span class="link__icon__arrow_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.121"
                  height="6.811"
                >
                  <g>
                    <g>
                      <path
                        d="m11.061 1.061-5 5-5-5"
                        fill="none"
                        stroke="#031d44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </span>
            <span class="link__text">Let's work with you</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VendorFinancing;
