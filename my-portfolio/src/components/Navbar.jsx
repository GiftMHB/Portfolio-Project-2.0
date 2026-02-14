import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
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
            <a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
