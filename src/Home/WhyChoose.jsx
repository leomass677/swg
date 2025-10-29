import React from "react";

const WhyChoose = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h3 className="">
            Why Choose SW Global to be your Trusted Technology Partner?
          </h3>
          <span className="">
            We understand the importance of staying ahead of the curve and
            that's why we provide tailored services and partnerships that give
            our clients a competitive edge.
          </span>
          <a className="" href="/">
            <span className="">
              <span className=""></span>
              <span className="">
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
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </span>
              <span className="">
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </g>
                  </g>
                </svg>
              </span>
            </span>
            <span className="">Let's work with you</span>
          </a>
        </div>
        <div className="">
          <div className="">
            <div className="" style={{ transform: "translate3d(-0px, 0, 0)" }}>
              {[
                {
                  icon: "/images/icons/africa.png",
                  title: "Intimate Knowledge Of Africa",
                  text: "In helping you thrive locally and globally, we leverage our African heritage and in-depth understanding of the continent.",
                },
                {
                  icon: "/images/icons/expertise-experience.png",
                  title: "Expertise & Experience",
                  text: "Our expertise in the industry is unparalleled; our experienced engineers create solutions that compete globally.",
                },
                {
                  icon: "/images/icons/consistent-execution.png",
                  title: "Proven & Consistent Execution",
                  text: "To meet your needs, we use state-of-the-art technologies and best practices, and provide full support services.",
                },
                {
                  icon: "/images/icons/collaborative-approach.png",
                  title: "Collaborative Approach",
                  text: "We'll work with you to ensure that your business objectives align with our offerings so that we can meet your specific needs.",
                },
                {
                  icon: "/images/icons/training-support.png",
                  title: "Training & Support",
                  text: "We facilitate training and support programs to ensure you and your team get the most out of your solutions and IT infrastructure.",
                },
                {
                  icon: "/images/icons/social-responsibility.png",
                  title: "Social Responsibility",
                  text: "To meet your needs, we use state-of-the-art technologies and best practices, and provide full support services.",
                },
              ].map((item, index) => (
                <div className="" key={index}>
                  <div className="">
                    <span className="">
                      <img src={item.icon} alt="" />
                    </span>
                    <span className="">{item.title}</span>
                    <span className="">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <span className="">
                <svg
                  data-name="Component 603 – 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="63"
                >
                  <g fill="none" stroke="#fff">
                    <circle cx="31.5" cy="31.5" r="31.5" stroke="none" />
                    <circle cx="31.5" cy="31.5" r="31" />
                  </g>
                  <g>
                    <path
                      d="m25.958 26.282-4.842 4.841 4.842 4.842"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <path fill="none" stroke="#fff" d="M41 31H21" />
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
                    <circle cx="31.5" cy="31.5" r="31.5" stroke="none" />
                    <circle cx="31.5" cy="31.5" r="31" />
                  </g>
                  <g>
                    <path
                      d="m36.951 26.282 4.842 4.841-4.842 4.842"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <path fill="none" stroke="#fff" d="M21 31h21" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
