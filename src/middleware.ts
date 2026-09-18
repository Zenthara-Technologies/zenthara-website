import { NextResponse, type NextRequest } from 'next/server';

// Amplify/CloudFront terminate TLS in front of the app and forward the
// original scheme via x-forwarded-proto. Redirect any plain-HTTP request
// to HTTPS; local dev has no forwarded-proto header, so this is a no-op there.
export function middleware(request: NextRequest) {
  const proto = request.headers.get('x-forwarded-proto');
  const host = request.nextUrl.hostname;
  const isLocal = host === 'localhost' || host === '127.0.0.1';
  if (proto === 'http' && !isLocal) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
