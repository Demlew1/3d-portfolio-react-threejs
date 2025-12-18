import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants/index";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
      duration: 0.2,
    },
  },
};

function Tech() {
  return (
    <section className="relative overflow-hidden py-20 font-['Poppins']">
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-zinc-900 mb-12 font-['Poppins'] tracking-tight"
        >
          <span className="inline-block">My Tech Stack</span>
          <span className="block mt-3 text-lg font-normal text-zinc-500">
            Tools & technologies I use daily
          </span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
              }}
              className="group relative flex flex-col items-center p-5 bg-white rounded-xl border border-zinc-100 hover:border-zinc-300 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 w-14 h-14 mb-3 flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>

              <span className="relative z-10 text-zinc-600 font-medium text-center text-sm group-hover:text-zinc-900 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Minimalist Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-zinc-100"
        ></motion.div>
      </div>
    </section>
  );
}

export default Tech;
