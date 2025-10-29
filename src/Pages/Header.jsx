import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// Navigation config
const navItems = [
  {
    label: "Product",
    items: [
      { label: "Design", href: "/design" },
      { label: "Prototyping", href: "/prototyping" },
      { label: "Collaboration", href: "/collaboration" },
      { label: "Developer Handoff", href: "/handoff" },
      { label: "Design Systems", href: "/design-systems" },
      { label: "Plugins", href: "/plugins" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Community", href: "/community" },
      { label: "Support", href: "/support" },
      { label: "Docs", href: "/docs" },
      { label: "Webinars", href: "/webinars" },
      { label: "Templates", href: "/templates" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
      { label: "Legal", href: "/legal" },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">FigmaClone</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 relative bg-[#cddff0] rounded-4xl px-4 py-2">
            {navItems.map((nav) => (
              <div key={nav.label} className="group relative">
                <button className="hover:text-blue-600  transition flex items-center gap-px group">
                  {nav.label}
                  <MdOutlineKeyboardArrowRight className="group-hover:rotate-90 transition-all duration-300" />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-lg rounded-md p-4 w-64 flex-col space-y-2 z-50">
                  {nav.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition text-sm"
                    >
                      {item.label}
                      <MdOutlineKeyboardArrowRight />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="/signup"
            className="hidden md:inline-block bg-[#1F6FE2] text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-500 ease-initial text-sm font-medium hover:bg-blue-700 "
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
