import { NextResponse } from "next/server";

export function middleware(request) {
    console.log(request.nextUrl.pathname)
    if (request.nextUrl.pathname !== "/login") {
        if (request.nextUrl.pathname !== "/about") {
            return NextResponse.redirect(new URL("/login", request.nextUrl))

        }

    }
}
export const config = {
    matcher: ["/about/:path*"]
}