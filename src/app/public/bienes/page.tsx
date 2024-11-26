"use client";

import { useState } from "react";
import DynamicHeader from "../components/DynamicHeader";
import Filters from "../components/Filters";
import MainContent from "../components/MainContent";


export default function BienesPage() {
  const [selectedAnio, setSelectedAnio] = useState<string | null>(null);

  // URL de la API de bienes
  const apiUrl = "http://localhost:3001/api/bienes/anios";

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
