import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const data = await req.json();
    if (!data.user_email && !data.anime_mal_id)
      return NextResponse.json({ message: "Bad Request on Collection" }, { status: 400 });
    const createCollection = await prisma.collection.create({ data }); // baca docs bang, baca docs nya dari google aja jgn ke webnya nextjs
    if (createCollection) {
      // bahasa di docs nextjs terlalu tinggi
      return NextResponse.json({ message: "Collection Successfully Added" }, { status: 200 }); // kalo anime_mal_id nya unique gk bakal bisa
    } else return NextResponse.json({ message: "Bad Request on Collection" }, { status: 400 });
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server Error", error: e.message },
      { status: 500 } // bikin sign in tanpa nextauth, coba bikin auth api sendiri, sehari selesai ini mah pake jwt & bcrypt (encrypt password) jgn lupa biar secure
    ); // bebas itu mah, mau di taro node_modules jg bisa klo ngerti cara bikin package
  }
} // oiya client side nya aman?
