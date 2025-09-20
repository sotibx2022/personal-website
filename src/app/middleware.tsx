// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // list of restricted frontend routes
  const restrictedRoutes = [
    '/listblogforbinayarajpersonalwebsite',
    '/addblogforbinayarajpersonalwebsite',
  ];

 if (request.method === 'OPTIONS') {
    const response = NextResponse.json({}, { status: 204 });
    response.headers.set('Access-Control-Allow-Origin', 'https://www.binaya.site');
    response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    return response;
  }

  // Handle other requests (GET, POST, etc.)
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', 'https://www.binaya.site');
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  return response;
}

  // check if current path is restricted
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

  // allow all other routes
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', 'https://www.binaya.site');
  return response;
}

// apply middleware to these paths
export const config = {
  matcher: [
    '/listblogforbinayarajpersonalwebsite',
    '/addblogforbinayarajpersonalwebsite',
    '/api/:path*', // optionally include API routes
  ],
};
