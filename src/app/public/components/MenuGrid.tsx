import Link from "next/link";

export default function MenuGrid() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="border-t-4 border-red-600 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-500 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Convocatorias para Contratación de Servicios
          </h3>
          <Link href="/public/servicios" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full mt-4 flex items-center justify-center">
            VER <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="bg-gray-500 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Convocatorias para Adquisición de Bienes
          </h3>
          <Link href="/public/bienes" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full mt-4 flex items-center justify-center">
            VER <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="bg-gray-500 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Modificaciones al Cuadro CMN (Anexo 06)
          </h3>
          <Link href="/public/modificaciones" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full mt-4 flex items-center justify-center">
            VER <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
