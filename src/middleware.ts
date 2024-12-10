import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "defaultsecret"
);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    // Si no hay token y la ruta es /manage, redirigir al login
    if (request.nextUrl.pathname.startsWith("/manage")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Permitir el acceso a rutas públicas (como /login)
    return NextResponse.next();
  }

  try {
    // Verificar el token JWT usando jose
    const { payload } = await jwtVerify(token, secret);

    const userRoles = payload.roles as string[]; // Asegúrate de que el token incluya los roles
    const pathname = request.nextUrl.pathname;

    // Redirigir a /manage si el usuario ya está autenticado e intenta acceder a /login
    if (pathname === "/login") {
      return NextResponse.redirect(new URL("/manage", request.url));
    }

    // Validar permisos según la ruta
    if (pathname.startsWith("/manage/servicios")) {
      if (
        !userRoles.includes("administrador.servicios.rcu") &&
        !userRoles.includes("super_admin")
      ) {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    } else if (pathname.startsWith("/manage/bienes")) {
      if (
        !userRoles.includes("administrador.bienes.rcu") &&
        !userRoles.includes("super_admin")
      ) {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }
  } catch (err) {
    console.error("Error al verificar el token:", err);

    // Si el token es inválido, redirigir al login solo en rutas protegidas
    if (request.nextUrl.pathname.startsWith("/manage")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Configuración del matcher para aplicar el middleware en rutas específicas
export const config = {
  matcher: [
    "/manage/:path*", // Aplica a todas las rutas bajo /manage
    "/login", // Aplica también a /login
  ],
};
