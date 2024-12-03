import React from "react";
import PrivateLayout from "@/layouts/PrivateLayout";

const ManagePage = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bienvenido al Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Métricas</h3>
          <p>123</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Usuarios</h3>
          <p>456</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Reportes</h3>
          <p>789</p>
        </div>
      </div>
    </div>
  );
};

// Aplica el layout al Dashboard
ManagePage.getLayout = (page: React.ReactElement) => (
  <PrivateLayout>{page}</PrivateLayout>
);

export default ManagePage;

