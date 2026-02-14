import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <section id="home">
        <Home />
      </section>
      
      <section id="about" className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">About Me</h2>
        <p className="text-xl text-gray-300">Your about content here...</p>
      </section>

      <section id="projects" className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">Projects</h2>
        <p className="text-xl text-gray-300">Your projects here...</p>
      </section>

      <section id="contact" className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Contact</h2>
          <p className="text-xl text-gray-300">Your contact form here...</p>
      </section>
    </div>
  );
}