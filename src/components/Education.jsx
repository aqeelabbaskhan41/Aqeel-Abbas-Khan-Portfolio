import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy, FaLightbulb, FaCertificate } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      boxShadow: "0 10px 25px rgba(212, 175, 55, 0.15)",
      borderColor: "rgba(212, 175, 55, 0.3)"
    }
  };

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-5 lg:py-20" id="education">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Education <span className="text-yellow-500">Background</span>
          </h1>
          <div className="accent-bar"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Formal CS training that underpins my engineering work
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Bachelor's Degree */}
          <motion.div
            className="site-card p-4 sm:p-6 rounded-xl flex items-start gap-3 sm:gap-6 transition-all duration-300 group hover:border-yellow-500/40"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="p-2.5 sm:p-3 bg-gray-700 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300 shrink-0">
              <FaGraduationCap className="text-yellow-500 group-hover:text-gray-800 text-3xl transition-colors duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 break-words">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-yellow-400 mb-2">Namal University, Mianwali</p>
              <p className="text-gray-400 mb-3">2022 – 2026</p>
              <p className="text-gray-400 text-sm sm:text-base">
                Coursework: Data Structures & Algorithms, Software Engineering, Database Systems,
                Web Development, Cloud Computing, Artificial Intelligence, Machine Learning, NLP, Deep Learning
              </p>
            </div>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            className="site-card p-4 sm:p-6 rounded-xl flex items-start gap-3 sm:gap-6 transition-all duration-300 group hover:border-yellow-500/40"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="p-2.5 sm:p-3 bg-gray-700 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300 shrink-0">
              <MdSchool className="text-yellow-500 group-hover:text-gray-800 text-3xl transition-colors duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 break-words">
                Intermediate: ICS
              </h3>
              <p className="text-yellow-400 mb-2">Superior Group of Colleges, Mianwali, Punjab</p>
              <p className="text-gray-400">2020 - 2022</p>
            </div>
          </motion.div>

          {/* Matriculation */}
          <motion.div
            className="site-card p-4 sm:p-6 rounded-xl flex items-start gap-3 sm:gap-6 transition-all duration-300 group hover:border-yellow-500/40"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="p-2.5 sm:p-3 bg-gray-700 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300 shrink-0">
              <IoSchool className="text-yellow-500 group-hover:text-gray-800 text-3xl transition-colors duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 break-words">
                Matriculation
              </h3>
              <p className="text-yellow-400 mb-2">GHSS Musa Khel T/D, Mianwali, Punjab</p>
              <p className="text-gray-400">2018 - 2020</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {[
            {
              icon: <FaTrophy className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
              title: "Innovative Pakistan 2026",
              detail: "National showcase of AdGenie at The University of Faisalabad"
            },
            {
              icon: <FaLightbulb className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
              title: "Namal Ideathon",
              detail: "Presented FYP AdGenie at the university innovation expo"
            },
            {
              icon: <FaCertificate className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
              title: "Data Science with Python",
              detail: "LetsUpgrade certification covering EDA, Pandas, and ML workflows"
            }
          ].map((item) => (
            <motion.div
              key={item.title}
              className="site-card p-5 rounded-xl transition-all duration-300 group hover:border-yellow-500/40"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="p-3 bg-gray-700 rounded-lg w-fit mb-3 group-hover:bg-yellow-500 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;