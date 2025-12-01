import React, { useState, useEffect } from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import WorkWithYouLink from "../component/WorkWithYouLink";
import images from "../assets/images";

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

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className="min-h-screen text-gray-600  bg-gradient-to-br from-slate-50 py-8 sm:py-12 md:py-16 to-gray-100/80"
    >
      <section className="mx-auto max-w-[1440px] flex flex-col  lg:flex-row gap-6 md:gap-8 lg:gap-16  px-4 sm:px-6 lg:px-12 xl:px-12">
        {/* Mobile Services Dropdown */}
        <div className="lg:hidden w-full sticky top-20 z-30 bg-shade rounded-xl border border-gray-200/60 shadow-sm">
          <select
            onChange={(e) => {
              const index = parseInt(e.target.value);
              scrollToSection(services[index].id, index);
            }}
            value={activeSection}
            className="w-full p-4 text-lg font-medium bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-100 rounded-xl"
          >
            {services.map((service, index) => (
              <option key={service.id} value={index}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sidebar Navigation - Desktop */}
        <div className="hidden lg:block w-full lg:w-80 xl:w-96 sticky top-24 h-fit max-h-[83vh] overflow-y-scroll 2xl:pt-24 pb-8 bg-transparent">
          <div className="rounded-xl p-6 lg:p-8 border border-gray-200/60 bg-shade backdrop-blur-sm">
            <h3 className="text-lg bg-shade  xl:text-xl   z-10 font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
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
                    flex items-center justify-between p-3 xl:p-4 rounded-xl transition-all duration-300
                    ${
                      activeSection === index
                        ? "bg-blue-50 border border-blue-100 shadow-xs"
                        : "hover:bg-gray-50 border border-transparent"
                    }
                  `}
                  >
                    <p
                      className={`
                      font-medium text-sm xl:text-base transition-all duration-300
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
                      transition-all duration-300 flex-shrink-0
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
        <div className="flex-1 mt-4 lg:mt-24 overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900/90 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
            <div className="flex flex-col p-6 sm:p-8 lg:p-12 xl:p-16 pb-0">
              <div className={getAnimationClass("hero")}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-tight">
                  Unlock Your Application's <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                    &#123; Full Potential &#125;
                  </span>
                </h1>
              </div>

              <div className="flex flex-col xl:flex-row gap-6 md:gap-8 lg:gap-12 mt-6 md:mt-8">
                <div className="flex-1 flex flex-col gap-6 md:gap-8">
                  <div className={getAnimationClass("hero", true)}>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 font-light">
                      Utilizing the best technologies to create dynamic, secure,
                      and comprehensive application suites that promote better
                      business outcomes.
                    </p>
                  </div>
                  <div className={getAnimationClass("hero", true)}>
                    <WorkWithYouLink
                      label="Let's accelerate your growth"
                      className="w-full sm:w-auto"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className={getAnimationClass("hero", true)}>
                    {features.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg md:rounded-xl bg-shade/5 backdrop-blur-sm border border-shade/10 hover:bg-shade/10 transition-all duration-300 group cursor-pointer mb-2 sm:mb-3 last:mb-0"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300 flex-shrink-0" />
                        <p className="text-gray-100 font-medium text-sm sm:text-base group-hover:text-shade transition-colors duration-300">
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
                className="border-t border-shade/10 group overflow-hidden relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center"
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
                  className={`absolute z-20 w-[90%] sm:w-[85%] md:max-w-xl mx-auto ${
                    index % 2 === 0
                      ? "lg:right-4 xl:right-8 bottom-4 sm:bottom-8"
                      : "lg:right-4 xl:right-8 bottom-4 sm:bottom-8"
                  }`}
                >
                  <div className="bg-shade/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 sm:p-8 shadow-2xl border border-shade/20">
                    <h5 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h5>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                      Comprehensive {service.name.toLowerCase()} solutions
                      tailored to your business needs. Our expert team delivers
                      cutting-edge technology and innovative approaches to drive
                      your success forward.
                    </p>
                    <WorkWithYouLink
                      label="Learn More"
                      className="mt-4 block text-gray-700 font-semibold text-sm sm:text-base"
                    />
                  </div>
                </div>
              </section>
            ))}

            {/* Additional Image Sections */}
            <div className="border-t border-shade/10 group overflow-hidden relative mt-8 md:mt-12">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
              <img
                src="https://cdn.pixabay.com/photo/2019/09/19/22/59/virtual-reality-4490469_1280.jpg"
                alt="Virtual Reality Technology"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className={getAnimationClass("image1")}>
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 lg:right-auto lg:max-w-md z-20 bg-shade/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-shade/20">
                  <h5 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                    Unlock Your Application's Full{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                      Potential
                    </span>
                  </h5>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                    Experience next-level innovation with dynamic, secure, and
                    intelligent application suites—powered by cutting-edge
                    technology and immersive virtual reality environments that
                    drive stronger business outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-shade/10 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
              <img
                src="https://cdn.pixabay.com/photo/2020/01/07/20/09/rubicks-4748483_1280.jpg"
                alt="Problem Solving Innovation"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className={getAnimationClass("image2")}>
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 left-4 sm:left-6 md:left-8 lg:left-auto lg:max-w-md z-20 bg-shade/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-shade/20">
                  <h5 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                    Problem-Solver <span className="text-blue-500">Energy</span>
                  </h5>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
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
