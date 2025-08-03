import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <div className="relative bg-zinc-950 z-0 bg-primary scroll-smooth">
        <div
          id="hero"
          className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
        >
          <Navbar />
          <Hero />
        </div>
        <section id="about" className="pt-20">
          <About />
        </section>
        <section id="certificates" className="pt-20">
          <Certificates />
        </section>
        <section id="tech" className="pt-20">
          <Tech />
        </section>
        <section id="projects" className="pt-20">
          <Projects />
        </section>
        <section id="contact" className="relative z-0 pt-20">
          <Contact />
          <StarCanvas />
        </section>
      </div>
    </BrowserRouter>
  );
}
