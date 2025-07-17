import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "NearBuy - Local E-commerce Platform",
    description: "Developed a MERN stack application with TailwindCSS connecting local buyers and vendors. Features include products searching, location based search, product listings, and  nearest shops results.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "TailwindCSS", "JWT Auth"],
    githubLink: "https://github.com/aqeelabbaskhan41/NearBuy",
    imageUrl: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg"
  },
  {
  "title": "MrDresser - Men's Fashion Platform (Software Engineering Project)",
  "description": "Comprehensive software engineering documentation and system design for a men's fashion platform. Created complete SRS, design documents, UML diagrams, and Figma prototypes following SDLC methodologies.",
  "technologies": [
    "Software Requirements Specification",
    "System Design Documentation",
    "Figma Prototyping",
    "UML Diagrams",
    "Use Case Analysis",
    "Entity-Relationship Diagrams"
  ],
  "githubLink": "https://github.com/aqeelabbaskhan41/MrDresser-Fashion",
  "imageUrl": "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg",
},
  {
    title: "MediTrack - Medical Store Management",
    description: "Full-stack inventory management system with sales tracking, expiry alerts, and supplier management for pharmaceutical businesses. Focusing on DataBase management",
    technologies: ["Flask", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/aqeelabbaskhan41/Medical-Store-System",
    imageUrl: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg"
  },
  {
    title: "Obesity Level Prediction AI",
    description: "Machine learning model predicting obesity levels with 98% accuracy. Integrated with web interface for real-time predictions based on lifestyle inputs. Also created web based dashboard to upload data file and plot different visualizations to get insights",
    technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Matplotlib", "Seaborn"],
    githubLink: "https://github.com/aqeelabbaskhan41/Obesity-Level-Prediction",
    imageUrl: "https://images.pexels.com/photos/6671781/pexels-photo-6671781.jpeg"
  },
  {
    title: "RAG Chatbot with LLMs",
    description: "Retrieval-Augmented Generation system  with large language models for accurate, context-aware responses. Used LLAMA 3 from Groq",
    technologies: ["Streamlit", "LlamaIndex", 'Groq'],
    githubLink: "https://github.com/aqeelabbaskhan41/Chatbot",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
    title: "Real-Time Chat App (Socket.IO)",
    description: "Full-featured messaging platform with rooms, typing indicators, and read receipts. Built with MERN stack and WebSockets for instant communication.",
    technologies: ["React.js", "Node.js", "Socket.IO", "MongoDB", "JWT Auth"],
    githubLink: "https://github.com/aqeelabbaskhan41/Chat-App",
    imageUrl: "https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg"
  },
  {
    title: "AutoVision - AI Content Pipeline",
    description: "Automated multimedia generation pipeline using LLaMA-3 for prompt generation, Stable Diffusion for images, MoviePy and FFmpeg for video composition with background music.",
    technologies: ["Python", "LLaMA-3", "Stable Diffusion", "FFmpeg", "Flask", "Colab"],
    githubLink: "https://github.com/aqeelabbaskhan41/AutoVision",
    imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
  }
];

const Projects = () => {
  return (
    <section className="bg-gray-900 py-16 px-5 lg:py-20" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-yellow-500">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            A selection of my technical implementations showcasing full-stack development and AI capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(234, 179, 8, 0.15)" }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
                >
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;