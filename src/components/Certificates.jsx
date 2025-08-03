import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { certificates } from "../constants/index";
import { useState } from "react";

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
    <section className="relative font-['Rubik']">
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={closeImage}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged certificate"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              className="absolute -right-4 -top-4 rounded-full bg-yellow-800 p-2 text-white shadow-lg hover:bg-yellow-700"
              onClick={closeImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}

      <motion.div variants={textVariant()} className="mb-16 text-center">
        <h2 className={`${styles.sectionHeadText} font-['Kanit'] mt-14`}>
          Certificates
        </h2>
      </motion.div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-yellow-800 via-yellow-850 to-yellow-950 z-0"></div>
        <div className="space-y-24">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative z-10 flex w-full ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              <div className="absolute top-1/2 left-1/2 z-20 h-5 w-5 -translate-y-1/2 -translate-x-1/2 transform rounded-full border-4 border-yellow-800 bg-yellow-950 shadow-[0_0_0_6px_rgba(146,64,14,0.3)] animate-pulse"></div>
              <div
                className={`flex w-full max-w-md flex-col items-center gap-4 rounded-xl bg-gradient-to-br from-yellow-950/40 to-yellow-850/20 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                  index % 2 === 0 ? "mr-4" : "ml-4"
                }`}
              >
                <div
                  className="w-full overflow-hidden rounded-lg shadow-md aspect-video border-2 border-yellow-800/30 cursor-zoom-in transition-all duration-300 hover:border-yellow-700/50 hover:shadow-lg"
                  onClick={() => openImage(certificate.image)}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="w-full text-center space-y-2">
                  <h3 className="font-['Kanit'] text-xl font-bold text-yellow-50 tracking-tight">
                    {certificate.name}
                  </h3>
                  <p className="mt-1 text-yellow-200/90 text-sm leading-relaxed">
                    {certificate.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
