import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  // '/store'

  console.log('Middleware called', req.nextUrl.pathname);

  if (req.nextUrl.pathname === '/dashboard')
    return NextResponse.redirect(new URL('/signin', req.nextUrl.origin));

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
