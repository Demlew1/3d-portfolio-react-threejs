import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import portpic from "../assets/logo.jpg";

function ServiceCard({ index, title, icon }) {
  return (
    <div className="xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="bg-white p-[1px] rounded-[20px] shadow-sm hover:shadow-md transition-shadow border border-zinc-100"
      >
        <motion.div
          whileHover={{
            y: -5,
            transition: { type: "spring", stiffness: 300 },
          }}
          className="bg-zinc-50 border border-zinc-100 rounded-[20px] py-6 px-12 min-h-[280px] flex flex-col justify-center items-center gap-6 group hover:bg-white transition-colors"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="p-4 bg-white rounded-full shadow-sm border border-zinc-100"
          >
            <img
              src={icon}
              alt={title}
              className="size-16 object-contain"
            />
          </motion.div>

          <h3 className="text-xl font-bold text-zinc-900 font-['Poppins'] mt-2 text-center">
            {title}
            <motion.span
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              className="block h-[2px] bg-zinc-400 mt-2"
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
        <p className="ml-10 text-4xl font-['Poppins'] font-bold text-zinc-900">
          About me
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-start gap-10 px-10 mt-8">
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="relative w-full max-w-md lg:max-w-sm xl:max-w-md"
        >
          <div className="relative group">
            <div className="absolute -inset-3 border border-zinc-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-lg border border-zinc-200 shadow-lg bg-white">
              <motion.img
                src={portpic}
                alt="Profile"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                initial={{ opacity: 0.9 }}
                whileInView={{ opacity: 1 }}
              />
            </div>
          </div>
        </motion.div>
        <div className="flex-1">
          <motion.p
            className="text-zinc-600 font-['Poppins'] text-lg mb-10 max-w-2xl leading-relaxed"
            variants={fadeIn("", "", 0.1, 1)}
          >
            I'm a front-end developer who builds websites and apps using React,
            Next.js, TypeScript, and JavaScript. I learn fast and love working
            with clients to create smooth, easy-to-use solutions that actually
            solve problems. Let's team up and turn your ideas into reality.
          </motion.p>

          <div className="flex flex-row flex-wrap justify-center gap-10">
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
