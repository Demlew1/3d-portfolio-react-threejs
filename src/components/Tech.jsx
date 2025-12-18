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
    <section className="relative overflow-hidden py-20  font-['Poppins']">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-zinc-800 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-zinc-800 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-['Poppins']"
        >
          <span className="inline-block">My Tech Stack</span>
          <span className="block mt-3 text-lg font-normal text-zinc-400">
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
                y: -8,
                scale: 1.03,
                boxShadow: "0 8px 20px -5px rgba(234, 179, 8, 0.15)",
              }}
              className="group relative flex flex-col items-center p-5 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-yellow-900 transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

              <div className="relative z-10 w-14 h-14 mb-3 flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 0 6px rgba(234,179,8,0.2))" }}
                />
              </div>

              <span className="relative z-10 text-white font-medium text-center text-sm">
                {tech.name}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}

export default Tech;
