import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = [
  "https://amigoimmigrant.com",
  "https://www.amigoimmigrant.com"
];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("Origin");

  // Handle preflight requests (OPTIONS method)
  if (request.method === "OPTIONS") {
    const response = new NextResponse(null, { status: 204 });

    if (allowedOrigins.includes(origin || "")) {
      response.headers.set("Access-Control-Allow-Origin", origin || "");
      response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
      response.headers.set("Access-Control-Allow-Credentials", "true");
      response.headers.set("Vary", "Origin");
    }

    return response;
  }

  // For other requests
  const response = NextResponse.next();

  if (allowedOrigins.includes(origin || "")) {
    response.headers.set("Access-Control-Allow-Origin", origin || "");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Vary", "Origin");
  }

  return response;
}

export const config = {
  matcher: "/api/:path*", // Apply to all API routes
};
