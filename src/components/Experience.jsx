import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(234, 179, 8, 0.15)",
      borderColor: "rgba(234, 179, 8, 0.3)"
    }
  };

  const highlights = [
    "Built production AI-powered web apps with Python, FastAPI, React, PostgreSQL, and Supabase as a Backend-as-a-Service.",
    "Shipped features for SoulPlus AI, a Call Center Management System, and BiedBuddy.",
    "Designed RAG pipelines and conversational agents with LangChain, LangGraph, and Supabase pgvector.",
    "Used Supabase BaaS for auth, database, and backend services, and built REST APIs and data pipelines for ingestion and storage.",
    "Used Git and Docker for version control and consistent development environments."
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-5 lg:py-20" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="text-yellow-500">Experience</span>
          </h1>
          <div className="accent-bar"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Building production web and AI systems in a team environment
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.div
            className="site-card p-4 sm:p-6 rounded-xl transition-all duration-300 group hover:border-yellow-500/40"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="flex items-start gap-3 sm:gap-6">
              <div className="p-2.5 sm:p-3 bg-gray-700 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300 shrink-0">
                <FaBriefcase className="text-yellow-500 group-hover:text-gray-800 text-2xl sm:text-3xl transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      Software Developer
                    </h3>
                    <p className="text-yellow-400">AI & Full Stack · GenTech</p>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base whitespace-nowrap">
                    Dec 2025 – Present
                  </p>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Pakistan · Web and AI production systems
                </p>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  {highlights.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-yellow-500 mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
