import { styles } from "../styles";
import ComputerCanvas from "./canvas/Computers";
function Hero() {
  return (
    <section className="relative w-full flex flex-col h-screen  mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-row gap-2 justify-center items-start mt-5">
          <div className="flex flex-col items-center gap-0.5">
            <div className="size-5 rounded-full bg-yellow-900 z-10" />
            <div className="w-1 h-30 bg-[linear-gradient(to_bottom,theme(colors.yellow.600)_0px,theme(colors.yellow.600)_25px,transparent_100%)]" />
          </div>
          <div>
            <h1
              className={`sm:text-5xl text-3xl font-bold font-['Rubik'] text-white `}
            >
              Hi , I'm <span className="text-yellow-900">Demtse</span>
            </h1>
            <p
              className={`font-['Kanit'] text-[12px] sm:text-sm text-yellow-50 mt-2 text-white-200`}
            >
              I'm web developer with a strong focus on <br />
              building responsive, user-friendly interfaces
              <br /> using modern web technologies.
            </p>
          </div>
        </div>
      </div>
      <ComputerCanvas />
    </section>
  );
}

export default Hero;
