import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware.js", request.url);
  return NextResponse.redirect(new URL("/", request.url));
}

//redirects to the home page if the user tries to access /about or /tasks
export const config = {
  // matcher: ["/about/:path*", "/tasks/:path*"],
  matcher: ["/about/:path*"],
};
