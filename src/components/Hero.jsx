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
    <section className="relative w-full h-screen mx-auto my-30 sm:my-15 overflow-hidden">
      {/* Content */}
      <div
        className={`${styles.paddingX} relative z-10 max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between gap-10`}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="max-w-2xl flex-1"
        >
          {/* Badge */}
          <motion.span
            variants={letterVariants}
            className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 backdrop-blur"
          >
            Front-End / Full-Stack Developer
          </motion.span>


          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 leading-tight tracking-tight text-balance">
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            variants={letterVariants}
            className="font-[Poppins] mt-6 text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-xl"
          >
            {subtitle.split(" ").map((word, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block mr-1">
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={letterVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="relative px-8 py-4 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 hover:scale-105 transition-all duration-300 overflow-hidden group shadow-lg shadow-zinc-900/20"
            >
              <span className="relative z-10 transition-colors">View Projects</span>
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