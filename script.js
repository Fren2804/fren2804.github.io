const PROJECTS_URL = "projects.json";

async function loadProjects() {
  const res = await fetch(PROJECTS_URL, { cache: "no-cache" });
  const projects = await res.json();
}

loadProjects();