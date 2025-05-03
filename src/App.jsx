import { useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Stacks from "./components/Stacks";
import Lenis from "lenis";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Stacks />
      <About />
      <Footer />
    </main>
  );
}

export default App;
