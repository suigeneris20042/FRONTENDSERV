import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "@/utils/authHelpers";
import { logout } from "@/services/api"; // Función logout importada
import Sidebard from "@/shared/Sidebard";
import Navbard from "@/shared/Navbard";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await isAuthenticated();
        if (!auth) {
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
      {/* Sidebar fijo */}
      <Sidebard />
      <div className="flex-1 flex flex-col ml-64">
        {/* Navbar fijo */}
        <Navbard onLogout={logout} />
        {/* Contenido principal */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default PrivateLayout;
