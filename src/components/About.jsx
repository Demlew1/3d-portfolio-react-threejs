import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
function ServiceCard({ index, title, icon }) {
  return <Tilt className="xs:w-[]">{title}</Tilt>;
}
function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="mt-20 ml-10 text-4xl font-['Rubik'] font-bold text-zinc-50">
          About me
        </p>
      </motion.div>
      <motion.p
        className="mt-4 ml-10 text-secondary font-['Kanit'] text-gray-100"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I’m a front-end developer who builds websites and apps using React,
        Next.js, TypeScript, and JavaScript. <br /> I learn fast and love
        working with clients to create smooth, easy-to-use solutions that
        actually solve problems. <br /> Let’s team up and turn your ideas into
        reality!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default About;
