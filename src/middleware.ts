import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function customMiddleware(req: NextRequest) {
  const response = intlMiddleware(req);

  // Your custom code here
  const acceptLang = req.headers.get("accept-language");
  response.headers.set("x-site-locale", acceptLang ?? "en");

  return response;
}

export const config = {
  matcher: ["/", "/(en|vi)/:path*"],
};
