import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['home', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-sm py-2 shadow-lg" : "bg-gray-900 py-4"}`}>
      <div className="container mx-auto px-5 sm:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl sm:text-3xl text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Aqeel <span className="text-yellow-500">Abbas</span> Khan
          </motion.a>

          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    className={`transition-colors duration-300 font-medium text-lg relative group ${
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
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center space-x-4 ml-6">
              <motion.a
                href="https://github.com/aqeelabbaskhan41"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aqeel-abbas-khan-1061612a9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
            </div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? (
              <HiX className="w-8 h-8 text-yellow-500" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8" />
            )}
          </motion.button>

          {/* Mobile Menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className={`text-2xl transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-yellow-500 font-bold"
                      : "text-white hover:text-yellow-500"
                  }`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: link.id * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex space-x-6 mt-8">
                <motion.a
                  href="https://github.com/aqeelabbaskhan41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-500 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aqeel-abbas-khan-1061612a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-500 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;