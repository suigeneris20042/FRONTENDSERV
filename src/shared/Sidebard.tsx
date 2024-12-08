import Link from "next/link";
import { logout } from "@/services/api";

const Sidebard = () => {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-lg z-50 rounded-r-lg">
      <div className="px-6 py-4 text-2xl font-bold">SGBS V 1.0</div>
      <nav className="flex-1 overflow-y-auto">
        <ul>
          <li>
            <Link href="/dashboard" className="block px-6 py-3 hover:bg-gray-700 rounded">
              Bienes
            </Link>
          </li>
          <li>
            <Link href="/dashboard/tables" className="block px-6 py-3 hover:bg-gray-700 rounded">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/dashboard/forms" className="block px-6 py-3 hover:bg-gray-700 rounded">
              CMN
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="block w-full px-6 py-3 text-left bg-blue-600 hover:bg-blue-700 transition text-white rounded-b-lg"
      >
        Cerrar Sesion
      </button>
    </aside>
  );
};

export default Sidebard;
