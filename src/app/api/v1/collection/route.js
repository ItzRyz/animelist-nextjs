import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const data = await req.json();
    if (!data.user_email && !data.anime_mal_id)
      return NextResponse.json({ message: "Bad Request on Collection" }, { status: 400 });
    const createCollection = await prisma.collection.create({ data });
    if (createCollection) {
      return NextResponse.json({ message: "Collection Successfully Added" }, { status: 200 });
    } else return NextResponse.json({ message: "Bad Request on Collection" }, { status: 400 });
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server Error", error: e.message },
      { status: 500 }
    );
  }
}

//! pr  // bikin sign in tanpa nextauth, coba bikin auth api sendiri, pake jwt & bcrypt (encrypt password)
