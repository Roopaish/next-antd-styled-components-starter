import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { jwtDecode } from "jwt-decode"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("AccessToken")
  const path = request.nextUrl.pathname

  if (token) {
    const decodedToken = jwtDecode(token.value)
    let redirectPath = "dashboard"

    if (decodedToken.exp) {
      if (decodedToken.exp < Math.floor(Date.now() / 1000)) {
        redirectPath = "login"
      }
    } else {
      redirectPath = "login"
    }

    if (!path.includes(redirectPath)) {
      return NextResponse.redirect(new URL(redirectPath, request.url))
    } else {
      return NextResponse.next()
    }
  } else {
    if (path !== "/login" && path !== "/signup") {
      return NextResponse.redirect(new URL("/login", request.url))
    } else {
      return NextResponse.next()
    }
  }
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/dashboard/:path*",
    "/admin-dashboard/:path*",
    "/",
  ],
}
