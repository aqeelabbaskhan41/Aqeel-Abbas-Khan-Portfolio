import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaBrain, FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 25px rgba(234, 179, 8, 0.15)'
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: 'rgba(234, 179, 8, 0.1)'
    }
  };

  // Skills data organized by category
  const skillsData = [
    {
      category: 'Languages',
      icon: <FaCode className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Frontend',
      icon: <FaCode className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['React.js', 'BootStrap', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      category: 'Backend',
      icon: <FaServer className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['Node.js', 'Express', 'Flask', 'REST APIs']
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['MySQL', 'MongoDB','Neo4j Graph DB', 'PostgreSQL']
    },
    {
      category: 'Data & AI',
      icon: <FaBrain className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['Machine Learning', 'Data Analysis', 'Pandas', 'NumPy']
    },
    {
      category: 'Tools',
      icon: <FaGitAlt className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['VS Code', 'Git/GitHub', 'Google Colab', 'Anaconda', 'PowerBi', 'Postman']
    }
  ];

  return (
    <section className="bg-gray-900 py-16 px-5 lg:py-20" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-yellow-500">Toolkit</span>
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            The technologies and tools I work with to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 group"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-5">
                <div className="p-3 bg-gray-700 rounded-lg mr-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-white">{category.category}</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium text-white border border-gray-600
                               transition-all duration-300 hover:border-yellow-500 hover:shadow-md hover:shadow-yellow-500/20"
                    variants={skillItemVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;