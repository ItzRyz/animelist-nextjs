import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const data = await req.json();
    if (!data?.user_email && !data?.anime_mal_id && !data?.anime_title && !data?.anime_image)
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

export async function DELETE(req) {
  try {
    const prisma = new PrismaClient();
    const { anime_mal_id, user_email, anime_title, anime_image } = await req.json();

    if (!anime_mal_id || !user_email) {
      return NextResponse.json({ message: "Bad request on collection" }, { status: 400 });
    }

    const deleteCollection = await prisma.collection.delete({
      where: {
        user_email_anime_mal_id: {
          user_email,
          anime_mal_id
        },
        anime_title,
        anime_image
      }
    });

    if (deleteCollection) {
      return NextResponse.json({ message: "Delete Successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Bad request on collection" });
    }
  } catch (e) {
    return NextResponse.json(
      { message: "Internal server Error", error: e.message },
      { status: 500 }
    );
  }
}

//! pr  // bikin sign in tanpa nextauth, coba bikin auth api sendiri, pake jwt & bcrypt (encrypt password)
