const Navbard = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <header className="bg-white shadow flex items-center justify-between px-6 h-16">
      <h1 className="text-gray-800 text-lg font-bold">Dashboard</h1>
      <button
        onClick={onLogout}
        className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
      >
        Cerrar Sesión
      </button>
    </header>
  );
};

export default Navbard;
