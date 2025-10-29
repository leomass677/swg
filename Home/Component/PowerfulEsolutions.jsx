import React from "react";

const PowerfulEsolutions = () => {
  return (
    <div class="powerful-esolutions">
      <div class="blurred-bg" style="background: #eeeeee">
        <img src="/images/circle.png" alt="" />
      </div>
      <div class="container">
        <h1 class="powerful-esolutions__title">
          Engineering powerful e-Solutions for emerging markets
        </h1>
        <span class="powerful-esolutions__text">
          We do not simply offer solutions, we create new markets and have an
          extensive portfolio of projects that we've successfully implemented in
          diverse industries.
        </span>
        <div class="powerful-esolutions__actions">
          <a class="link link--undefined link--with-icon" href="/">
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
          <a class="link link--undefined link--arrow-only" href="/">
            <span class="link__text">Read our case studies</span>
            <span class="link__arrow">
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
          </a>
        </div>
        <div class="powerful-esolutions__image__container">
          <span class="powerful-esolutions__circle">
            <img src="/svgs/powerful-esolutions-circles.svg" alt="" />
          </span>
          <span class="powerful-esolutions__image">
            <img src="/images/home/powerful-esolutions.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PowerfulEsolutions;
