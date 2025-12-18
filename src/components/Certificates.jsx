import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { certificates } from "../constants/index";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };
  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };
  return (
    <section className="relative font-['Poppins']">
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md"
          onClick={closeImage}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged certificate"
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl rounded-lg"
            />
            <button
              className="absolute -right-12 top-0 rounded-full bg-zinc-100 p-2 text-zinc-600 hover:bg-zinc-200 transition-colors"
              onClick={closeImage}
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
      <motion.div variants={textVariant()} className="mb-16 text-center">
        <h2 className={`${styles.sectionHeadText} font-['Poppins'] mt-14 text-zinc-900`}>
          Certificates
        </h2>
      </motion.div>
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Timeline Line - Minimalist Gray */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transform bg-zinc-200 z-0"></div>

        <div className="space-y-24">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className={`relative z-10 flex w-full ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                } justify-center`}
            >
              {/* Timeline Dot - Clean Gray */}
              <div className="hidden sm:block absolute top-1/2 left-1/2 z-20 h-4 w-4 -translate-y-1/2 -translate-x-1/2 transform rounded-full border-[3px] border-zinc-400 bg-white"></div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex w-full max-w-md flex-col items-center gap-4 rounded-xl bg-white border border-zinc-100 p-6 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)] transition-shadow ${index % 2 === 0 ? "sm:mr-10" : "sm:ml-10"
                  }`}
              >
                <div
                  className="w-full overflow-hidden rounded-lg shadow-sm border border-zinc-100 cursor-zoom-in group"
                  onClick={() => openImage(certificate.image)}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-100 md:group-hover:scale-105 md:transition-transform md:duration-500"
                  />
                </div>
                <div className="w-full text-center space-y-2">
                  <h3 className="font-['Kanit'] text-xl font-bold text-zinc-900 tracking-tight">
                    {certificate.name}
                  </h3>
                  <p className="mt-1 text-zinc-500 text-sm leading-relaxed">
                    {certificate.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
