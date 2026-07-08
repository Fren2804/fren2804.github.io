import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { useLang } from "../context/LangContext";
import { t } from "../i18n/translations";

export function Experience() {
  const { lang } = useLang();
  const entries = t.experience.entries;

  const technologies = [
    ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    ["React", "Express", "PostgreSQL", "Stripe", "Redux"],
    ["JavaScript", "Vue.js", "SASS", "Webpack", "Git"],
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 font-mono text-center">
            {t.experience.cmd[lang]}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto" />
        </div>

        <div className="space-y-8 relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-blue-500" />

          {entries.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-20">
              <div className="absolute left-0 md:left-8 top-6 w-4 h-4 -translate-x-[7.5px] bg-cyan-400 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-400/50" />

              <div className="bg-gray-950/50 border border-cyan-500/30 p-6 md:p-8 rounded-lg backdrop-blur-sm hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors font-mono">
                      {exp.title[lang]}
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                      <Briefcase size={18} />
                      <span className="font-medium font-mono">{exp.company[lang]}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0 font-mono text-sm">
                    <Calendar size={18} />
                    <span>{exp.period[lang]}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed font-mono text-sm">
                  <span className="text-gray-600">{"// "}</span>
                  {exp.desc[lang]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags[lang].map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded text-sm font-mono flex items-center gap-1"
                    >
                      <ChevronRight size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
