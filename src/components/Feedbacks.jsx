import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { testimonials } from "../constants";

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            bounce: 0.4
        }}
        viewport={{ once: true }}
        className="bg-zinc-50 border border-zinc-200 p-10 rounded-3xl w-full md:w-[320px] hover:shadow-lg transition-shadow duration-300"
    >
        <p className="text-zinc-900 font-black text-[48px]">"</p>

        <div className="mt-1">
            <p className="text-zinc-600 tracking-wider text-[18px]">
                {testimonial}
            </p>

            <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                    <p className="text-zinc-900 font-medium text-[16px]">
                        <span className="text-blue-600">@</span> {name}
                    </p>
                    <p className="mt-1 text-zinc-500 text-[12px]">
                        {designation} of {company}
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
);

const Feedbacks = () => {
    return (
        <div className="mt-12 bg-white rounded-[20px] font-['Poppins']">
            <div className={`${styles.paddingX} bg-white rounded-2xl min-h-[300px]`}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className={`${styles.sectionSubText} text-zinc-500 text-lg uppercase tracking-wider`}>
                        What others say
                    </p>
                    <h2 className={`${styles.sectionHeadText} text-zinc-900`}>
                        Testimonials.
                    </h2>
                </motion.div>
            </div>

            {/* ✅ FIX HERE: items-start */}
            <div
                className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center items-start`}
            >
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feedbacks;
