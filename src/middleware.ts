import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<any>(
    { req, res },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_NORTHTENSOR_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_NORTHTENSOR_SUPABASE_ANON_KEY
    }
  )
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session) {
    return res
  }

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_NORTHTENSOR_URL}/profile?redirectUrl=${process.env.NEXT_PUBLIC_WIKITENSOR_URL}`
  )
}
