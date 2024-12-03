import Link from "next/link";

const Sidebard = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="px-6 py-4 text-2xl font-bold">One</div>
      <nav className="flex-1">
        <ul>
          <li>
            <Link href="/dashboard" className="block px-6 py-3 hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/tables" className="block px-6 py-3 hover:bg-gray-700">
              Tables
            </Link>
          </li>
          <li>
            <Link href="/dashboard/forms" className="block px-6 py-3 hover:bg-gray-700">
              Forms
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
          window.location.href = "/login";
        }}
        className="block w-full px-6 py-3 text-left hover:bg-gray-700"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebard;
