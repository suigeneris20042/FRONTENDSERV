"use client";

import { useState } from "react";
import DynamicHeader from "@/shared/DynamicHeader";
import Filters from "@/shared/Filters";
import MainContent from "@/shared/MainContent";
import PublicLayout from "@/layouts/PublicLayout";

export default function BienesPage() {
  const [selectedAnio, setSelectedAnio] = useState<string | null>(null);

  // URL de la API de bienes
  const apiUrl = "/bienes/anios"; // URL base para la API

  return (
    <div>
      <PublicLayout>
        <DynamicHeader />
        {/* Filtros para seleccionar el año */}

        <Filters apiUrl={apiUrl} onAnioSelect={setSelectedAnio} />

        {/* Contenido principal basado en el año seleccionado */}

        <MainContent apiUrl={apiUrl} selectedAnio={selectedAnio} />
      </PublicLayout>
    </div>
  );
}
