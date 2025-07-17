import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/aqeel-abbas-khan-1061612a9",
      title: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/aqeelabbaskhan41",
      title: "GitHub"
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/923090931916",
      title: "WhatsApp"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:aqeelabbaskhan41@gmail.com",
      title: "Email"
    }
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 border-t border-gray-800 relative">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(to right, rgba(234,179,8,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(234,179,8,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main content with perfect alignment */}
        <div className="flex flex-col items-center">
          {/* Call-to-action card */}
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 mb-12 w-full max-w-2xl text-center border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to <span className="text-yellow-500">Collaborate</span>?
            </h3>
            <p className="text-gray-300 mb-6">
              Have a project in mind? Lets turn your ideas into reality.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 bg-yellow-500 rounded-full font-medium text-gray-900"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(234, 179, 8, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex justify-center gap-5 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full text-yellow-500 text-xl hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 border border-gray-700"
                whileHover={{ y: -3 }}
                aria-label={link.title}
                title={link.title}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {navLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href}
                className="relative py-1 px-2 group"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-500 transform -translate-x-1/2 group-hover:w-4/5 transition-all duration-300"></span>
              </motion.a>
            ))}
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex flex-col items-center text-gray-400 hover:text-yellow-500 transition-colors duration-300 mb-8"
            whileHover={{ y: -3 }}
          >
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center mb-1 hover:border-yellow-500">
              <FaArrowUp />
            </div>
            <span className="text-sm">Back to Top</span>
          </motion.button>

          {/* Copyright */}
          <motion.div 
            className="text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} Aqeel Abbas Khan. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;