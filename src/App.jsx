import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarCanvas from "./components/StarCanvas";
import Feedbacks from "./components/Feedbacks";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen relative overflow-hidden bg-white text-zinc-900 font-['Poppins']">

        {/* Subtle Gray Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        {/* Content section */}
        <div className="relative z-10">
          <div
            id="hero"
            className="bg-white/0"
          >
            <Navbar />
            <Hero />
          </div>
          <section id="projects" className="pt-15">
            <Projects />
          </section>
          <section id="certificates" className="pt-15">
            <Certificates />
          </section>
          <section id="tech" className="pt-15">
            <Tech />
          </section>

          <section id="feedbacks" className="pt-5">
            <Feedbacks />
          </section>

          <section id="contact" className="relative z-0 pt-15">
            <Contact />
            <StarCanvas />
          </section>
        </div>
      </div>
    </HashRouter>
  );
}
