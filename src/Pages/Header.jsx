import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AvailabilityBadge from "../Animation/AvailabilityBadge";
import icons from "../assets/icons";

const navItems = [
  {
    label: "About US",
    items: [
      { label: "About SWG", href: "/about" },
      { label: "History", href: "/history" },
      { label: "Vision, Mission & Values", href: "/vision" },
      { label: "People, Performance & Culture", href: "/people" },
      { label: "How We Operate", href: "/operate" },
      { label: "Publications", href: "/publications" },
      { label: "The Team", href: "/team" },
      { label: "Partners & Affiliates", href: "/partners" },
      { label: "Our Global Footprint", href: "/footprint" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Digital Commerce", href: "/service" },
      { label: "IT Consulting", href: "/service" },
      { label: "Application Service Provider", href: "/service" },
      { label: "Automation Service", href: "/service" },
      { label: "Customer Experience", href: "/service" },
      { label: "Infrastructure Service", href: "/service" },
      { label: "Security Solutions", href: "/security" },
      { label: "Sustainability Consulting", href: "/service" },
      { label: "Bespoke Innovation", href: "/service" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "E-Immigration Portal", href: "/product" },
      { label: "Driving License Solution", href: "/product" },
      { label: "Entrust", href: "/entrust" },
      { label: "Membership Management", href: "/product" },
      { label: "Resource Planning System", href: "/product" },
      { label: "Crowdfunding Solution", href: "/product" },
      { label: "Hobo", href: "/hobo" },
      { label: "Tax Management", href: "/product" },
      { label: "HRMIS", href: "/hrmis" },
      { label: "Postal Management", href: "/product" },
      { label: "Souk Place", href: "/product" },
    ],
  },
];

const navItems002 = [
  {
    label: "Industries",
    items: [
      { label: "Private Sector", href: "/blog" },
      { label: "Public Sector", href: "/community" },
    ],
  },
  {
    label: "Careers",
    items: [
      { label: "Jobs", href: "/about" },
      { label: "Alumni & Internship Program", href: "/careers" },
      { label: "Our Talent Network", href: "/press" },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "Case Studies", href: "/about" },
      { label: "Blog", href: "/careers" },
    ],
  },
];

const handleScrollTop = () => {
  console.log("Scrolling to top...");
  alert("Scroll");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="fixed w-full z-50">
      <header className="bg-shade shadow-sm sticky top-0 left-0 w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/"
          >
            <img src={icons.logo} alt="SWG Logo" className="w-28 sm:w-36" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 bg-blue-100/40 backdrop-blur-xs px-8 py-2 rounded-4xl">
            <Link
              onClick={() => {
                setIsHover(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to="/"
              className="flex hover:font-medium transition-all duration-300 ease-in-out p-1 rounded-l-full  items-center cursor-pointer text-sm"
            >
              Home <MdOutlineKeyboardArrowRight />
            </Link>

            <li
              onMouseEnter={() => setIsHover(true)}
              className="flex items-center h-full cursor-pointer text-sm"
              tabIndex={0}
            >
              Menu <MdOutlineKeyboardArrowRight />
            </li>

            <AvailabilityBadge />
          </div>

          {/* CTA button */}
          <Link
            to="/"
            className="hidden sm:inline-block bg-blue-500 text-shade px-4 py-2 rounded-full hover:scale-105 transition-all duration-500 text-sm font-medium hover:bg-blue-700"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            aria-expanded={isOpen}
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown (Desktop) */}
        {isHover && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseLeave={() => setIsHover(false)}
            className="absolute left-0 top-[64px] w-full bg-shade z-40 px-4 sm:px-6 lg:px-12 py-6 border-t border-gray-200 shadow-md backdrop-blur-md"
          >
            <div className="max-w-[1440px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              {navItems.map((nav, key) => (
                <ul key={key}>
                  <h6 className="text-sm text-blue-700 font-medium mb-2">
                    {nav.label}
                  </h6>
                  <div className="flex flex-col gap-2">
                    {nav.items.map((item) => (
                      <Link
                        onClick={() => {
                          setIsHover(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        key={item.label}
                        to={item.href}
                        className="text-gray-700 flex items-center group hover:text-blue-600 text-xs transition-all duration-300 ease-in-out hover:translate-x-1"
                      >
                        {item.label}
                        <GoChevronRight className="ml-1 scale-0 opacity-0 -translate-x-2 group-hover:scale-105 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </ul>
              ))}

              <div className="flex flex-col gap-4">
                {navItems002.map((navItem, key) => (
                  <ul key={key}>
                    <h6 className="text-sm text-blue-700 font-medium mb-2">
                      {navItem.label}
                    </h6>
                    <div className="flex flex-col gap-2">
                      {navItem.items.map((item) => (
                        <Link
                          onClick={() => setIsHover(false)}
                          key={item.label}
                          to={item.href}
                          className="text-gray-700 group flex items-center hover:text-blue-600 text-xs transition-all duration-300 ease-in-out hover:translate-x-1"
                        >
                          {item.label}
                          <GoChevronRight className="ml-1 scale-0 opacity-0 -translate-x-2 group-hover:scale-105 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>
                  </ul>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-shade shadow-md px-4 py-6 space-y-6">
            {navItems.map((nav) => (
              <div key={nav.label}>
                <p className="text-blue-600 font-semibold mb-2">{nav.label}</p>
                <div className="space-y-2">
                  {nav.items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block text-gray-700 hover:text-blue-600 text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              to="/signup"
              className="block bg-blue-600 text-shade text-center py-2 rounded-full hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
