import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from './utils/auth';

export default async function middleware(req: NextRequest) {
  // '/store'
  // const session = await auth()
  // if (!session) {
  //   return NextResponse.redirect(new URL('/signin', req.nextUrl.origin));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
