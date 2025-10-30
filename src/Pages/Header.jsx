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
    label: "AbouT US",
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

  return (
    <div className=" relative">
      {/* Header */}
      <header className="bg-shade shadow-sm  sticky top top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src={icons.logo} alt="" />
          {/* Desktop Nav */}
          <div className="px-4 py-3">
            <ul className="flex justufy-between items-center gap-8 px-12 bg-blue-100/40 backdrop-blur-xs py-1 rounded-4xl">
              <li className="flex items-center ">
                Home <MdOutlineKeyboardArrowRight />
              </li>
              <li className="flex items-center ">
                Menu <MdOutlineKeyboardArrowRight />
                <div className="">
                  {navItems.map((item, key) => (
                    <ul></ul>
                  ))}
                </div>
              </li>
              <li>
                {" "}
                <AvailabilityBadge />
              </li>
            </ul>
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
