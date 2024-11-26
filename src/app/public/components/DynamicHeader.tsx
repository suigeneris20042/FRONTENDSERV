"use client";

import { usePathname } from "next/navigation"; // Usamos usePathname en vez de useRouter
import { pagesConfig } from "../config/pagesConfig";

export default function DynamicHeader() {
  const pathname = usePathname(); // Obtener la ruta actual

  // Obtenemos la configuración de la página actual o una configuración por defecto
  const pageConfig = pagesConfig[pathname] || {
    title: "Página no encontrada",
    subtitle: "Esta página no tiene una configuración específica",
    backgroundImage: "frontisunsaac.jpg", // Imagen por defecto si no se encuentra la ruta
  };

  return (
    <header
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: `url(${pageConfig.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Fondo oscuro con transparencia */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">{pageConfig.title}</h1>
        <p className="text-lg mt-2">{pageConfig.subtitle}</p>
      </div>
    </header>
  );
}
