import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import StarCanvas from "./components/StarCanvas";
import { BrowserRouter } from "react-router-dom";
import Certificates from "./components/certificates";
export default function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-zinc-950 z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Certificates />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}
