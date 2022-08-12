import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(req: NextRequest) {
    let res = NextResponse.next();
    let isLogin = req.cookies.get('islogin')
    const { pathname } = req.nextUrl

    if (isLogin === undefined && pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if (isLogin === 'true' && pathname === '/login') {
        return NextResponse.redirect(new URL('/', req.url))
    }

    return res;
}

export const config = {
    matcher: ['/', '/login']
}