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
    <section id="projects" className="relative pt-4 font-['Poppins']">
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {/* Subtle Gray Gradient Blobs - dramatically toned down */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-zinc-200/50 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-zinc-100/50 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 font-['Poppins'] tracking-tight"
          >
            My <span className="text-zinc-500">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-500 max-w-2xl mx-auto"
          >
            Here are some of my featured projects.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="relative group bg-white border-1 border-zinc-300 rounded-2xl overflow-hidden border border-zinc-100 hover:border-zinc-200 transition-all duration-500 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]"
            >
              <div className="h-64 overflow-hidden relative bg-zinc-50">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full border border-zinc-100 shadow-sm hover:scale-110 transition-transform duration-300 flex items-center justify-center gap-2 group/link"
                  aria-label="GitHub Repository"
                >
                  <FiGithub className="w-4 h-4 text-zinc-900" />
                </a>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-3 font-['Poppins']">
                  {project.name}
                </h3>
                <p className="text-zinc-500 mb-6 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={`tag-${index}-${tagIndex}`}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-50 text-zinc-600 border border-zinc-100"
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
