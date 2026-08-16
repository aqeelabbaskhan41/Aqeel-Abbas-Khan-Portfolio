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
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 bg-[#07080c] border-b border-yellow-500/30 ${scrolled || menuOpen ? "shadow-gold-sm" : ""}`}>
        <div className="mx-auto px-4 sm:px-8 lg:px-10 max-w-7xl h-full">
          <div className="flex items-center justify-between gap-3 h-full">
            <a
              href="#home"
              className="font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl text-white hover:text-yellow-500 transition-colors duration-300 truncate min-w-0"
              onClick={() => setMenuOpen(false)}
            >
              Aqeel <span className="text-yellow-500 hidden xs:inline">Abbas</span> Khan
            </a>

            <nav className="hidden lg:flex items-center gap-6 shrink-0">
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

            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <a
                href="#opportunity"
                className="px-3 py-2 bg-yellow-500 text-gray-900 text-xs font-bold rounded-full min-h-[40px] inline-flex items-center"
              >
                Hire Me
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center h-11 w-11 rounded-lg border-2 border-yellow-500 bg-[#12141b] text-yellow-500"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <HiX className="h-7 w-7" />
                ) : (
                  <HiMenuAlt3 className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="lg:hidden fixed inset-0 z-[45] bg-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="lg:hidden fixed top-16 right-0 z-[46] w-[82%] max-w-[300px] h-auto bg-[#07080c] border-l-2 border-b-2 border-yellow-500 rounded-bl-xl shadow-gold"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <nav className="flex flex-col py-2 pb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-6 py-4 text-lg border-b border-white/10 min-h-[52px] flex items-center ${
                      activeSection === link.id
                        ? "text-yellow-500 bg-yellow-500/10 font-semibold"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="px-6 pt-4 flex items-center gap-5">
                  <a
                    href="https://github.com/aqeelabbaskhan41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 p-2"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aqeelabbaskhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 p-2"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                </div>
                <a
                  href="/Aqeel_Abbas_Khan_Resume.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="mx-6 mt-4 mb-1 inline-flex items-center justify-center min-h-[44px] rounded-full bg-yellow-500 text-gray-900 font-bold text-sm"
                >
                  Download Resume
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
