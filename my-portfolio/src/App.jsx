import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <section id="home" className="min-h-screen">
        <Home />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="skills" className="min-h-screen">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen">
        <h2>Projects</h2>
      </section>

      <section id="contact" className="min-h-screen">
        <h2>Contact</h2>
      </section>
    </div>
  );
}
