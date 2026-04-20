import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Check if it's an admin route, but NOT the login page
  if (request.nextUrl.pathname.startsWith('/admin') && request.nextUrl.pathname !== '/admin/login') {
    const session = request.cookies.get('admin_session')?.value;

    if (!session) {
      // No session, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
    
    // In a real app we'd verify the JWT here, but jose runs in edge runtime 
    // so we can't use it easily in middleware without separate edge-compatible code.
    // Since we decode in layouts/actions anyway, checking cookie presence is a fast initial check.
  }

  // If already logged in and hitting login page, redirect to admin
  if (request.nextUrl.pathname === '/admin/login') {
    const session = request.cookies.get('admin_session')?.value;
    if (session) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
