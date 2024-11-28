import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Obtener el token desde las cookies

  console.log("Middleware ejecutado para:", req.nextUrl.pathname);
  console.log("Token encontrado:", token);

  // Rutas protegidas
  const protectedRoutes = ["/manage"];

  // Verificar si la ruta requiere autenticación
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      console.log("Redirigiendo al login");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next(); // Continuar si está autenticado
}

export const config = {
  matcher: ["/manage/:path*"], // Aplica el middleware a todas las subrutas bajo /manage
};
