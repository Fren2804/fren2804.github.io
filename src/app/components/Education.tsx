import { GraduationCap, Calendar, Award, ChevronRight } from "lucide-react";
import { useLang } from "../context/LangContext";
import { t } from "../i18n/translations";

export function Education() {
  const { lang } = useLang();
  const entries = t.education.entries;

  const typeConfig = {
    degree: { dotCls: "bg-emerald-400 shadow-emerald-400/50", borderBase: "border-emerald-500/30", borderHover: "hover:border-emerald-500/60 hover:shadow-emerald-500/20", titleCls: "text-emerald-400 group-hover:text-emerald-300", tagCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30", badgeCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/40" },
    master: { dotCls: "bg-cyan-400 shadow-cyan-400/50",       borderBase: "border-cyan-500/30",    borderHover: "hover:border-cyan-500/60 hover:shadow-cyan-500/20",       titleCls: "text-cyan-400 group-hover:text-cyan-300",       tagCls: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",       badgeCls: "bg-cyan-500/10 text-cyan-400 border-cyan-500/40"       },
    cert:   { dotCls: "bg-blue-400 shadow-blue-400/50",        borderBase: "border-blue-500/30",    borderHover: "hover:border-blue-500/60 hover:shadow-blue-500/20",        titleCls: "text-blue-400 group-hover:text-blue-300",        tagCls: "bg-blue-500/10 text-blue-400 border-blue-500/30",        badgeCls: "bg-blue-500/10 text-blue-400 border-blue-500/40"        },
  };

  return (
    <section id="education" className="py-20 px-4 bg-gray-900 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 font-mono text-center">
            {t.education.cmd[lang]}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto" />
        </div>

        <div className="space-y-8 relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-blue-500" />

          {entries.map((item, idx) => {
            const cfg = typeConfig[item.type as keyof typeof typeConfig];
            return (
              <div key={idx} className="relative pl-8 md:pl-20">
                <div className={`absolute left-0 md:left-8 top-6 w-4 h-4 -translate-x-[7.5px] ${cfg.dotCls} rounded-full border-4 border-gray-900 shadow-lg`} />

                <div className={`bg-gray-950/50 border p-6 md:p-8 rounded-lg backdrop-blur-sm ${cfg.borderBase} ${cfg.borderHover} transition-all hover:shadow-lg group`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className={`text-xl font-bold font-mono transition-colors ${cfg.titleCls}`}>
                          {item.degree[lang]}
                        </h3>
                        <span className={`text-xs font-mono border px-2 py-0.5 rounded ${cfg.badgeCls}`}>
                          {t.education.labels[item.type as keyof typeof t.education.labels][lang]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 mb-1">
                        {item.type === "cert"
                          ? <Award size={16} className="text-blue-400 shrink-0" />
                          : <GraduationCap size={16} className="text-emerald-400 shrink-0" />
                        }
                        <span className="font-mono text-sm">{item.institution[lang]}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-mono text-sm shrink-0">
                      <Calendar size={16} />
                      <span>{item.period[lang]}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed font-mono">
                    <span className="text-gray-600">{"// "}</span>
                    {item.desc[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags[lang].map((tag) => (
                      <span key={tag} className={`border px-3 py-1 rounded text-xs font-mono flex items-center gap-1 ${cfg.tagCls}`}>
                        <ChevronRight size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
