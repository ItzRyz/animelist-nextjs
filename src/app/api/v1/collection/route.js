import prisma from "@/libs/prisma";

export async function POST(request, response) {
  const { anime_mal_id, user_email } = request.body;
  const data = { anime_mal_id, user_email };

  const createCollection = await prisma.collection.create({ data });
  return response.json({ createCollection });
}
