import { About, Contact, Hero, Navbar, Tech, StarCanvas } from "./components";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}
