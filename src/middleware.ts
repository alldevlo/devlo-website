import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { resolveCaseStudyCanonicalSlug } from "@/lib/case-study-slug-redirects";

const SUPPORTED_LOCALES = new Set(["fr", "en", "de", "nl"]);

function isBypassedPath(pathname: string) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/.well-known/") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.[^/]+$/.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalizedPathname = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";

  const redirectTo = (targetPathname: string) => {
    const targetUrl = request.nextUrl.clone();
    targetUrl.pathname = targetPathname;

    return new NextResponse(null, {
      status: 301,
      headers: {
        Location: targetUrl.toString(),
      },
    });
  };

  const resultatsSlugPrefix = "/resultats/";
  const isResultatsRoot = normalizedPathname === "/resultats";
  const isResultatsSlug = normalizedPathname.startsWith(resultatsSlugPrefix);
  const resultatsSlug = isResultatsSlug ? normalizedPathname.slice(resultatsSlugPrefix.length) : "";
  const canonicalResultatsPath = isResultatsRoot
    ? "/etudes-de-cas"
      : isResultatsSlug && resultatsSlug
      ? `/etudes-de-cas/${resolveCaseStudyCanonicalSlug(resultatsSlug)}`
      : null;

  if (canonicalResultatsPath) {
    return redirectTo(canonicalResultatsPath);
  }

  if (normalizedPathname === "/" || isBypassedPath(normalizedPathname)) {
    return NextResponse.next();
  }

  const segments = normalizedPathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (!maybeLocale || !SUPPORTED_LOCALES.has(maybeLocale)) {
    return NextResponse.next();
  }

  const rewrittenPath = `/${segments.slice(1).join("/")}`.replace(/\/+$/, "") || "/";
  const nextUrl = request.nextUrl.clone();
  nextUrl.pathname = rewrittenPath;

  return NextResponse.rewrite(nextUrl);
}

export const config = {
  matcher: ["/:path*"],
};
