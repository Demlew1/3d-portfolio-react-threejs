import { motion } from "framer-motion";
import { styles } from "../styles";
import HackerRoom from "./HackerRoom";

function Hero() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const text = "Hi, I’m Demtse";
  const subtitle = "I design and build fast, responsive, and user-friendly web applications using modern technologies like React and Tailwind CSS.";

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-white/0">
      {/* Content */}
      <div
        className={`${styles.paddingX} relative z-10 max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 pt-20`}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex-1 flex flex-col justify-center gap-6 max-w-2xl"
        >
          {/* Advanced Typography Block */}
          <div className="space-y-4">
            {/* Minimal Intro */}
            <div className="flex items-center gap-3">
              <div className="h-px mt-10 w-8 bg-zinc-300"></div>
              <p className="md:text-5xl text-2xl font-bold text-zinc-500 mt-10 uppercase tracking-[0.1em]">
                Hi, I'm Demtse
              </p>
            </div>



            {/* Concise Bio */}
            <p className="text-zinc-600 text-lg leading-relaxed font-['Poppins'] max-w-md pt-4">
              I develop clean, user-centric web applications with <span className="text-zinc-900 font-medium">React</span> and <span className="text-zinc-900 font-medium">Next.js</span>, prioritizing performance and precision.
            </p>
          </div>

          {/* Actions */}
          <motion.div variants={letterVariants} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 hover:shadow-xl hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-zinc-900 border border-zinc-200 rounded-lg font-medium hover:bg-zinc-50 transition-all hover:border-zinc-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Hacker Room / Developer Vibe Area */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex-1 w-full flex justify-center lg:justify-end"
        >
          <HackerRoom />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;