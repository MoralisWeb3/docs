import { redirects } from './api/data/redirects';

// Convert redirects array to Map for O(1) lookup performance
const redirectMap = new Map(
  redirects.map(r => [r.source, { destination: r.destination, permanent: r.permanent ?? true }])
);

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Check if this path needs to be redirected
  const redirect = redirectMap.get(pathname);

  if (redirect) {
    const destination = new URL(redirect.destination, url.origin);

    // Use permanent (308) or temporary (307) redirect
    return Response.redirect(destination.toString(), redirect.permanent ? 308 : 307);
  }

  // Continue to the requested page - return undefined or null to continue
  return undefined;
}

// Configure which paths the middleware should run on
export const config = {
  // Run on all paths except:
  // - API routes
  // - Static files (_next/static)
  // - Images and other assets
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets, img, fonts (static assets)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets|img|fonts).*)',
  ],
};
