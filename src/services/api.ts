import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "5000"),
  withCredentials: true, // Asegura que las cookies se envíen automáticamente
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("No autorizado. Redirigiendo al login...");
      window.location.href = "/login"; // Redirigir al login si la sesión expira
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

/**
 * Función para cerrar sesión.
 * Llama al endpoint de logout en el servidor para eliminar la cookie HTTP-Only.
 */
export const logout = async (): Promise<void> => {
  try {
    const response = await api.post("/auth/logout");

    if (response.status === 200) {
      console.log("Sesión cerrada exitosamente");
      window.location.href = "/login"; // Redirigir al login después del logout
    }
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

export default api;

