import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "@/utils/authHelpers";
import { logout } from "@/services/api"; // Importa logout desde api.ts
import Sidebard from "@/shared/Sidebard";
import Navbard from "@/shared/Navbard";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await isAuthenticated();
        if (!auth && router.pathname !== "/login") {
          router.push("/login");
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error al verificar autenticación:", error);
        router.push("/login");
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
        <Navbard onLogout={logout} /> {/* Usa la función logout importada */}
        {/* Contenido principal */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default PrivateLayout;
