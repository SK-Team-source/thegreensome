import { NextResponse } from 'next/server';

const CANONICAL = {
  '/company': '/about',
  '/products': '/protein-sources',
  '/gallery': '/',
  '/contact-us': '/contact',
  '/contact-us/wholesale-enquiry': '/contact',
  '/blog': '/articles',
  '/home': '/',
};

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const target = CANONICAL[trimmed.toLowerCase()];
  if (target && target !== trimmed) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|api/|images/|favicon).*)'],
};
