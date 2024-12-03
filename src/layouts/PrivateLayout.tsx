import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "@/utils/authHelpers";
import Sidebard from "@/shared/Sidebard";
import Navbard from "@/shared/Navbard";
import api from "@/services/api";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout"); // Llamada al backend para cerrar sesión
      router.push("/login"); // Redirigir al login
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAuthenticated();
      if (!auth) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Barra lateral */}
      <Sidebard />
      <div className="flex-1 flex flex-col">
        {/* Barra de navegación */}
        <Navbard onLogout={handleLogout} /> {/* Pasar la función de logout */}
        {/* Contenido principal */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default PrivateLayout;
