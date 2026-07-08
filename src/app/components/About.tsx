import { Code2, Rocket, Users, Cpu } from "lucide-react";
import { useLang } from "../context/LangContext";
import { t } from "../i18n/translations";



export function About() {
  const { lang } = useLang();

  const highlights = [
    { icon: <Code2 size={32} />, title: t.about.card1.title[lang], description: t.about.card1.content[lang], color: "emerald" },
    { icon: <Rocket size={32} />, title: t.about.card2.title[lang], description: t.about.card2.content[lang], color: "cyan"    },
    { icon: <Users size={32} />, title: t.about.card3.title[lang], description: t.about.card3.content[lang], color: "blue"    },
  ];

  type AboutColor = "emerald" | "cyan" | "blue";

const borderColors: Record<AboutColor, string> = {
  emerald: "border-emerald-500/20",
  cyan: "border-cyan-500/20",
  blue: "border-blue-500/20",
};

const textColors: Record<AboutColor, string> = {
  emerald: "text-emerald-400",
  cyan: "text-cyan-400",
  blue: "text-blue-400",
};

const aboutItems: {
  color: AboutColor;
  prefix: string;
  text: string;
}[] = [
  { color: "emerald", prefix: ">> ", text: t.about.p1[lang] },
  { color: "cyan", prefix: ">> ", text: t.about.p2[lang] },
  { color: "blue", prefix: ">> ", text: t.about.p3[lang] },
];

  return (
    <section id="about" className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-emerald-200" size={32} />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-mono">
              {t.about.cmd[lang]}
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {aboutItems.map((item, i) => (
              <div key={i} className={`bg-gray-950/50 border ${borderColors[item.color]} rounded-lg p-6 backdrop-blur-sm font-mono text-sm`}>
                <p className="text-gray-300 leading-relaxed">
                  <span className={`text-${item.color}-400`}>{item.prefix}</span>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-950/50 border border-${item.color}-500/30 p-6 rounded-lg hover:border-${item.color}-500/60 transition-all hover:shadow-lg hover:shadow-${item.color}-500/20 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-${item.color}-400 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-${item.color}-400 mb-2 font-mono`}>{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
