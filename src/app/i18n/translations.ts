import c from '../components/assets/c.png';
import c_plus from '../components/assets/c++.png';
import c_c_plus from '../components/assets/c-c++.png';
import linux from '../components/assets/linux.png';
import python from '../components/assets/python.png';
import sql from '../components/assets/sql.png';

export const t = {
  nav: {
    home: { es: "Inicio", en: "Home" },
    about: { es: "Sobre mí", en: "About" },
    skills: { es: "Habilidades", en: "Skills" },
    education: { es: "Formación", en: "Education" },
    experience: { es: "Experiencia", en: "Experience" },
    projects: { es: "Proyectos", en: "Projects" },
  },
  hero: {
    role: { es: "Desarrollador Backend", en: "Backend Developer" },
    tagline: { es: "Construyendo el futuro con código limpio y arquitecturas escalables. Especialista en React, Node.js y tecnologías modernas.", en: "Building the future with clean code and scalable architectures. Specialist in React, Node.js and modern technologies." },
    fileCV: { es: "/cv/Francisco_Moreno_CV_es.pdf", en: "/cv/Francisco_Moreno_CV_en.pdf" },
    downloadCV: { es: "Descargar CV", en: "Download CV" },
    viewProjects: { es: "Ver Proyectos", en: "View Projects" },
    available: { es: "true", en: "true" },
    location: { es: "Madrid, España", en: "Madrid, Spain" },
    experience: { es: "6 meses", en: "6 months" },
    linkedinHref: { es: "https://www.linkedin.com/in/francisomorenodelacruz/?locale=es-ES", en: "https://www.linkedin.com/in/francisomorenodelacruz/?locale=en-US" },
  },
  about: {
    cmd: { es: "$ cat about.txt", en: "$ cat about.txt" },
    p1: { es: "Soy desarrollador backend con conocimientos en C, C++, Python, SQL y entornos Unix/Linux. Me gusta construir soluciones sólidas desde la base, entendiendo cómo funcionan los sistemas por dentro y escribiendo código claro, eficiente y mantenible.", en: "I am a backend developer with knowledge of C, C++, Python, SQL and Unix/Linux environments. I enjoy building solid solutions from the ground up, understanding how systems work under the hood, and writing clear, efficient and maintainable code." },
    p2: { es: "He trabajado en proyectos técnicos como minishell, IRC y algoritmos, aplicando conceptos de programación de sistemas, estructuras de datos, comunicación entre procesos y resolución de problemas. También tengo conocimientos de GitHub y Docker para gestionar código, colaborar y trabajar en entornos reproducibles.", en: "I have worked on technical projects such as minishell, IRC and algorithms, applying concepts of systems programming, data structures, inter-process communication and problem solving. I also have knowledge of GitHub and Docker for managing code, collaborating and working in reproducible environments." },
    p3: { es: "Cuando no estoy programando, sigo aprendiendo nuevas tecnologías, mejorando mis proyectos y explorando ideas relacionadas con herramientas para desarrolladores, automatización y aplicaciones con impacto real.", en: "When I am not coding, I keep learning new technologies, improving my projects and exploring ideas related to developer tools, automation and real-world applications." },
    card1: {
      title: {
        es: "Desarrollador Backend",
        en: "Backend Developer"
      },
      content: {
        es: "Desarrollo backend con C, C++, Python y SQL",
        en: "Backend development with C, C++, Python and SQL"
      },
    },
    card2: {
      title: {
        es: "Resolutor de Problemas",
        en: "Problem Solver"
      },
      content: {
        es: "Algoritmos, estructuras de datos y resolución de problemas",
        en: "Algorithms, data structures and problem solving"
      },
    },
    card3: {
      title: {
        es: "Jugador de Equipo",
        en: "Team Player"
      },
      content: {
        es: "Comunicación clara, colaboración y uso de GitHub y Docker",
        en: "Clear communication, collaboration and use of GitHub and Docker"
      },
    },
  },
  skills: {
    cmd: { es: "$ ls -la skills/", en: "$ ls -la skills/" },
    tools: { es: "Herramientas", en: "Tools" },
    ingles: { es: "Inglés", en: "English" },
    algoritmos: { es: "Algoritmos", en: "Algorithms" },
    estructuras: { es: "Estructuras de datos", en: "Data Structures" },
    networking: { es: "Redes", en: "Networking" },
  },
  education: {
    cmd: {
      es: "$ cat education.log",
      en: "$ cat education.log",
    },

    labels: {
      degree: { es: "Titulación", en: "Degree" },
      master: { es: "Máster", en: "Master" },
      cert: { es: "Cert.", en: "Cert." },
    },

    entries: [
      {
        degree: {
          es: "Ingeniería de Software",
          en: "Software Engineering",
        },
        institution: {
          es: "42 Madrid",
          en: "42 Madrid",
        },
        period: {
          es: "11/2024 - 06/2026",
          en: "11/2024 - 06/2026",
        },
        type: "cert",
        desc: {
          es: "Formación intensiva basada en proyectos reales, centrada en ingeniería de software, programación en C, C++, Python, algoritmos, estructuras de datos, sistemas Unix, redes, concurrencia y arquitectura de software.",
          en: "Intensive project-based training focused on software engineering, C, C++, Python, algorithms, data structures, Unix systems, networking, concurrency and software architecture.",
        },
        tags: {
          es: [
            "C",
            "C++",
            "Unix/Linux",
            "Python",
            "SQL",
            "Docker",
            "Git",
            "TCP/IP",
            "Algoritmos",
          ],
          en: [
            "C",
            "C++",
            "Unix/Linux",
            "Python",
            "SQL",
            "Docker",
            "Git",
            "TCP/IP",
            "Algorithms",
          ],
        },
      },

      {
        degree: {
          es: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
          en: "Higher Technician in Multiplatform Application Development",
        },
        institution: {
          es: "CampusFP",
          en: "CampusFP",
        },
        period: {
          es: "09/2022 - 07/2024",
          en: "09/2022 - 07/2024",
        },
        type: "degree",
        desc: {
          es: "Formación técnica en desarrollo de aplicaciones multiplataforma, programación orientada a objetos, bases de datos, SQL, Python, Java, PHP, Git, interfaces, acceso a datos y fundamentos de desarrollo backend.",
          en: "Technical training in multiplatform application development, object-oriented programming, databases, SQL, Python, Java, PHP, Git, interfaces, data access and backend development fundamentals.",
        },
        tags: {
          es: [
            "Python",
            "SQL",
            "Java",
            "PHP",
            "Git",
            "Algoritmos",
            "Estructuras de Datos",
          ],
          en: [
            "Python",
            "SQL",
            "Java",
            "PHP",
            "Git",
            "Algorithms",
            "Data Structures",
          ],
        },
      },

      {
        degree: {
          es: "Ingeniería de Software",
          en: "Software Engineering",
        },
        institution: {
          es: "Universidad Complutense de Madrid",
          en: "Complutense University of Madrid",
        },
        period: {
          es: "09/2019 - 06/2022",
          en: "09/2019 - 06/2022",
        },
        type: "degree",
        desc: {
          es: "Estudios universitarios centrados en fundamentos de informática, programación en C, C++, Python y SQL, matemáticas, algoritmos, estructuras de datos, sistemas operativos, arquitectura de computadores y estadística.",
          en: "University studies focused on computer science fundamentals, C, C++, Python and SQL programming, mathematics, algorithms, data structures, operating systems, computer architecture and statistics.",
        },
        tags: {
          es: [
            "C",
            "C++",
            "SQL",
            "Python",
            "Algoritmos",
            "Estructuras de Datos",
            "Sistemas Operativos",
          ],
          en: [
            "C",
            "C++",
            "SQL",
            "Python",
            "Algorithms",
            "Data Structures",
            "Operating Systems",
          ],
        },
      },

      {
        degree: {
          es: "Técnico Superior en Automatización y Robótica Industrial",
          en: "Higher Technician in Automation and Industrial Robotics",
        },
        institution: {
          es: "IES Luis de Lucena",
          en: "IES Luis de Lucena",
        },
        period: {
          es: "09/2017 - 07/2019",
          en: "09/2017 - 07/2019",
        },
        type: "degree",
        desc: {
          es: "Formación técnica en automatización industrial, programación de PLCs, Siemens TIA Portal, sistemas eléctricos, control de procesos, neumática, hidráulica y mantenimiento de sistemas robotizados.",
          en: "Technical training in industrial automation, PLC programming, Siemens TIA Portal, electrical systems, process control, pneumatics, hydraulics and maintenance of robotic systems.",
        },
        tags: {
          es: [
            "Siemens TIA Portal",
            "PLC",
            "Electricidad",
            "Neumática",
            "Hidráulica",
            "Robótica",
          ],
          en: [
            "Siemens TIA Portal",
            "PLC",
            "Electricity",
            "Pneumatics",
            "Hydraulics",
            "Robotics",
          ],
        },
      },
    ],
  },
  experience: {
    cmd: {
      es: "$ cat experience.log",
      en: "$ cat experience.log",
    },

    present: {
      es: "Presente",
      en: "Present",
    },

    entries: [
      {
        title: {
          es: "Desarrollador de Software Junior",
          en: "Junior Software Developer",
        },
        company: {
          es: "Mirelia Digital Talent",
          en: "Mirelia Digital Talent",
        },
        location: {
          es: "Madrid, España",
          en: "Madrid, Spain",
        },
        period: {
          es: "03/2024 - 08/2024",
          en: "03/2024 - 08/2024",
        },
        desc: {
          es: "Desarrollo y mantenimiento de soluciones digitales en una startup tecnológica, trabajando en lógica de aplicación, integración con bases de datos, depuración de errores y mejora de funcionalidades. Experiencia en un entorno profesional de desarrollo, utilizando control de versiones, SQL y herramientas de despliegue para construir soluciones mantenibles.",
          en: "Development and maintenance of digital solutions in a technology startup, working on application logic, database integration, debugging and feature improvement. Experience in a professional development environment, using version control, SQL and deployment tools to build maintainable solutions.",
        },
        tags: {
          es: [
            "Python",
            "SQL",
            "Docker",
            "Git",
            "TCP/IP",
            "Estructuras de Datos",
          ],
          en: [
            "Python",
            "SQL",
            "Docker",
            "Git",
            "TCP/IP",
            "Data Structures",
          ],
        },
      },
    ],
  },
  projects: {
    cmd: { es: "$ git log --projects", en: "$ git log --projects" },
    featured: { es: "Destacados", en: "Featured" },
    all: { es: "Todos por fecha", en: "All by date" },
    repo: { es: "repo", en: "repo" },
    demo: { es: "demo", en: "demo" },
    entries: [
      {
        year: 2026,
        month: 6,
        featured: true,
        name: "42 Common Core",
        desc: {
          es: "Recopilación de proyectos desarrollados durante el Common Core de 42, centrados en programación en C, algoritmos, estructuras de datos, sistemas Unix y resolución de problemas.",
          en: "Collection of projects developed during the 42 Common Core, focused on C programming, algorithms, data structures, Unix systems and problem solving."
        },
        technologies: {
          es: ["C", "C++", "Unix/Linux", "Algoritmos"],
          en: ["C", "C++", "Unix/Linux", "Algorithms"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/42Cursus",
        image: c_c_plus,
        liveUrl: ""
      },

      {
        year: 2026,
        month: 6,
        featured: false,
        name: "Transcendence",
        desc: {
          es: "Aplicación web full stack desarrollada con backend en NestJS, base de datos PostgreSQL, autenticación JWT, comunicación en tiempo real con Socket.io y despliegue con Docker.",
          en: "Full stack web application developed with a NestJS backend, PostgreSQL database, JWT authentication, real-time communication with Socket.io and Docker deployment."
        },
        technologies: {
          es: ["TypeScript", "NestJS", "PostgreSQL", "Docker"],
          en: ["TypeScript", "NestJS", "PostgreSQL", "Docker"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Transcendence",
        image: sql
      },

      {
        year: 2026,
        month: 4,
        featured: false,
        name: "CPP Module 05-09",
        desc: {
          es: "Conjunto de módulos de C++ centrados en programación orientada a objetos, excepciones, plantillas, contenedores STL y resolución de problemas con estructuras de datos.",
          en: "Set of C++ modules focused on object-oriented programming, exceptions, templates, STL containers and problem solving with data structures."
        },
        technologies: {
          es: ["C++", "POO", "STL", "Estructuras de datos"],
          en: ["C++", "OOP", "STL", "Data Structures"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/CPP-Module-5-9",
        image: c_plus
      },

      {
        year: 2026,
        month: 3,
        featured: true,
        name: "GPS-Python",
        desc: {
          es: "Proyecto desarrollado en Python centrado en algoritmos de búsqueda de caminos, representación de grafos y cálculo de rutas.",
          en: "Project developed in Python focused on pathfinding algorithms, graph representation and route calculation."
        },
        technologies: {
          es: ["Python", "Algoritmos", "Grafos", "Búsqueda de caminos"],
          en: ["Python", "Algorithms", "Graphs", "Pathfinding"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/GPS-Python",
        image: python
      },

      {
        year: 2026,
        month: 2,
        featured: false,
        name: "Inception",
        desc: {
          es: "Proyecto de administración de sistemas basado en Docker, centrado en la creación de una infraestructura con servicios independientes, redes, volúmenes y configuración de contenedores.",
          en: "System administration project based on Docker, focused on building an infrastructure with independent services, networks, volumes and container configuration."
        },
        technologies: {
          es: ["Docker", "Docker Compose", "Linux", "Nginx"],
          en: ["Docker", "Docker Compose", "Linux", "Nginx"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Inception",
        image: ""
      },

      {
        year: 2025,
        month: 11,
        featured: false,
        name: "Irc",
        desc: {
          es: "Servidor IRC desarrollado en C++ siguiendo el funcionamiento básico del protocolo IRC, con gestión de clientes, canales, comandos y comunicación mediante sockets.",
          en: "IRC server developed in C++ following the basic behavior of the IRC protocol, with client management, channels, commands and socket-based communication."
        },
        technologies: {
          es: ["C++", "Sockets", "IRC", "Redes"],
          en: ["C++", "Sockets", "IRC", "Networking"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Irc",
        image: c_plus
      },

      {
        year: 2025,
        month: 10,
        featured: false,
        name: "CPP Module 00-04",
        desc: {
          es: "Primer bloque de módulos de C++ centrado en programación orientada a objetos, clases, herencia, polimorfismo, memoria dinámica y buenas prácticas en C++98.",
          en: "First block of C++ modules focused on object-oriented programming, classes, inheritance, polymorphism, dynamic memory and good practices in C++98."
        },
        technologies: {
          es: ["C++", "C++98", "POO", "Herencia"],
          en: ["C++", "C++98", "OOP", "Inheritance"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/CPP-Module-0-4",
        image: c_plus
      },

      {
        year: 2025,
        month: 9,
        featured: false,
        name: "Cub3D",
        desc: {
          es: "Motor gráfico inspirado en Wolfenstein 3D, desarrollado en C con raycasting, texturas, minimapa, movimiento del jugador y renderizado en tiempo real.",
          en: "Graphics engine inspired by Wolfenstein 3D, developed in C with raycasting, textures, minimap, player movement and real-time rendering."
        },
        technologies: {
          es: ["C", "Raycasting", "MLX42", "Gráficos"],
          en: ["C", "Raycasting", "MLX42", "Graphics"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/cub3D",
        image: c
      },

      {
        year: 2025,
        month: 8,
        featured: true,
        name: "Minesweeper-AI",
        desc: {
          es: "Algoritmo desarrollado en Python para resolver partidas de Buscaminas mediante análisis lógico del tablero, detección de casillas seguras y toma de decisiones automatizada.",
          en: "Algorithm developed in Python to solve Minesweeper games through logical board analysis, safe cell detection and automated decision-making."
        },
        technologies: {
          es: ["Python", "Algoritmos", "Lógica", "Automatización"],
          en: ["Python", "Algorithms", "Logic", "Automation"]
        },
        stars: 2,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Minesweeper-AI",
        image: python
      },

      {
        year: 2025,
        month: 7,
        featured: true,
        name: "Minishell",
        desc: {
          es: "Shell desarrollada en C que replica funcionalidades básicas de Bash, incluyendo parsing de comandos, redirecciones, pipes, variables de entorno, señales y ejecución de procesos.",
          en: "Shell developed in C that replicates basic Bash features, including command parsing, redirections, pipes, environment variables, signals and process execution."
        },
        technologies: {
          es: ["C", "Unix", "Procesos", "Parsing"],
          en: ["C", "Unix", "Processes", "Parsing"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Minishell",
        image: c
      },

      {
        year: 2025,
        month: 7,
        featured: false,
        name: "Philosophers",
        desc: {
          es: "Implementación del problema de los filósofos comensales en C, centrada en concurrencia, sincronización de hilos, mutexes, control de tiempos y prevención de condiciones de carrera.",
          en: "Implementation of the dining philosophers problem in C, focused on concurrency, thread synchronization, mutexes, timing control and preventing race conditions."
        },
        technologies: {
          es: ["C", "Threads", "Mutexes", "Concurrencia"],
          en: ["C", "Threads", "Mutexes", "Concurrency"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Philosophers",
        image: c
      },

      {
        year: 2025,
        month: 6,
        featured: true,
        name: "Pipex Tester",
        desc: {
          es: "Tester desarrollado para comprobar el comportamiento del proyecto Pipex mediante múltiples casos de prueba, comparación de salidas, gestión de errores y validación de pipes y redirecciones.",
          en: "Tester developed to check the behavior of the Pipex project through multiple test cases, output comparison, error handling and validation of pipes and redirections."
        },
        technologies: {
          es: ["Bash", "Linux", "Testing", "Pipes"],
          en: ["Bash", "Linux", "Testing", "Pipes"]
        },
        stars: 5,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/42_pipex_tester",
        image: linux
      },

      {
        year: 2025,
        month: 6,
        featured: false,
        name: "Pipex",
        desc: {
          es: "Proyecto en C que reproduce el comportamiento de pipes y redirecciones de Unix, gestionando procesos, descriptores de archivo, ejecución de comandos y comunicación entre procesos.",
          en: "C project that reproduces the behavior of Unix pipes and redirections, handling processes, file descriptors, command execution and inter-process communication."
        },
        technologies: {
          es: ["C", "Unix", "Pipes", "Procesos"],
          en: ["C", "Unix", "Pipes", "Processes"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Pipex",
        image: c
      },

      {
        year: 2025,
        month: 5,
        featured: false,
        name: "FDF",
        desc: {
          es: "Visualizador 3D de mapas en wireframe desarrollado en C, con proyección isométrica, transformación de coordenadas, manejo de eventos y renderizado gráfico con MiniLibX.",
          en: "3D wireframe map viewer developed in C, with isometric projection, coordinate transformation, event handling and graphical rendering with MiniLibX."
        },
        technologies: {
          es: ["C", "MiniLibX", "Gráficos", "Wireframe"],
          en: ["C", "MiniLibX", "Graphics", "Wireframe"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/FDF",
        image: c
      },

      {
        year: 2025,
        month: 5,
        featured: false,
        name: "Push_Swap",
        desc: {
          es: "Proyecto en C centrado en ordenar datos usando dos stacks y un conjunto limitado de operaciones, optimizando el número de movimientos mediante algoritmos de ordenación.",
          en: "C project focused on sorting data using two stacks and a limited set of operations, optimizing the number of moves through sorting algorithms."
        },
        technologies: {
          es: ["C", "Algoritmos", "Stacks", "Ordenación"],
          en: ["C", "Algorithms", "Stacks", "Sorting"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Push_Swap",
        image: c
      },

      {
        year: 2025,
        month: 4,
        featured: false,
        name: "Ft_printf",
        desc: {
          es: "Reimplementación de la función printf en C, gestionando formatos, argumentos variables, conversión de tipos y escritura formateada por salida estándar.",
          en: "Reimplementation of the printf function in C, handling formats, variadic arguments, type conversion and formatted output to standard output."
        },
        technologies: {
          es: ["C", "Variadic", "Parsing", "Formato"],
          en: ["C", "Variadic", "Parsing", "Formatting"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Ft_Printf",
        image: c
      },

      {
        year: 2025,
        month: 1,
        featured: false,
        name: "Get_next_line",
        desc: {
          es: "Función en C para leer archivos línea por línea desde un descriptor de archivo, gestionando buffers, memoria dinámica y lecturas parciales.",
          en: "C function for reading files line by line from a file descriptor, handling buffers, dynamic memory and partial reads."
        },
        technologies: {
          es: ["C", "File Descriptors", "Buffers", "Memoria"],
          en: ["C", "File Descriptors", "Buffers", "Memory"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Get_Next_Line",
        image: c
      },

      {
        year: 2025,
        month: 1,
        featured: false,
        name: "Libft",
        desc: {
          es: "Librería propia en C que reimplementa funciones estándar y añade utilidades para manejo de memoria, strings, listas enlazadas y conversión de datos.",
          en: "Custom C library that reimplements standard functions and adds utilities for memory handling, strings, linked lists and data conversion."
        },
        technologies: {
          es: ["C", "Memoria", "Strings", "Listas enlazadas"],
          en: ["C", "Memory", "Strings", "Linked Lists"]
        },
        stars: 0,
        forks: 0,
        githubUrl: "https://github.com/Fren2804/Libft",
        image: c
      },
    ],
  },
  footer: {
    tagline: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
  },
};