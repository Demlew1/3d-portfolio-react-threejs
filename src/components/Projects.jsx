import React from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { projects } from "../constants";
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
};
const Projects = () => {
  return (
    <section className="relative pt-4  font-['Poppins']">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-zinc-800/30 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Poppins']"
          >
            My <span>Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Here are some of my featured projects.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="relative group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-zinc-300 hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 flex items-center justify-center gap-1"
                  aria-label="GitHub Repository"
                >
                  <FiGithub className="w-4 h-4 text-zinc-800 group-hover:text-zinc-900" />
                  <span className="text-xs font-medium text-zinc-800 group-hover:text-zinc-900 ">
                    Live
                  </span>
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-['Poppins']">
                  {project.name}
                </h3>
                <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={`tag-${index}-${tagIndex}`}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${tag.color === "blue-text-gradient"
                        ? "bg-blue-900/30 text-blue-300 border border-blue-800/50"
                        : tag.color === "green-text-gradient"
                          ? "bg-green-900/30 text-green-300 border border-green-800/50"
                          : "bg-pink-900/30 text-pink-300 border border-pink-800/50"
                        }`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
