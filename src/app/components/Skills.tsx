import { Code, Database, Wrench } from "lucide-react";
import { useLang } from "../context/LangContext";
import { t } from "../i18n/translations";

export function Skills() {
  const { lang } = useLang();

  const skillCategories = [
    {
      category: "Backend",
      icon: <Code size={24} />,
      color: "emerald",
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Java", level: 65 },
      ],
    },
    {
      category: t.skills.tools[lang],
      icon: <Wrench size={24} />,
      color: "cyan",
      skills: [
        
        { name: "GitHub", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Postman", level: 70 },
        { name: "Bash", level: 70 },        
        { name: "Unix/Linux", level: 60 },
      ],
    },
    {
      category: "Extras",
      icon: <Database size={24} />,
      color: "blue",
      skills: [
        { name: t.skills.ingles[lang], level: 75 },
        { name: t.skills.algoritmos[lang], level: 85 },
        { name: t.skills.estructuras[lang], level: 80 },
        { name: "Debugging", level: 80 },
        { name: t.skills.networking[lang], level: 70 },
      ],
    },
  ];

  const getColorClass = (color: string, type: "text" | "bg" | "border" | "shadow") => {
    const colorMap = {
      emerald: { text: "text-emerald-400", bg: "bg-emerald-500", border: "border-emerald-500/30", shadow: "shadow-emerald-500/20" },
      cyan:    { text: "text-cyan-400",    bg: "bg-cyan-500",    border: "border-cyan-500/30",    shadow: "shadow-cyan-500/20"    },
      blue:    { text: "text-blue-400",    bg: "bg-blue-500",    border: "border-blue-500/30",    shadow: "shadow-blue-500/20"    },
    };
    return colorMap[color as keyof typeof colorMap][type];
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 font-mono text-center">
            {t.skills.cmd[lang]}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`bg-gray-900/50 border ${getColorClass(category.color, "border")} p-8 rounded-lg backdrop-blur-sm hover:shadow-lg hover:${getColorClass(category.color, "shadow")} transition-all group`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={getColorClass(category.color, "text")}>{category.icon}</div>
                <h3 className={`text-2xl font-bold ${getColorClass(category.color, "text")} font-mono`}>
                  {category.category}
                </h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                      <span className={`${getColorClass(category.color, "text")} font-mono text-sm`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`${getColorClass(category.color, "bg")} h-2 rounded-full transition-all duration-1000 shadow-lg ${getColorClass(category.color, "shadow")}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
