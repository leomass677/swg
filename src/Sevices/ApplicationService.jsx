import React, { useState, useEffect } from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import WorkWithYouLink from "../component/WorkWithYouLink";

const ApplicationService = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    image1: false,
    image2: false,
  });

  const services = [
    {
      id: "application-service-provider",
      name: "Application Service Provider",
    },
    { id: "it-consulting", name: "IT Consulting" },
    {
      id: "bespoke-technology-innovation",
      name: "Bespoke Technology Innovation",
    },
    { id: "automation-service", name: "Automation Service" },
    { id: "infrastructure-service", name: "Infrastructure Service" },
    { id: "digital-commerce", name: "Digital Commerce" },
    { id: "customer-experience", name: "Customer Experience" },
    { id: "security-solutions", name: "Security Solutions" },
    {
      id: "sustainability-consulting",
      name: "Sustainability Consulting & Solutions",
    },
  ];

  const features = [
    "Holistic Application Development",
    "Scalable Solutions",
    "User-Centric Design",
    "Robust Security Measures",
    "Continuous Integration and Deployment",
    "Comprehensive Support and Maintenance",
  ];

  // Simple scroll animation trigger
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsVisible({
        hero: scrollY > 100,
        image1: scrollY > windowHeight * 0.5,
        image2: scrollY > windowHeight * 1.2,
      });
    };

    // Initial trigger
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation classes based on visibility
  const getAnimationClass = (section, delay = false) => {
    const baseClasses = "transition-all duration-700 ease-out";
    if (isVisible[section]) {
      return delay
        ? `${baseClasses} opacity-100 translate-y-0 scale-100`
        : `${baseClasses} opacity-100 translate-y-0`;
    }
    return delay
      ? `${baseClasses} opacity-0 translate-y-8 scale-95`
      : `${baseClasses} opacity-0 translate-y-8`;
  };

  // Scroll to section function
  const scrollToSection = (sectionId, index) => {
    setActiveSection(index);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="applicationService"
      className="min-h-screen text-shade bg-gradient-to-br from-slate-50 to-gray-100/80"
    >
      <section className="mx-auto max-w-[1440px] flex gap-8 lg:gap-16 px-4 lg:px-8">
        {/*  Sidebar Navigation */}
        <div className="w-full lg:w-80 sticky top-24 h-fit lg:h-screen pt-24 pb-8 bg-transparent">
          <div className="    rounded-xl p-6 lg:p-8   border border-gray-200/60">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Our Services
            </h3>
            <nav className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id, index)}
                  className="block group w-full text-left"
                >
                  <div
                    className={`
                    flex items-center justify-between p-3 rounded-xl transition-all duration-300
                    ${
                      activeSection === index
                        ? "bg-blue-shade border border-blue-100 shadow-xs"
                        : "hover:bg-gray-200/50 border border-transparent"
                    }
                  `}
                  >
                    <p
                      className={`
                      font-medium transition-all duration-300
                      ${
                        activeSection === index
                          ? "text-blue-600 scale-105"
                          : "text-gray-600 group-hover:text-gray-900"
                      }
                    `}
                    >
                      {service.name}
                    </p>
                    <GoChevronRight
                      className={`
                      transition-all duration-300
                      ${
                        activeSection === index
                          ? "text-blue-500 scale-110 rotate-90"
                          : "text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1"
                      }
                    `}
                    />
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-24 overflow-hidden">
          {/* Hero Sec */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900/90 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col p-8 lg:p-16 pb-0 gap-8">
              <div className={getAnimationClass("hero")}>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Unlock Your Application's{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    &#123; Full Potential &#125;
                  </span>
                </h1>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1 flex flex-col gap-8">
                  <div className={getAnimationClass("hero", true)}>
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-200 font-light">
                      Utilizing the best technologies to create dynamic, secure,
                      and comprehensive application suites that promote better
                      business outcomes.
                    </p>
                  </div>
                  <div className={getAnimationClass("hero", true)}>
                    <WorkWithYouLink label="Let's accelerate your growth" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className={getAnimationClass("hero", true)}>
                    {features.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer mb-3 last:mb-0"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                        <p className="text-gray-100 font-medium group-hover:text-white transition-colors duration-300">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Sections */}
            {services.map((service, index) => (
              <section
                key={service.id}
                id={service.id}
                className="border-t border-white/10 group overflow-hidden relative min-h-[600px] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
                <img
                  src={
                    index % 2 === 0
                      ? "https://cdn.pixabay.com/photo/2019/09/19/22/59/virtual-reality-4490469_1280.jpg"
                      : "https://cdn.pixabay.com/photo/2020/01/07/20/09/rubicks-4748483_1280.jpg"
                  }
                  alt={service.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className={`absolute z-20 max-w-xl mx-8 ${
                    index % 2 === 0
                      ? "lg:right-0 lg:bottom-70"
                      : "lg:right-0 lg:bottom-90"
                  }`}
                >
                  <div className="bg-blue-100/70  backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                    <h5 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {service.name}
                    </h5>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Comprehensive {service.name.toLowerCase()} solutions
                      tailored to your business needs. Our expert team delivers
                      cutting-edge technology and innovative approaches to drive
                      your success forward.
                    </p>
                    <WorkWithYouLink
                      label="  Learn More"
                      className="mt-4 block   text-grey-700 font-semibold"
                    />
                  </div>
                </div>
              </section>
            ))}

            {/* Original Image Sections (keeping for reference) */}
            <div className="border-t border-white/10 group overflow-hidden relative mt-12">
              <div className="absolute right-0 inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
              <img
                src="https://cdn.pixabay.com/photo/2019/09/19/22/59/virtual-reality-4490469_1280.jpg"
                alt="Virtual Reality Technology"
                className="w-full h-[500px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className={getAnimationClass("image1")}>
                <div className="absolute bottom-8 left-8 right-8 lg:right-auto lg:left-8 lg:max-w-md z-20 bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20">
                  <h5 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Unlock Your Application's Full{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      Potential
                    </span>
                  </h5>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Experience next-level innovation with dynamic, secure, and
                    intelligent application suites—powered by cutting-edge
                    technology and immersive virtual reality environments that
                    drive stronger business outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
              <img
                src="https://cdn.pixabay.com/photo/2020/01/07/20/09/rubicks-4748483_1280.jpg"
                alt="Problem Solving Innovation"
                className="w-full h-[500px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className={getAnimationClass("image2")}>
                <div className="absolute bottom-8 right-8 left-8 lg:left-auto lg:right-8 lg:max-w-md z-20 bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20">
                  <h5 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Problem-Solver <span className="text-blue-500">Energy</span>
                  </h5>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    We transform your most complex challenges into smart,
                    elegant software solutions that simply work, scale, and
                    deliver real results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationService;
