export default function Footer() {
  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <footer className="bg-black border-t border-yellow-400/20 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-gray-400 text-sm capitalize hover:text-yellow-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="w-full border-t border-yellow-400/10" />

        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
          <p className="text-gray-500 text-sm">
            {"\u00A9 "} {new Date().getFullYear()} Gift Mohuba. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm text-yellow-400 border border-yellow-400/30 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 active:scale-95"
          >
            Back to top
          </a>
        </div>

      </div>
    </footer>
  );
}