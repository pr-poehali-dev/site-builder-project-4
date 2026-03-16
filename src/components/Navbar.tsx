import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const links = [
  { href: "#about", label: "Что это?" },
  { href: "#pros-cons", label: "Плюсы и минусы" },
  { href: "#cases", label: "Кейсы" },
  { href: "#quiz", label: "Тест" },
  { href: "#game", label: "Игра" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Icon name="Brain" size={16} className="text-white" />
          </div>
          <span
            className={`font-bold text-lg ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            AI.Ethics.School
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                scrolled ? "text-gray-700" : "text-white/80"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon
            name={menuOpen ? "X" : "Menu"}
            size={24}
            className={scrolled ? "text-gray-900" : "text-white"}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-6 pb-4 flex flex-col gap-3 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-100 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
