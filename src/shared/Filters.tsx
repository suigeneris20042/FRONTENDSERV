"use client";

import { useEffect, useState } from "react";
import api from "@/services/api"; // Cliente centralizado para solicitudes

interface FiltersProps {
  apiUrl: string; // URL base para obtener los años (bienes o servicios)
  onAnioSelect: (anio: string) => void; // Función para manejar la selección de un año
}

export default function Filters({ apiUrl, onAnioSelect }: FiltersProps) {
  const [anios, setAnios] = useState<string[]>([]); // Estado para los años obtenidos
  const [selectedAnio, setSelectedAnio] = useState<string | null>(null); // Año seleccionado
  const [loading, setLoading] = useState<boolean>(true); // Indicador de carga
  const [error, setError] = useState<string | null>(null); // Manejo de errores

  // Función para obtener los años desde la API
  const fetchAnios = async () => {
    try {
      setLoading(true); // Activar el indicador de carga
      const response = await api.get<{ success: boolean; data: string[] }>(
        `${apiUrl}/`
      );

      console.log("Respuesta de la API:", response.data);

      if (response.data.success && Array.isArray(response.data.data)) {
        setAnios(response.data.data);

        if (response.data.data.length > 0) {
          const defaultAnio = response.data.data[0];
          setSelectedAnio(defaultAnio); // Seleccionar el primer año por defecto
          onAnioSelect(defaultAnio); // Informar al padre
        }
      } else {
        throw new Error("Formato inesperado en la respuesta de la API.");
      }
    } catch (err: any) {
      console.error("Error al obtener los años:", err);
      setError(err.message || "Error al cargar los años.");
    } finally {
      setLoading(false); // Desactivar el indicador de carga
    }
  };

  // Llamar a la API al montar el componente
  useEffect(() => {
    fetchAnios();
  }, [apiUrl]);

  // Manejar la selección de un año
  const handleAnioClick = (anio: string) => {
    setSelectedAnio(anio); // Actualizar el año seleccionado localmente
    onAnioSelect(anio); // Informar al componente padre
  };

  return (
    <div className="flex flex-wrap justify-center space-x-4 bg-gray-100 py-4">
      {loading ? (
        <p>Cargando años...</p> // Mostrar mensaje de carga
      ) : error ? (
        <p className="text-red-500">{error}</p> // Mostrar mensaje de error
      ) : (
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
      )}
    </div>
  );
}
