import { motion } from "framer-motion";
import { styles } from "../styles";

function Hero() {
  return (
    <section className="relative w-full h-screen bg-zinc-950 mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="size-5 rounded-full bg-zinc-200 z-10" />
          <div className="w-1 h-20 sm:h-25 bg-zinc-200 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" />
          <div>
            <h1></h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
