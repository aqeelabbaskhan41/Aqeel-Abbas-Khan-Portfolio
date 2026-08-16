import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaBrain, FaGitAlt, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
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

  const skillsData = [
    {
      category: 'Languages',
      icon: <FaCode className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['Python', 'JavaScript', 'C++']
    },
    {
      category: 'Frontend',
      icon: <FaLaptopCode className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['React.js', 'Tailwind CSS', 'HTML5/CSS3', 'REST API Integration']
    },
    {
      category: 'Backend',
      icon: <FaServer className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'Supabase (BaaS)']
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase Postgres', 'Vector DBs']
    },
    {
      category: 'AI & ML',
      icon: <FaBrain className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'PyTorch', 'Scikit-learn']
    },
    {
      category: 'Tools & Cloud',
      icon: <FaGitAlt className="text-yellow-500 group-hover:text-gray-800 text-2xl transition-colors duration-300" />,
      skills: ['Git/GitHub', 'Docker', 'Azure', 'Jira', 'Postman', 'Linux']
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-5 lg:py-20" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-yellow-500">Toolkit</span>
          </h1>
          <div className="accent-bar"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            The stack I use to design, build, and ship production software
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="site-card rounded-xl p-4 sm:p-6 hover:border-yellow-500/40 transition-all duration-300 group"
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
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 rounded-lg text-xs sm:text-sm font-medium text-white border border-gray-600
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
