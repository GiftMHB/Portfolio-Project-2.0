import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import FadeInSection from "./components/FadeInSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white">
  
      <Navbar />
      <FadeInSection><Home /></FadeInSection>
      <FadeInSection><About /></FadeInSection>
      <FadeInSection><Skills /></FadeInSection>
      <FadeInSection><Projects /></FadeInSection>
      <FadeInSection><Contact /></FadeInSection>
      <Footer />
    </div>
  
  );
}
