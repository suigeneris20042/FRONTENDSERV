import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Si no hay token y la ruta es /manage, redirigir al login
  if (!token && request.nextUrl.pathname.startsWith('/manage')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si hay token y la ruta es /login, redirigir al dashboard
  if (token && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/manage', request.url));
  }

  return NextResponse.next();
}

// Configuración del matcher para aplicar el middleware en rutas específicas
export const config = {
  matcher: ['/manage/:path*', '/login'],
};
