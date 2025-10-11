/*const PROJECTS_URL = "projects.json";

async function loadProjects() {
  const res = await fetch(PROJECTS_URL, { cache: "no-cache" });
  const projects = await res.json();
  console.log(projects); // ✅ Tus datos
  console.log("HOla");
}

loadProjects();*/
const PROJECTS_URL = "projects.json";
let i = 0;

function impar(card, project)
{
  card.innerHTML = `
  <div class="flex flex-row-reverse gap-4">
    <div style="width: 35%;">
      <img src=${project.image} alt="Captura de pantalla del proyecto"
          class="w-full h-auto rounded-lg border border-zinc-700 object-cover" />
    </div>
    <div class="flex flex-col items-center" style="width: 65%;">
      <div>
        <h2 class="text-xl font-bold text-zinc-100" style="padding: 0px 4px 4px 20px;">${project.title} - <span class="text-zinc-400">${project.date}</span></h2>
      </div>
      <hr class="w-[95%] border-zinc-400">
      <div class="text-sm text-zinc-300 space-y-1 p-4">
        <div class="flex justify-evenly">
          <p><strong>Lenguaje:</strong> ${project.languaje}</p>
          <p><strong>Frameworks:</strong> ${project.frameworks}</p>
        </div>
        <p class="text-zinc-400">${project.description}</p>
      </div>
    </div>
  </div>
  `;
  
}

function par(card, project)
{
  card.innerHTML = `
  <div class="flex gap-4">
    <div style="width: 35%;">
      <img src=${project.image} alt="Captura de pantalla del proyecto"
          class="w-full h-auto rounded-lg border border-zinc-700 object-cover" />
    </div>
    <div class="flex flex-col items-center" style="width: 65%;">
      <div class="flex flex-col items-center">
        <h2 class="text-xl font-bold text-zinc-100" style="padding: 0px 4px 4px 20px;">${project.title} - <span class="text-zinc-400">${project.date}</span></h2>
      </div>
      <hr class="w-[95%] border-zinc-400">
      <div class="text-sm text-zinc-300 space-y-1 p-4">
        <div class="flex justify-evenly">
          <p><strong>Lenguaje:</strong> ${project.languaje}</p>
          <p><strong>Frameworks:</strong> ${project.frameworks}</p>
        </div>
        <p class="text-zinc-400">${project.description}</p>
      </div>
    </div>
  </div>
  `;
  
}


async function loadProjects() {
  try {
    const res = await fetch(PROJECTS_URL, { cache: "no-cache" });
    const projects = await res.json();

    const container = document.getElementById("proyects");

    projects.forEach(project => {
      i ++;
      console.log(i);
      const card = document.createElement("a");
      card.href = project.url;
      card.className = "group block rounded-xl border border-zinc-800 p-5 hover:border-zinc-600 transition-all duration-200 bg-zinc-900/50";
      if (i % 2 == 0)
      {
        par(card, project);
      }
      else
      {
        impar(card, project);
      }
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Error al cargar proyectos:", err);
  }
}

loadProjects();

