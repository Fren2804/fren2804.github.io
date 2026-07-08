import { Github, ExternalLink, Star, GitFork, FolderGit2, Bookmark, Calendar } from "lucide-react";
import { useState } from "react";
import { useLang } from "../context/LangContext";
import { t } from "../i18n/translations";

type Tab = "featured" | "all";

export function Projects() {
  const { lang } = useLang();
  const [tab, setTab] = useState<Tab>("featured");

  const allEntries = [...t.projects.entries].sort((a, b) => b.year - a.year);
  const featured = allEntries.filter((p) => p.featured);

  const displayed = tab === "featured" ? featured : allEntries;

  // Group by year for the "all" view
  const byYear: Record<number, typeof allEntries> = {};
  if (tab === "all") {
    for (const p of allEntries) {
      if (!byYear[p.year]) byYear[p.year] = [];
      byYear[p.year].push(p);
    }
  }
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderGit2 className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-mono">
              {t.projects.cmd[lang]}
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto" />
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex border border-emerald-500/30 rounded-lg overflow-hidden font-mono text-sm">
            <button
              onClick={() => setTab("featured")}
              className={`flex items-center gap-2 px-5 py-2.5 transition-colors ${
                tab === "featured"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/40"
              }`}
            >
              <Bookmark size={14} />
              {t.projects.featured[lang]}
            </button>
            <div className="w-px bg-emerald-500/30" />
            <button
              onClick={() => setTab("all")}
              className={`flex items-center gap-2 px-5 py-2.5 transition-colors ${
                tab === "all"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/40"
              }`}
            >
              <FolderGit2 size={14} />
              {t.projects.all[lang]}
            </button>
          </div>
        </div>

        {/* Featured grid */}
        {tab === "featured" && (
          <div className="grid md:grid-cols-2 gap-8">
            {displayed.map((project, idx) => (
              <ProjectCard key={idx} project={project} lang={lang} />
            ))}
          </div>
        )}

        {/* All — grouped by year */}
        {tab === "all" && (
          <div className="space-y-10">
            {years.map((year) => (
              <div key={year}>
                {/* Year marker */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-xs text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded bg-emerald-500/5">
                    {year}
                  </span>
                  <div className="flex-1 h-px bg-emerald-500/20" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {byYear[year].map((project, idx) => (
                    <ProjectCard key={idx} project={project} lang={lang} compact />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const MONTHS_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const MONTHS_EN = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

type Project = (typeof t.projects.entries)[number];

function ProjectCard({
  project,
  lang,
  compact = false,
}: {
  project: Project;
  lang: "es" | "en";
  compact?: boolean;
}) {
  const monthLabel = project.month
    ? (lang === "es" ? MONTHS_ES : MONTHS_EN)[project.month - 1]
    : null;

  return (
    <div className="bg-gray-900/50 border border-emerald-500/30 rounded-lg overflow-hidden hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/20 transition-all group">
      {/* Image — only shown in non-compact or when image exists */}
      {!compact && project.image && (
        <div className="h-44 overflow-hidden bg-gray-800 relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          {project.featured && (
            <span className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono px-2 py-0.5 rounded">
              <Bookmark size={10} />
              {lang === "es" ? "destacado" : "featured"}
            </span>
          )}
        </div>
      )}

      <div className={compact ? "p-5" : "p-6"}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className={`font-bold text-emerald-400 font-mono group-hover:text-emerald-300 transition-colors ${compact ? "text-lg" : "text-2xl"}`}>
            {project.name}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {compact && monthLabel && (
              <span className="flex items-center gap-1 text-gray-500 font-mono text-xs">
                <Calendar size={11} />
                {monthLabel}
              </span>
            )}
            {compact && project.featured && (
              <Bookmark size={14} className="text-emerald-400" />
            )}
          </div>
        </div>

        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.desc[lang]}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies[lang].map((tech, i) => (
            <span key={i} className="bg-gray-950 text-gray-300 border border-gray-700 px-2 py-1 rounded text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-400 text-sm font-mono">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-500" />
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={14} className="text-cyan-400" />
              <span>{project.forks}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-emerald-400 transition-colors font-mono text-xs">
              <Github size={16} />
              {t.projects.repo[lang]}
            </a>
            {project.liveUrl?.trim() && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors font-mono text-xs"
            >
              <ExternalLink size={16} />
              {t.projects.demo[lang]}
            </a>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
