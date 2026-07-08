import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { useLang } from "../context/LangContext";
import { t } from "../i18n/translations";

export function Footer() {
  const { lang } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-emerald-500/20 py-8 px-4">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Terminal size={20} />
          <span>{'<Dev/>'}</span>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3">
          <a
            href="https://github.com/Fren2804"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-emerald-400 transition-colors p-2 border border-gray-700 rounded hover:border-emerald-500/50 hover:shadow-md hover:shadow-emerald-500/20"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href={t.hero.linkedinHref[lang]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors p-2 border border-gray-700 rounded hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/20"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:franciscomoreno280499@gmail.com"
            className="text-gray-500 hover:text-blue-400 transition-colors p-2 border border-gray-700 rounded hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/20"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 font-mono text-xs text-center md:text-right">
          <span className="text-emerald-500">$</span> © {currentYear} Francisco Moreno de la Cruz
        </p>
      </div>
    </footer>
  );
}