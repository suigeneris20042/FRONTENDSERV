"use client";

import { useState } from "react";
import DynamicHeader from "../components/DynamicHeader";
import Filters from "../components/Filters";
import MainContent from "../components/MainContent";


export default function ServiciosPage() {
  const [selectedAnio, setSelectedAnio] = useState<string | null>(null);

  // URL de la API de servicios
  const apiUrl = "http://localhost:3001/api/servicios/anios";

  return (
    <div>
      <DynamicHeader/>
      
      {/* Filtros para seleccionar el año */}
      <Filters apiUrl={apiUrl} onAnioSelect={setSelectedAnio} />

      {/* Contenido principal basado en el año seleccionado */}
      <MainContent apiUrl={apiUrl} selectedAnio={selectedAnio} />

    </div>
  );
}
