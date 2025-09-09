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
    // check if current path is restricted
    if (restrictedRoutes.includes(url)) {
        const token = request.cookies.get('admin_token')?.value;
        if (!token) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        try {
            jwt.verify(token, process.env.JWT_SECRET!);
            return NextResponse.next();
        } catch {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }
    // allow all other routes
    return NextResponse.next();
}
// apply middleware to these paths
export const config = {
    matcher: ['/listblogforbinayarajpersonalwebsite', '/addblogforbinayarajpersonalwebsite'],
};
