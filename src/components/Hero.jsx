import { motion } from "framer-motion";
import { styles } from "../styles";
import bg1 from "../assets/bg3.jpg";

function Hero() {
  return (
    <section className="  relative w-full h-screen mx-auto overflow-hidden" >
      {/* Background Image */}
      < div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
        }
      >
        {/* Gradient Overlay */}
        < div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div >

      {/* Content */}
      < div
        className={`${styles.paddingX} relative z-10 max-w-7xl mx-auto h-full flex items-center`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-gray-200 backdrop-blur">
            Front-End / Full-Stack Developer
          </span>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Hi, I’m <span className="text-yellow-400">Demtse</span>
          </h1>

          {/* Subtitle */}
          <p className=" font-[Poppins] mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            I design and build fast, responsive, and user-friendly web
            applications using modern technologies like React and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-yellow-600 text-white text-gray-900 font-semibold shadow-lg hover:bg-yellow-500 hover:scale-105 transition"
            >
              View Projects
            </a>

          </div>
        </motion.div>
      </div >
    </section >
  );
}

export default Hero;