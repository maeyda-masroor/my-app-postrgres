// app/api/users/insert/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(request: Request) {
  const { name, email } = await request.json();

  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
  }
}
