import { useEffect } from "react";
 
import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import Technologies from "@/sections/Technologies"
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
 
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import "./index.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // run once
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const animatedElements = document.querySelectorAll(
      ".animate-fade-in, .animate-float, .animate-marquee"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies/>
        <Experience />
        
        <Projects />
        <Contact />
        </main>
      <Footer />
    </div>
  );
}

export default App;
