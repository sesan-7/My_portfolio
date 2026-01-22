import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("");

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl  mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">Senabadhy Sesan R</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`transition-colors duration-300 font-medium ${
                active === link.name
                  ? "text-primary"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg 
             hover:bg-gray-200 dark:hover:bg-gray-700/40 
             transition-colors duration-300"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Resume Button */}
          {/* <a
            href="/Sena_Resume.pdf"
            download
            className="btn-outline text-sm ml-4"
          >
            Resume
          </a> */}
        </div>

        {/* Mobile Menu Placeholder (if you want to add later) */}
      </div>
    </nav>
  );
}
