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

  // Check if the current path is restricted
  if (restrictedRoutes.includes(url)) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      // Redirect to home if token is missing
      return NextResponse.redirect(new URL('/', request.url));
    }

    try {
      // Verify token
      jwt.verify(token, process.env.JWT_SECRET!);
      // Token valid → continue to next middleware/route
    } catch {
      // Redirect to home if token is invalid
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // For all other routes (or if JWT is valid), continue the request
  // and add general CORS headers
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
    '/api/:path*', // include API routes
  ],
};
