"use client";

import { useState } from "react";
import DynamicHeader from "@/shared/DynamicHeader";
import Filters from "@/shared/Filters";
import MainContent from "@/shared/MainContent";
import PublicLayout from "@/layouts/PublicLayout";

export default function ServiciosPage() {
  const [selectedAnio, setSelectedAnio] = useState<string | null>(null);

  const apiUrl = "/servicios/anios"; // URL base para la API

  return (
    <div>
      <PublicLayout>
        <DynamicHeader />

        {/* Filtros para seleccionar el año */}
        <Filters apiUrl={apiUrl} onAnioSelect={setSelectedAnio} />

        {/* Contenido principal basado en el año seleccionado */}
        {selectedAnio && (
          <MainContent apiUrl={apiUrl} selectedAnio={selectedAnio} />
        )}
      </PublicLayout>
    </div>
  );
}
