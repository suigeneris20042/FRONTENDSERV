"use client"; // Marcar este componente como Client Component

import { useState } from "react";
import Brand from "./Brand";
import Link from "next/link";

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <footer className="bg-[#9b192d] text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
