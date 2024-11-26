"use client";

import { useEffect, useState } from "react";

interface Publicacion {
  _id: string;
  descripcion: string;
  fech_ini: string;
  fech_fin: string;
  enlace: string;
}

interface MainContentProps {
  apiUrl: string; // URL de la API para obtener bienes o servicios
  selectedAnio: string | null; // Año seleccionado para mostrar publicaciones
}

export default function MainContent({ apiUrl, selectedAnio }: MainContentProps) {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]); // Estado para las publicaciones
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    // Verificamos si hay un año seleccionado antes de hacer la petición
    if (selectedAnio) {
      const url = `${apiUrl}/${selectedAnio}`;
      console.log("Consultando API:", url); // Ver la URL de la API

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener las publicaciones");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Datos recibidos:", data); // Ver los datos recibidos
          setPublicaciones(data); // Guardamos los datos en el estado
          setError(null); // Reiniciamos el error si todo salió bien
        })
        .catch((error) => {
          console.error("Error:", error); // Mostramos el error en consola
          setError(error.message); // Guardamos el mensaje de error
        });
    }
  }, [selectedAnio, apiUrl]);

  return (
    <div className="bg-gray-50 px-4 md:px-20 py-8 shadow-md rounded-lg">
      {error && <p className="text-red-600">Error: {error}</p>} {/* Mostrar error */}
      {publicaciones.length > 0 ? (
        publicaciones.map((publicacion) => (
          <div
            key={publicacion._id}
            className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-800">
                {publicacion.descripcion}
                <span className="text-red-600">
                  ({new Date(publicacion.fech_ini).toLocaleDateString()} AL{" "}
                  {new Date(publicacion.fech_fin).toLocaleDateString()})
                </span>
                :{" "}
                <a href={publicacion.enlace} className="text-blue-600 underline">
                  Descargar
                </a>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">
          No hay publicaciones disponibles para el año {selectedAnio}.
        </p>
      )}
    </div>
  );
}
