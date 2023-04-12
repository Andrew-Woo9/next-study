import {NextResponse} from "next/server";
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행중....');
  if(request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어가 1004....');
    return NextResponse.redirect(new URL('/products', request.url))
  }
}

export const config = {
  matcher: ['/products/:path*']
}
