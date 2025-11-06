import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Skip password check if SITE_PASSWORD is not set (development mode)
  const sitePassword = process.env.SITE_PASSWORD
  if (!sitePassword) {
    return NextResponse.next()
  }

  // Allow access to the login page
  if (request.nextUrl.pathname === '/auth/login') {
    return NextResponse.next()
  }

  // Check for authentication cookie
  const authCookie = request.cookies.get('site_auth')

  if (!authCookie || authCookie.value !== sitePassword) {
    // Redirect to login page
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
