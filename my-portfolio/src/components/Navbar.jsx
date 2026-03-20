import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const linkClass = (section) =>
    `transition ${
      active === section
        ? "text-yellow-400"
        : "hover:text-yellow-400"
    }`;

  return (
    <nav className="fixed w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          MHB
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#home" className={linkClass("home")}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className={linkClass("about")}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className={linkClass("skills")}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className={linkClass("projects")}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className={linkClass("contact")}>
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-yellow-400 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black text-center space-y-4 pb-4">
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className={`block ${linkClass("home")}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className={`block ${linkClass("about")}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className={`block ${linkClass("skills")}`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className={`block ${linkClass("projects")}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`block ${linkClass("contact")}`}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
