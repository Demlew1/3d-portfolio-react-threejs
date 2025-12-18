import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarCanvas from "./components/StarCanvas";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen relative overflow-hidden bg-black text-white font-['Poppins']">
        {/* Gradient background — smoother, richer colors */}
        {/* Gradient background — smoother, richer colors */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#071019] via-[#0a1422] to-[#0f1b2e] animate-gradient-shift"></div> */}

        {/* Subtle animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-[0.08]"></div>

        {/* Soft glowing orbs for ambient lighting */}

        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-700/25 rounded-full blur-[120px] animate-bounce-slow"></div>


        {/* Circuit-line overlay — subtle metallic shine */}
        {/* Circuit-line overlay — subtle metallic shine */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Content section */}
        <div className="relative z-10">
          <div
            id="hero"
            className="bg-cover bg-no-repeat bg-center"
          >
            <Navbar />
            <Hero />
          </div>
          <section id="about" className="pt-5">
            <About />
          </section>
          <section id="projects" className="pt-20">
            <Projects />
          </section>
          <section id="certificates" className="pt-20">
            <Certificates />
          </section>
          <section id="tech" className="pt-20">
            <Tech />
          </section>

          <section id="contact" className="relative z-0 pt-20">
            <Contact />
            <StarCanvas />
          </section>
        </div>
      </div>
    </HashRouter>
  );
}
