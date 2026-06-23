import Button from "./UI/Button";

export default function Footer() {
  const links = ["home", "about", "skills", "projects", "contact"];

  const handleBackToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

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

          <Button
            title="Back to top"
            variant="primary"
            onClick={handleBackToTop}
            type="button"
          />
        </div>

      </div>
    </footer>
  );
}