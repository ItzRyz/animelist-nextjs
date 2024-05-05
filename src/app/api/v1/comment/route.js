import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const data = await req.json();
    if (!data?.user_email && !data?.anime_mal_id && !data?.comment && !data?.username)
      return NextResponse.json({ message: "Bad Request on Comment" }, { status: 400 });
    const createComment = await prisma.comment.create({ data });
    if (createComment) {
      return NextResponse.json({ message: "Comment Successfully Added" }, { status: 200 });
    } else return NextResponse.json({ message: "Bad Request on Comment" }, { status: 400 });
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server Error", error: e.message },
      { status: 500 }
    );
  }
}