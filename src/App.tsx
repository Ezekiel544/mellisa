import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Socials } from "./components/Socials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0a0f] to-black">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Socials />
      <Footer />
    </div>
  );
}
