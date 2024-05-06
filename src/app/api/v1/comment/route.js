import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const data = await req.json();
    if (
      !data?.user_email &&
      !data?.anime_mal_id &&
      !data?.comment &&
      !data?.username &&
      !data?.anime_title
    )
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

export async function GET(req) {
  try {
    const prisma = new PrismaClient();
    const data = await req.json();
    const { anime_mal_id } = data;
    if (!anime_mal_id)
      return NextResponse.json({ message: "Bad Request on Comment GET" }, { status: 400 });

    const comments = await prisma.comment.findMany({
      where: { anime_mal_id }
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server Error", error: e.message },
      { status: 500 }
    );
  }
}
