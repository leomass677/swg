import React from "react";

const Hero = () => {
  return (
    <div class="hero">
      <div class="container">
        <div class="hero__text">
          <h1>Powering Digital Transformation in Africa and Beyond</h1>
        </div>
        <div class="hero__image__container">
          <span class="hero__image">
            <img src="/images/home/hero-image.png" alt="" />
          </span>
          <span class="hero__mobile__text">
            We are a leading global provider of customized eGovernment,
            eEducation, and eHealthcare software solutions and IT
            infrastructure.
          </span>
          <a
            class="link link--undefined hero__link link--with-icon"
            href="/about-us"
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

export default Hero;
