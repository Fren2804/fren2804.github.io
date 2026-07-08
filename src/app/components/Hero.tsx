import { Github, Linkedin, Mail, Terminal, Download } from "lucide-react";
import { ImageWithFallback } from "./assets/ImageWithFallback";
import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";
import { t } from "../i18n/translations";
import profile from './assets/profile.jpeg';

export function Hero() {
  const { lang } = useLang();
  const fullText = t.hero.role[lang];
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
                <Terminal size={16} />
                <span>$ whoami</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                Francisco Moreno de la Cruz
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyan-400 font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            {/* info.json block */}
            <div className="bg-gray-900/80 border border-emerald-500/30 rounded-lg overflow-hidden backdrop-blur-sm text-xs font-mono">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 border-b border-emerald-500/20">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="ml-2 text-gray-500 text-xs">info.json</span>
              </div>
              <div className="p-4 space-y-1 leading-relaxed">
                <p className="text-gray-500">{"{"}</p>
                <p className="pl-4"><span className="text-cyan-400">"name"</span><span className="text-gray-500">: </span><span className="text-emerald-300">"Francisco Moreno de la Cruz"</span><span className="text-gray-500">,</span></p>
                <p className="pl-4"><span className="text-cyan-400">"role"</span><span className="text-gray-500">: </span><span className="text-emerald-300">"{t.hero.role[lang]}"</span><span className="text-gray-500">,</span></p>
                <p className="pl-4"><span className="text-cyan-400">"location"</span><span className="text-gray-500">: </span><span className="text-emerald-300">"{t.hero.location[lang]}"</span><span className="text-gray-500">,</span></p>
                <p className="pl-4"><span className="text-cyan-400">"experience"</span><span className="text-gray-500">: </span><span className="text-blue-300">"{t.hero.experience[lang]}"</span><span className="text-gray-500">,</span></p>
                <p className="pl-4"><span className="text-cyan-400">"available"</span><span className="text-gray-500">: </span><span className="text-emerald-400">true</span></p>
                <p className="text-gray-500">{"}"}</p>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href={t.hero.fileCV[lang]}
                download
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-emerald-500/50 transition-all font-mono text-sm"
              >
                <Download size={16} />
                {t.hero.downloadCV[lang]}
              </a>
              <a
                href="#projects"
                className="border-2 border-emerald-500 text-emerald-400 px-6 py-3 rounded-lg font-bold hover:bg-emerald-500/10 transition-all font-mono text-sm"
              >
                {t.hero.viewProjects[lang]}
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Fren2804" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="GitHub">
                <Github size={28} />
              </a>
              <a href={t.hero.linkedinHref[lang]} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={28} />
              </a>
              <a href="mailto:franciscomoreno280499@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Email">
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
              <ImageWithFallback
                src={profile}
                alt="Developer workspace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
