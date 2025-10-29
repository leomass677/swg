import React from "react";

function Testimonials() {
  return (
    <div className="">
      <div className="">
        <img src="/svgs/testimonials-bg.svg" alt="" />
      </div>
      <div className="">
        <div className="">
          <div className="">Testimonials</div>
          <h3 className="">We Are Highly Rated By Our Clients</h3>
          <span className="">
            <img src="/images/home/testimonial-star.png" alt="" />
          </span>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <span className="">
                <svg
                  data-name="Component 603 – 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="63"
                >
                  <g fill="none" stroke="#fff">
                    <circle cx="31.5" cy="31.5" r="31.5" stroke="none"></circle>
                    <circle cx="31.5" cy="31.5" r="31"></circle>
                  </g>
                  <g>
                    <path
                      d="m25.958 26.282-4.842 4.841 4.842 4.842"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <path fill="none" stroke="#fff" d="M41 31H21"></path>
                </svg>
              </span>
              <span className="">
                <svg
                  data-name="Component 604 – 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="63"
                >
                  <g
                    transform="rotate(180 31.5 31.5)"
                    fill="none"
                    stroke="#fff"
                  >
                    <circle cx="31.5" cy="31.5" r="31.5" stroke="none"></circle>
                    <circle cx="31.5" cy="31.5" r="31"></circle>
                  </g>
                  <g>
                    <path
                      d="m36.951 26.282 4.842 4.841-4.842 4.842"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <path fill="none" stroke="#fff" d="M21 31h21"></path>
                </svg>
              </span>
            </div>
            <div className="" style={{ transform: "translate3d(-0px, 0, 0)" }}>
              {[...Array(5)].map((_, index) => (
                <div className="" key={index}>
                  <div className="">
                    <span className="">“</span>
                    <span className="">
                      We facilitate training and support programs to ensure you
                      and your team get the most out of your solutions and IT
                      infrastructure.We facilitate training and support programs
                      to ensure you and your team get the most out of your
                      solutions and IT infrastructure.We facilitate training and
                      support programs to ensure you a
                    </span>
                    <span className="">EVA ANIMASHAUN</span>
                    <span className="">CTO, Clinical Frontiers</span>
                    <span className="">
                      <img src="/images/home/testimonials/" alt="" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
