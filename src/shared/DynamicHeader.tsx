"use client";

import { usePathname } from "next/navigation";
import { pagesConfig } from "../config/pagesConfig";

export default function DynamicHeader() {
  const pathname = usePathname();

  // Obtenemos la configuración de la página actual o una configuración por defecto
  const pageConfig = pagesConfig[pathname] || {
    title: "Página no encontrada",
    subtitle: "La ruta no tiene una configuración específica.",
    backgroundImage: "/images/frontisunsaac.jpg", // Imagen por defecto
  };

  return (
    <header
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: `url(${pageConfig.backgroundImage})` }}
    >
      {/* Fondo oscuro con opacidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido del encabezado */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold">{pageConfig.title}</h1>
        <p className="text-lg mt-2">{pageConfig.subtitle}</p>
      </div>
    </header>
  );
}
