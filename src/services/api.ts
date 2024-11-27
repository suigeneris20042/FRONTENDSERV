import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "5000"),
});

// Interceptor para agregar encabezados de autorización
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("No autorizado. Redirigiendo al login...");
      window.location.href = "/login"; // Redirige al login
    } else if (error.response) {
      console.error(
        `Error en la API (${error.response.status}): ${
          error.response.data?.message || error.message
        }`
      );
    } else {
      console.error(`Error de red o del cliente: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default api;
