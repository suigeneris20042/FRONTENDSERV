// config/pagesConfig.ts
export const pagesConfig: {
  [key: string]: { title: string; subtitle: string; backgroundImage: string };
} = {
  "/public/servicios": {
    title: "Servicios",
    subtitle: "Descubre todos los servicios disponibles",
    backgroundImage: "frontisunsaac.jpg",
  },
  "/public/bienes": {
    title: "Bienes",
    subtitle: "Explora nuestra lista de bienes",
    backgroundImage: "frontisunsaac.jpg",
  },
  "/public": {
    title: "Inicio",
    subtitle: "Bienvenido a nuestro sitio web",
    backgroundImage: "frontisunsaac.jpg",
  },
};
