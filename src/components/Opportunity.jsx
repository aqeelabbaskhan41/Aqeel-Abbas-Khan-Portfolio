import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaBuilding, FaHandshake, FaUsers, FaWhatsapp, FaEnvelope, FaDownload } from "react-icons/fa";

const opportunities = [
  {
    icon: <FaGlobe className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
    title: "Remote Roles",
    description: "Open to full-time and contract Software Engineer roles on remote-first or distributed teams."
  },
  {
    icon: <FaBuilding className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
    title: "Onsite Roles",
    description: "Open to onsite and hybrid Software Engineer positions with teams in the office."
  },
  {
    icon: <FaHandshake className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
    title: "Freelance Projects",
    description: "Available for web, backend, and AI-powered product work, from MVPs to production features."
  },
  {
    icon: <FaUsers className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
    title: "Collaboration",
    description: "Happy to partner with founders, agencies, and engineers on ideas that need to ship."
  }
];

const Opportunity = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-5 lg:py-20" id="opportunity">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-yellow-500 text-[11px] sm:text-xs font-medium tracking-[0.14em] sm:tracking-[0.2em] uppercase mb-3 leading-relaxed">
            Remote / Onsite / Freelance / Collaboration
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-yellow-500">Work Together</span>
          </h1>
          <div className="accent-bar"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            I'm open to remote and onsite roles, freelance projects, and collaborations. If you have a role or an idea, reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {opportunities.map((item, index) => (
            <motion.div
              key={item.title}
              className="site-card rounded-xl p-4 sm:p-6 hover:border-yellow-500/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(234, 179, 8, 0.15)" }}
            >
              <div className="p-3 bg-gray-700 rounded-lg w-fit mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-lg sm:max-w-none mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="btn-primary">
            Send a Message
          </a>
          <a href="mailto:aqeelabbaskhan41@gmail.com" className="btn-secondary">
            <FaEnvelope className="text-yellow-500" />
            Email Me
          </a>
          <a
            href="https://wa.me/923090931916"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaWhatsapp className="text-yellow-500" />
            WhatsApp
          </a>
          <a href="/Aqeel_Abbas_Khan_Resume.pdf" download className="btn-secondary">
            <FaDownload className="text-yellow-500" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Opportunity;
