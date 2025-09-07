// middleware.ts - with specific origins
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const allowedOrigins = [
    'https://binayarajsoti.vercel.app',
    'http://localhost:3000',
    'http://localhost:3001',
]
export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin') || ''
    const isAllowedOrigin = allowedOrigins.includes(origin) || origin.includes('localhost')
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
        const response = NextResponse.next()
        addCorsHeaders(response, isAllowedOrigin ? origin : allowedOrigins[0])
        return response
    }
    // Handle actual requests
    const response = NextResponse.next()
    if (isAllowedOrigin) {
        addCorsHeaders(response, origin)
    }
    return response
}
function addCorsHeaders(response: NextResponse, origin: string) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    response.headers.set('Access-Control-Allow-Credentials', 'true')
    response.headers.set('Access-Control-Max-Age', '86400')
}
export const config = {
    matcher: '/api/:path*',
}