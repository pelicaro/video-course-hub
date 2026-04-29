export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  module: string;
  order: number;
  videoUrl: string;
  thumbnail: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Introdução ao Curso",
    description: "Bem-vindo! Nesta aula você vai conhecer toda a estrutura do curso e o que vai aprender.",
    duration: "12:30",
    module: "Módulo 1 — Fundamentos",
    order: 1,
    videoUrl: "https://youtu.be/dcLLw-B9W6Q",
    thumbnail: "",
  },
  {
    id: "2",
    title: "Conceitos Essenciais",
    description: "Vamos explorar os conceitos básicos que serão a base de todo o conteúdo.",
    duration: "18:45",
    module: "Módulo 1 — Fundamentos",
    order: 2,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "",
  },
  {
    id: "3",
    title: "Colocando em Prática",
    description: "Hora de aplicar o que aprendemos com exercícios práticos guiados.",
    duration: "25:10",
    module: "Módulo 2 — Prática",
    order: 3,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "",
  },
  {
    id: "4",
    title: "Projeto Final",
    description: "Construa seu projeto do zero aplicando tudo que foi aprendido no curso.",
    duration: "32:00",
    module: "Módulo 2 — Prática",
    order: 4,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "",
  },
  {
    id: "5",
    title: "Dicas Avançadas",
    description: "Técnicas avançadas para levar seu conhecimento ao próximo nível.",
    duration: "20:15",
    module: "Módulo 3 — Avançado",
    order: 5,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "",
  },
  {
    id: "6",
    title: "Encerramento e Próximos Passos",
    description: "Revisão geral e orientações para continuar sua jornada de aprendizado.",
    duration: "15:00",
    module: "Módulo 3 — Avançado",
    order: 6,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "",
  },
];
