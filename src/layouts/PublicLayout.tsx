import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";

export const metadata = {
  title: "SPBS",
  description: "Sistema de Publicacion de Bienes y Servicios",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
