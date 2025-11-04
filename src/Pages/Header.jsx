import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AvailabilityBadge from "../Animation/AvailabilityBadge";
import icons from "../assets/icons";
import { GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";

const navItems = [
  {
    label: "About US",
    items: [
      { label: "About SWG", href: "/design" },
      { label: "History", href: "/prototyping" },
      { label: "Vision, Mission & Values", href: "/collaboration" },
      { label: "People, Performance & Culture", href: "/handoff" },
      { label: "How We Operate", href: "/design-systems" },
      { label: "Publications", href: "/plugins" },
      { label: "The Team", href: "/integrations" },
      { label: "Partners & Affiliates", href: "/plugins" },
      { label: "Our Global Footprint", href: "/integrations" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Digital Commerce", href: "/design" },
      { label: "IT Consulting", href: "/prototyping" },
      { label: "Application Service Provider", href: "/collaboration" },
      { label: "Automation Service", href: "/handoff" },
      { label: "Customer Experience", href: "/design-systems" },
      { label: "Infrastructure Service", href: "/plugins" },
      { label: "Security Solutions", href: "/integrations" },
      { label: "Sustainability Consulting & Solutions", href: "/plugins" },
      { label: "Bespoke Technology Innovation", href: "/integrations" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "E-Immigration Portal", href: "/design" },
      { label: "Automated Driving License Solution", href: "/prototyping" },
      { label: "Entrust", href: "/collaboration" },
      { label: "Membership Management Solution", href: "/handoff" },
      { label: "Resource Planning System", href: "/design-systems" },
      { label: "The Smart Crowdfunding Solution", href: "/plugins" },
      { label: "Hobo", href: "/integrations" },
      { label: "Integrated Tax Management Solution", href: "/integrations" },
      { label: "HRMIS", href: "/integrations" },
      { label: "Integrated Postal Management System", href: "/integrations" },
      { label: "Souk Place", href: "/integrations" },
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="fixed w-full z-50">
      <header className="bg-shade shadow-sm sticky top-0 left-0 w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          <img src={icons.logo} alt="SWG Logo" className="w-28 sm:w-36" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 bg-blue-100/40 backdrop-blur-xs px-8 py-2 rounded-4xl">
            <p className="flex items-center cursor-pointer text-sm">
              Home <MdOutlineKeyboardArrowRight />
            </p>
            <li
              onMouseEnter={() => setIsHover(true)}
              className="flex items-center h-full cursor-pointer text-sm"
            >
              Menu <MdOutlineKeyboardArrowRight />
            </li>
            <AvailabilityBadge />
          </div>

          {/* CTA  butto */}
          <a
            href="/signup"
            className="hidden sm:inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-500 text-sm font-medium hover:bg-blue-700"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown */}
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
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-gray-700 flex items-center group hover:text-blue-600 text-xs transition-all duration-300 ease-in-out hover:translate-x-1"
                      >
                        {item.label}
                        <GoChevronRight className="ml-1 scale-0 opacity-0 -translate-x-2 group-hover:scale-105 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
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
                        <a
                          key={item.label}
                          href={item.href}
                          className="text-gray-700 group flex items-center hover:text-blue-600 text-xs transition-all duration-300 ease-in-out hover:translate-x-1"
                        >
                          {item.label}
                          <GoChevronRight className="ml-1 scale-0 opacity-0 -translate-x-2 group-hover:scale-105 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      ))}
                    </div>
                  </ul>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile/md Menu */}
        {isOpen && (
          <div className="lg:hidden bg-shade shadow-md px-4 py-6 space-y-6">
            {navItems.map((nav) => (
              <div key={nav.label}>
                <p className="text-blue-600 font-semibold mb-2">{nav.label}</p>
                <div className="space-y-2">
                  {nav.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-600 text-sm"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <a
              href="/signup"
              className="block bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
