import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'experience', 'skills', 'projects', 'education', 'opportunity', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-gray-900/90 backdrop-blur-xl py-2 shadow-gold-sm border-b border-yellow-500/15" : "bg-transparent py-3 sm:py-4"}`}>
      <div className="mx-auto px-4 sm:px-8 lg:px-10 max-w-7xl">
        <div className="flex items-center justify-between gap-3 min-h-[44px]">
          <a
            href="#home"
            className="font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl text-white hover:text-yellow-500 transition-colors duration-300 truncate"
            onClick={() => setMenuOpen(false)}
          >
            Aqeel <span className="text-yellow-500 hidden xs:inline">Abbas</span> Khan
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-300 font-medium text-base relative group ${
                      activeSection === link.id
                        ? "text-yellow-500"
                        : "text-white hover:text-yellow-500"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-500 transition-all duration-300 ${
                        activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://github.com/aqeelabbaskhan41"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/aqeelabbaskhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="/Aqeel_Abbas_Khan_Resume.pdf"
                download
                className="text-sm text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                Resume
              </a>
              <a
                href="#opportunity"
                className="px-4 py-2 bg-yellow-500 text-gray-900 text-sm font-bold rounded-full hover:bg-yellow-400 transition-colors duration-200 shadow-gold-sm"
              >
                Hire Me
              </a>
            </div>
          </nav>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#opportunity"
              className="px-3 py-2 bg-yellow-500 text-gray-900 text-xs font-bold rounded-full min-h-[40px] inline-flex items-center"
            >
              Hire Me
            </a>
            <button
              className="text-white p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <HiX className="w-7 h-7 text-yellow-500" />
              ) : (
                <HiMenuAlt3 className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-[56px] bottom-0 bg-gray-900/97 backdrop-blur-md overflow-y-auto px-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))]"
          >
            <div className="flex flex-col items-center gap-5 max-w-sm mx-auto">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className={`text-xl py-2 min-h-[44px] inline-flex items-center ${
                    activeSection === link.id
                      ? "text-yellow-500 font-bold"
                      : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex space-x-8 mt-4">
                <a
                  href="https://github.com/aqeelabbaskhan41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-2"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aqeelabbaskhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white p-2"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
              <a
                href="/Aqeel_Abbas_Khan_Resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="btn-secondary mt-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
