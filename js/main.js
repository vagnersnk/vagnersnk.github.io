const projects = [
    {
      image: "../images/projeto_1.jpeg",
      title: "Exercícios em python",
      desc: "Exercicios em python para treino",
      link: "https://github.com/vagnersnk/exercicios_em_python"
    },
    {
      image: "../images/projeto_2.jpeg",
      title: "Exercícios em C",
      desc: "Exercicios em C para treino basico",
      link: "https://github.com/vagnersnk/listas-exercicios"
    },
    {
      image: "https://raw.githubusercontent.com/vagnersnk/EB_ADMIN/refs/heads/master/estoque/static/favicon.ico",
      title: "EB ADMIN",
      desc: "Sistema de gerenciamento de estoque",
      link: "https://github.com/vagnersnk/EB_ADMIN"
    },
 
  ];
  
  let current = 0;
  
  const img = document.getElementById('projectImage');
  const title = document.getElementById('projectTitle');
  const desc = document.getElementById('projectDesc');
  const link = document.getElementById('projectLink');
  
  function showProject(index) {
    const project = projects[index];
    img.src = project.image;
    img.alt = project.title;
    title.textContent = project.title;
    desc.textContent = project.desc;
    link.href = project.link;
  }
  
  document.getElementById('prev').onclick = () => {
    current = (current - 1 + projects.length) % projects.length;
    showProject(current);
  };
  
  document.getElementById('next').onclick = () => {
    current = (current + 1) % projects.length;
    showProject(current);
  };
  
  showProject(current); 