/**
 * Verifica si el usuario está autenticado llamando al backend.
 * Devuelve `true` si el usuario está autenticado, `false` en caso contrario.
 */
export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const response = await fetch("http://localhost:3001/api/auth/check", {
      method: "GET",
      credentials: "include", // Enviar cookies
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.authenticated;
  } catch (error) {
    console.error("Error al verificar autenticación:", error);
    return false;
  }
};


/**
 * Cierra sesión llamando al backend.
 * Esta función puede redirigir al usuario al login si se completa exitosamente.
 */
export const logout = async (): Promise<void> => {
  try {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      console.log("Sesión cerrada exitosamente");
      window.location.href = "/login"; // Redirigir al login
    } else {
      console.error("Error al cerrar sesión");
    }
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

/**
 * Verifica si esta autenticado 
 */


