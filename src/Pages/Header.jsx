import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AvailabilityBadge from "../Animation/AvailabilityBadge";
import { label, path, ul } from "framer-motion/client";
import icons from "../assets/icons";
import { NavLink } from "react-router-dom";
// Navigation config
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
      { label: "Sustainablity Consulting & Solutions", href: "/plugins" },
      { label: "Bespoke Technology Innovation", href: "/integrations" },
    ],
  },

  {
    label: "Products",
    items: [
      { label: "E-Immigration Portaln", href: "/design" },
      { label: "Automated Driving License Solution", href: "/prototyping" },
      { label: "Entrust", href: "/collaboration" },
      { label: "Membership Management Solution", href: "/handoff" },
      { label: "Resource Planning System", href: "/design-systems" },
      { label: "The Smart Crowdfunding Solution", href: "/plugins" },
      { label: "Hobo", href: "/integrations" },
      { label: "Integrated Tax Management Solution", href: "/integrations" },
      { label: "Hrmis", href: "/integrations" },
      { label: "Integrated Postal Management System", href: "/integrations" },
      { label: "Souk Place", href: "/integrations" },
    ],
  },
];

const navMenu = [
  { label: "Home", path: "/" },
  { label: Menu, path: "/" },
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
      { label: "Alumni & Intenship Program", href: "/careers" },
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
  const [hover, setIsHover] = useState(false);

  return (
    <div className="fixed w-full z-80">
      {/* Header */}
      <header className="bg-shade shadow-sm  sticky top top-0 left-0 w-full z-50  relative">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src={icons.logo} alt="" />

          {/* Desktop Nav */}
          <div className="px-4 py-3">
            {hover && (
              <div className="fixed left-0 top-[80px] h-screen peer   w-screen bg-shade z-60 grid grid-cols-4 px-[24px] py-[28px] border-t-2 border-grey-400">
                {navItems.map((nav, key) => (
                  <ul key={key}>
                    <h6 className="text-sm text-blue-700  font-medium ">
                      {nav.label}
                    </h6>
                    <div className="flex flex-col gap-2 mt-4">
                      {" "}
                      {nav.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block text-gray-700 hover:text-blue-600 text-xs hover:translate-x-2 transition-all duration-500 ease-in-out"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </ul>
                ))}
                <div className="flex flex-col gap-4">
                  {navItems002.map((navItem, key) => (
                    <ul key={key}>
                      <h6 className="text-sm text-blue-700  font-medium ">
                        {navItem.label}
                      </h6>
                      <div className="mt-4 flex flex-col gap-1">
                        {" "}
                        {navItem.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block text-gray-700 hover:text-blue-600 text-xs hover:translate-x-2 transition-all duration-500 ease-in-out"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </ul>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justufy-between items-center gap-8 px-12 bg-blue-100/40 backdrop-blur-xs py-1 rounded-4xl">
              <p className="flex items-center  ">
                Home <MdOutlineKeyboardArrowRight />
              </p>
              <p>
                <AvailabilityBadge />
              </p>
              <li
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="flex items-center "
              >
                Menu <MdOutlineKeyboardArrowRight />
              </li>
            </div>
          </div>
          {/* CTA Button */}
          <a
            href="/signup"
            className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-500 ease-initial text-sm font-medium hover:bg-blue-700 "
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-6">
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
