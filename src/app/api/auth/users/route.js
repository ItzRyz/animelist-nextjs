import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const prisma = new PrismaClient();
    const data = await req.json();
    const { username } = data;

    if (!username)
      NextResponse.json(
        {
          message: "Bad Request on User"
        },
        { status: 400 }
      );
    const users = await prisma.users.findMany({
      where: { username }
    });

    return NextResponse.json(users, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Internal Server Error", error: e.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const data = await req.json();
    if (!data?.username && !data?.password)
      return NextResponse.json({
        message: "Bad request on user"
      });
    const createUser = await prisma.users.create({ data });
    if (createUser) {
      return NextResponse.json({ message: "User Created" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Bad Request on user" }, { status: 400 });
    }
  } catch (e) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: e.message
      },
      { status: 500 }
    );
  }
}
