"use client";

import { useEffect, useState } from "react";

interface FiltersProps {
  apiUrl: string; // URL para obtener los años según la página (bienes o servicios)
  onAnioSelect: (anio: string) => void; // Función para seleccionar un año
}

export default function Filters({ apiUrl, onAnioSelect }: FiltersProps) {
  const [anios, setAnios] = useState<string[]>([]); // Estado para los años
  const [selectedAnio, setSelectedAnio] = useState<string | null>(null); // Año seleccionado

  useEffect(() => {
    // Hacemos la petición a la API para obtener los años
    fetch(`${apiUrl}/`)
      .then((response) => response.json())
      .then((data) => {
        setAnios(data);

        if(data.length > 0){
          setSelectedAnio(data[0]);
          onAnioSelect(data[0]);
        }
      })
      .catch((error) => console.error("Error al obtener los años:", error));
  }, [apiUrl]);

  const handleAnioClick = (anio: string) => {
    setSelectedAnio(anio); // Actualizamos el estado del año seleccionado
    onAnioSelect(anio); // Informamos al componente padre del año seleccionado
  };

  return (
    <div className="flex justify-center space-x-4 bg-gray-100 py-4">
      {anios.length > 0 ? (
        anios.map((anio) => (
          <button
            key={anio}
            onClick={() => handleAnioClick(anio)}
            className={`px-4 py-2 rounded-md ${
              anio === selectedAnio
                ? "bg-red-700 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Publicaciones del Año {anio}
          </button>
        ))
      ) : (
        <p>Cargando años...</p>
      )}
    </div>
  );
}
