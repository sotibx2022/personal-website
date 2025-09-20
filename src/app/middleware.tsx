// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // List of restricted frontend routes
  const restrictedRoutes = [
    '/listblogforbinayarajpersonalwebsite',
    '/addblogforbinayarajpersonalwebsite',
  ];

  // Handle preflight OPTIONS requests
  if (request.method === 'OPTIONS') {
    const response = NextResponse.json({}, { status: 204 });
    response.headers.set('Access-Control-Allow-Origin', 'https://www.binaya.site');
    response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    return response;
  }

  // Check if the current path is restricted
  if (restrictedRoutes.includes(url)) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      const response = NextResponse.redirect(new URL('/', request.url));
      response.headers.set('Access-Control-Allow-Origin', 'https://www.binaya.site');
      return response;
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      const response = NextResponse.next();
      response.headers.set('Access-Control-Allow-Origin', 'https://www.binaya.site');
      return response;
    } catch {
      const response = NextResponse.redirect(new URL('/', request.url));
      response.headers.set('Access-Control-Allow-Origin', 'https://www.binaya.site');
      return response;
    }
  }

  // For all other routes, just continue the request and set CORS headers
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', 'https://www.binaya.site');
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  return response;
}

// Apply middleware to these paths
export const config = {
  matcher: [
    '/listblogforbinayarajpersonalwebsite',
    '/addblogforbinayarajpersonalwebsite',
    '/api/:path*', // include API routes for CORS
  ],
};
