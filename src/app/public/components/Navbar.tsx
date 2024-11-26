"use client";  // Marcar este componente como Client Component

import { useState } from 'react';
import Brand from './Brand';
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#9b192d] border-b-2 border-pink-500">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo y texto a la izquierda */}
        <Brand />

        {/* Links y menú de hamburguesa */}
        <div className="flex items-center space-x-6">
          {/* Links para pantallas grandes */}
          <div className="hidden md:flex space-x-6">
            <a href="/public/" className="text-white hover:text-pink-500">
              INICIO
            </a>
            <a href="#" className="text-white hover:text-pink-500">ABASTECIMIENTOS</a>
              <a href="#" className="text-white hover:text-pink-500">REMUNERACIONES</a>
              <a href="/login" className="text-white hover:text-pink-500">LOGIN</a>
          </div>

          {/* Menú de hamburguesa para pantallas pequeñas */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-pink-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5h16.5M3.75 12h16.5M3.75 19h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Menú desplegable en móviles */}
          {isMenuOpen && (
            <div className="absolute right-0 top-16 bg-white text-black mt-2 rounded shadow-lg w-48 md:hidden">
            
              <a href="/public/" className="block px-4 py-2 hover:bg-gray-200">INICIO</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">ABASTECIMIENTOS</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">REMUNERACIONES</a>
              <a href="/login" className="block px-4 py-2 hover:bg-gray-200">LOGIN</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
