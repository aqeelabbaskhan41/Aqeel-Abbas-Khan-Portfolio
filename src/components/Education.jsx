import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
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
      boxShadow: "0 10px 25px rgba(234, 179, 8, 0.15)",
      borderColor: "rgba(234, 179, 8, 0.3)"
    }
  };

  return (
    <section className="bg-gray-900 py-16 px-5 lg:py-20" id="education">
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
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            My academic journey in the field of technology
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bachelor's Degree */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-start gap-6 transition-all duration-300 group"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300">
              <FaGraduationCap className="text-yellow-500 group-hover:text-gray-800 text-3xl transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                Bachelor of Science: Computer Science
              </h3>
              <p className="text-yellow-400 mb-2">Namal University Mianwali, Punjab</p>
              <p className="text-gray-400">2022 - Present</p>
            </div>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-start gap-6 transition-all duration-300 group"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300">
              <MdSchool className="text-yellow-500 group-hover:text-gray-800 text-3xl transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                Intermediate: ICS
              </h3>
              <p className="text-yellow-400 mb-2">Superior Group of Colleges, Mianwali, Punjab</p>
              <p className="text-gray-400">2020 - 2022</p>
            </div>
          </motion.div>

          {/* Matriculation */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-start gap-6 transition-all duration-300 group"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300">
              <IoSchool className="text-yellow-500 group-hover:text-gray-800 text-3xl transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                Matriculation
              </h3>
              <p className="text-yellow-400 mb-2">GHHSS Musa Khel T/D, Mianwali, Punjab</p>
              <p className="text-gray-400">2018 - 2020</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;