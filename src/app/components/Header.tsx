import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";
import { useLang } from "../context/LangContext";
import { t } from "../i18n/translations";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useLang();

  const navItems = [
    { key: "home",       href: "#home"       },
    { key: "about",      href: "#about"      },
    { key: "skills",     href: "#skills"     },
    { key: "education",  href: "#education"  },
    { key: "experience", href: "#experience" },
    { key: "projects",   href: "#projects"   },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-md border-b border-emerald-500/20 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-emerald-400 font-mono">
            <Terminal size={24} />
            <span>{"<Dev/>"}</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-emerald-400 transition-colors font-mono text-sm"
                >
                  <span className="text-emerald-500">{">"} </span>
                  {t.nav[item.key][lang]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center gap-1 border border-emerald-500/30 rounded-md overflow-hidden font-mono text-xs">
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1.5 transition-colors ${
                  lang === "es"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                ES
              </button>
              <div className="w-px h-full bg-emerald-500/30" />
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition-colors ${
                  lang === "en"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-emerald-400 hover:bg-emerald-500/10 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4 bg-gray-900/50 rounded-lg p-4 border border-emerald-500/20">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-emerald-400 transition-colors font-mono"
                >
                  <span className="text-emerald-500">{">"} </span>
                  {t.nav[item.key][lang]}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
