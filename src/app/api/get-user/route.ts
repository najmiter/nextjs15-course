// http://localhost:3000/api/get-user

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const data = req.nextUrl.searchParams.get('data');
  const length = req.nextUrl.searchParams.get('n');

  if (length == '-1')
    return NextResponse.redirect(new URL('/', req.nextUrl.origin));

  if (length && !!+length) {
    const dummyData = Array.from({ length: +length }).map((_, i) => ({
      id: Date.now(),
      data: `User #${i + 1}`,
    }));

    return NextResponse.json(dummyData);
  }

  return NextResponse.json({
    data: {
      id: Date.now(),
      data: data ?? 'DEFAULT DATA',
    },
  });
}

export async function POST(req: NextRequest) {
  /* 
  {
    id: Date.now(),
    data: 'DEFAULT DATA',
  }
  
  */

  const body = await req.json();

  return NextResponse.json({ ...body, serverId: Date.now() });
}
