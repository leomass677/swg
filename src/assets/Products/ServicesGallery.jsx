import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkWithYouLink from "../../component/WorkWithYouLink";
import { IoClose } from "react-icons/io5";

const ServicesGallery = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isGridView, setIsGridView] = useState(1);
  const galleryRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "A Simplified Self-Service Immigration Portal",
      image:
        "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg",
      category: "government",
      description:
        "Streamlined immigration processes with automated verification systems",
    },
    {
      id: 2,
      title: "AUTOMATED DRIVING LICENSE SOLUTION",
      subtitle: "A Card Production & Identity Management System",
      image: "https://swglobal.com/images/products/passports.png",
      category: "government",
      description:
        "End-to-end driving license automation with secure identity management",
    },
    {
      id: 3,
      title: "Automate Your Membership Management With Us!",
      image:
        "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg",
      category: "business",
      description:
        "Comprehensive membership management and engagement platform",
    },
    {
      id: 4,
      title: "ENTRUST",
      subtitle: "Building Trust Between Vendors & Customers",
      image:
        "https://cdn.pixabay.com/photo/2017/08/05/00/10/laptop-2581903_1280.jpg",
      category: "business",
      description:
        "Trust and verification ecosystem for secure business transactions",
    },
    {
      id: 5,
      title: "Optimized Business Operations Powered By Erp Systems",
      image:
        "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
      category: "enterprise",
      description:
        "Enterprise resource planning for optimized operational efficiency",
    },
    {
      id: 6,
      title:
        "The Simplified, Do-It-Yourself Way To Raise Money For Your Business.",
      image:
        "https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_1280.jpg",
      category: "finance",
      description: "Crowdfunding and investment platform for business growth",
    },
    {
      id: 7,
      title: "Future-Centric Hr Management With Hrmis",
      image:
        "https://cdn.pixabay.com/photo/2017/09/28/13/17/zawijas-2795480_1280.jpg",
      category: "enterprise",
      description:
        "Next-generation human resource management information system",
    },
    {
      id: 8,
      title: "An Innovative Way For Everyone To Get Their Daily Needs",
      image:
        "https://cdn.pixabay.com/photo/2019/11/28/16/46/family-4659589_1280.jpg",
      category: "retail",
      description:
        "Revolutionary platform for daily necessities and essential services",
    },
    {
      id: 9,
      title: "Building The Postal Service Of Tomorrow, Today.",
      image:
        "https://cdn.pixabay.com/photo/2017/02/25/17/19/high-tech-2098304_1280.jpg",
      category: "logistics",
      description:
        "Modernized postal and logistics solutions for the digital age",
    },
  ];

  const categories = [
    "all",
    "government",
    "business",
    "enterprise",
    "finance",
    "retail",
    "logistics",
  ];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div
      id="productDescription"
      className="min-h-screen  relative py-16 pb-24 px-4  bg-dark/75 "
    >
      <div className="max-w-[1440px]   w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-12 ">
        {/* Header */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center flex flex-col  mb-16"
          >
            <h1 className="text-6xl font-bold text-blue-500 mb-6">
              Our Product
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Innovative solutions transforming industries through cutting-edge
              technology and automation
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 cursor-pointer hover:scale-105 py-2 rounded-full capitalize transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-blue-500 scale-105 text-shade shadow-lg shadow-blue-500/25"
                      : "bg-shade/15 backdrop-blur-sm text-gray-300 hover:bg-shade/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            {/* <div className="flex gap-2 bg-shade/15 rounded-lg p-1">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 px-4 rounded transition-all ${
                isGridView ? "bg-blue-500 text-shade" : "text-gray-300"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 px-4 rounded transition-all ${
                !isGridView ? "bg-blue-500 text-shade" : "text-gray-200"
              }`}
            >
              List
            </button>
          </div> */}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          ref={galleryRef}
          className={`max-w-7xl mx-auto ${
            isGridView
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col gap-6"
          }`}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group cursor-pointer ${
                  isGridView
                    ? "aspect-[4/3]"
                    : "flex items-center gap-6 p-6 bg-shade/5 rounded-2xl hover:bg-shade/10"
                }`}
                onClick={() => setSelectedService(service)}
              >
                {/* Grid View */}
                {isGridView ? (
                  <div className="relative h-full bg-gray-800 rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                    {/* Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/0 via-dar k/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                      <h3 className="text-xl font-bold text-shade mb-2">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="text-blue-400 text-sm mb-3">
                          {service.subtitle}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-300 capitalize">
                          {service.category}
                        </span>
                        <WorkWithYouLink
                          className={"text-shade"}
                          label="Learn More"
                        />
                      </div>
                    </div>

                    {/* Hover Eff */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300" />
                  </div>
                ) : (
                  /* List V */
                  <>
                    <div className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-shade mb-2">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="text-blue-300 text-lg mb-3">
                          {service.subtitle}
                        </p>
                      )}
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-shade text-xl">→</span>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-blue-500/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-80 bg-gray-700">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 cursor-pointer w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-shade hover:bg-black/70 transition-colors"
                  >
                    <IoClose />
                  </button>
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-shade mb-4">
                    {selectedService.title}
                  </h2>
                  {selectedService.subtitle && (
                    <p className="text-blue-300 text-xl mb-6">
                      {selectedService.subtitle}
                    </p>
                  )}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedService.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 capitalize">
                      {selectedService.category}
                    </span>
                    <WorkWithYouLink
                      label="Learn more"
                      className={"text-shade"}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGallery;
