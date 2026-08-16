import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "AdGenie",
    tag: "Final Year Project",
    description: "End-to-end AI advertisement platform connecting a React frontend, Node.js APIs, and a FastAPI PyTorch inference service for prompt-driven ad generation. Presented at Namal Ideathon and Innovative Pakistan 2026.",
    technologies: ["React.js", "Node.js", "FastAPI", "MongoDB", "PyTorch", "LLMs"],
    githubLink: "",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  },
  {
    title: "SoulPlus AI",
    tag: "Production",
    description: "Production AI assistant with LangGraph multi-step reasoning, tool orchestration, and RAG over a Supabase BaaS PostgreSQL vector store. Built the document pipeline that processed 100+ PDF and DOCX files for the agent knowledge base.",
    technologies: ["LangGraph", "LangChain", "RAG", "FastAPI", "Supabase (BaaS)", "pgvector"],
    githubLink: "",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
    title: "NearBuy",
    tag: "Marketplace",
    description: "MERN marketplace with geolocation-based vendor discovery, filtering, and a responsive storefront that connects local buyers with nearby shops and services.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/aqeelabbaskhan41/NearBuy",
    imageUrl: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg"
  },
  {
    title: "TixTrader",
    tag: "Full Stack",
    description: "Full-stack ticket resale marketplace with buyer, seller, and admin workflows. JWT auth, role-based access, event listings, and purchase flows across a React frontend and Node.js REST APIs.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    githubLink: "",
    imageUrl: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg"
  },
  {
    title: "Automated Essay Scoring",
    tag: "NLP Research",
    description: "NLP application that fine-tunes BERT for multi-dimensional essay scoring (grammar, coherence, vocabulary, content) and uses GPT to generate human-like feedback. Includes a preprocessing and tokenization pipeline plus evaluation against scoring benchmarks.",
    technologies: ["BERT", "GPT", "PyTorch", "Hugging Face", "NLP", "Python"],
    githubLink: "",
    imageUrl: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg"
  },
  {
    title: "Kohinoor Fertilizers",
    tag: "Client Work",
    description: "Production e-commerce site with an admin dashboard for product listing and catalog management. Built with React and Supabase as a Backend-as-a-Service for auth, database, and backend APIs.",
    technologies: ["React.js", "Supabase (BaaS)", "Admin Dashboard"],
    githubLink: "",
    imageUrl: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
  },
  {
    title: "Obesity Prediction System",
    tag: "Machine Learning",
    description: "Supervised ML system that predicts obesity levels from lifestyle and health data. Includes preprocessing, feature engineering, model evaluation, and a dashboard for data insights.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    githubLink: "https://github.com/aqeelabbaskhan41/Obesity-Level-Prediction",
    imageUrl: "https://images.pexels.com/photos/6671781/pexels-photo-6671781.jpeg"
  }
];

const Projects = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-5 lg:py-20" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-yellow-500">Projects</span>
          </h1>
          <div className="accent-bar"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Production systems, client work, and AI platforms I have designed and shipped
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="site-card rounded-xl overflow-hidden hover:border-yellow-500/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.32) }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(234, 179, 8, 0.15)" }}
            >
              <div className="h-40 sm:h-48 overflow-hidden relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.tag && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-gray-900/85 text-yellow-500 text-xs font-medium rounded-full border border-yellow-500/40">
                    {project.tag}
                  </span>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {project.githubLink ? (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>

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

                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-[44px] text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                ) : (
                  <span className="text-xs text-gray-500">Private / production codebase</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
