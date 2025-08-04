import { styles } from "../styles";
import ComputerCanvas from "./canvas/Computers";

function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-row gap-2 justify-center items-start mt-5">
          <div className="flex flex-col items-center gap-0.5">
            <div className="size-5 rounded-full bg-yellow-900 z-10" />
            <div className="w-1 h-30 bg-[linear-gradient(to_bottom,theme(colors.yellow.600)_0px,theme(colors.yellow.600)_25px,transparent_100%)]" />
          </div>
          <div>
            <h1 className="sm:text-5xl text-4xl font-bold font-['Rubik'] text-white">
              Hi, I'm <span className="text-yellow-900">Demtse</span>
            </h1>
            <p className="font-['Kanit'] text-base sm:text-lg text-yellow-50 mt-2">
              I'm a web developer specializing <br /> in responsive,
              user-friendly interfaces <br /> built with modern web
              technologies.
            </p>
          </div>
        </div>
      </div>
      <ComputerCanvas />
      <div className="sm:hidden absolute bottom-10 w-full flex justify-center">
        <div className="animate-bounce text-white text-2xl">↓</div>
      </div>
    </section>
  );
}

export default Hero;
