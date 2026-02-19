import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Smooth scroll (closes mobile menu after click)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  // ✅ WhatsApp: replace with your real number (international format)
  const whatsappNumber = "234XXXXXXXXXX";
  const whatsappMessage = encodeURIComponent(
    "Hi Lovoh Creates, I want to book a free Brand Clarity Session."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const navItems = [
    { id: "home", label: "Home" },
    { id: "problem", label: "Why Brands Struggle" },
    { id: "services", label: "What We Do" },
    { id: "contact", label: "Let's Talk" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-blue-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Lovoh Creates
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation Links */}
            <div className="flex items-center bg-gray-50/80 rounded-2xl p-1 border border-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-blue-700 bg-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10">Book Free Session</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>
              <Link
                to='https://wa.me/qr/I6P5AWU6GHDQE1'
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow"
              >
                <FaWhatsapp className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <span>Chat on WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <IoClose className="w-5 h-5 text-blue-600" />
            ) : (
              <HiOutlineMenuAlt3 className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-blue-100 shadow-lg">
            <ul className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile CTAs */}
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold hover:shadow-md transition-all duration-200"
              >
                Book Free Session
              </button>
              <Link
                to='https://wa.me/qr/I6P5AWU6GHDQE1'
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-blue-100 bg-white text-gray-700 text-sm font-semibold hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
              >
                <FaWhatsapp className="w-4 h-4 text-blue-600" />
                <span>Chat on WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;