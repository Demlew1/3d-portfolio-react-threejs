import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import portpic from "../assets/logo.jpg";

function ServiceCard({ index, title, icon }) {
  return (
    <div className="xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="bg-gradient-to-br from-amber-900/30 to-pink-900/30 p-[1px] rounded-[20px] shadow-lg hover:shadow-amber-500/20 transition-shadow"
      >
        <motion.div
          whileHover={{
            y: -5,
            transition: { type: "spring", stiffness: 300 },
          }}
          className="bg-zinc-900 border border-amber-950/50 rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center gap-4 hover:border-amber-600/50 transition-all"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="p-3 bg-zinc-800/50 rounded-full"
          >
            <img
              src={icon}
              alt={title}
              className="size-16 object-contain filter drop-shadow-[0_5px_15px_rgba(245,158,11,0.3)]"
            />
          </motion.div>

          <h3 className="text-xl font-bold text-zinc-100 font-['Rubik'] mt-2">
            {title}
            <motion.span
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              className="block h-[2px] bg-gradient-to-r from-amber-500 to-pink-500 mt-1"
            />
          </h3>
        </motion.div>
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className=" ml-10 text-4xl font-['Rubik'] font-bold text-zinc-50">
          About me
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-start gap-10 px-10 mt-8">
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="relative w-full max-w-md lg:max-w-sm xl:max-w-md"
        >
          <div className="relative group">
            <div className="absolute -inset-3 border-2 border-amber-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative overflow-hidden rounded-lg border border-zinc-700/50 shadow-xl">
              <motion.img
                src={portpic}
                alt="Profile"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                initial={{ opacity: 0.9 }}
                whileInView={{ opacity: 1 }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/20 pointer-events-none"></div>
            </div>

            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-amber-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.p
            className="text-gray-100 font-['Kanit'] text-lg mb-10 max-w-2xl leading-relaxed"
            variants={fadeIn("", "", 0.1, 1)}
          >
            I'm a front-end developer who builds websites and apps using React,
            Next.js, TypeScript, and JavaScript. I learn fast and love working
            with clients to create smooth, easy-to-use solutions that actually
            solve problems. Let's team up and turn your ideas into reality.
          </motion.p>

          <div className="flex flex-row flex-wrap gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
