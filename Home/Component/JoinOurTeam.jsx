import React from "react";

const JoinOurTeam = () => {
  return (
    <div class="cta">
      <span class="cta__bg">
        <img src="/images/footer1.jpg" />
      </span>
      <div class="container">
        <h3 class="cta__title">
          Join our Team and be Part of our Success Story!
        </h3>
        <span class="cta__link">
          <a class="link link--undefined link--with-icon" href="/careers#jobs">
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
            <span class="link__text">Find your next job</span>
          </a>
        </span>
      </div>
    </div>
  );
};

export default JoinOurTeam;
