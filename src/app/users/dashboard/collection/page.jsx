import Header from "@/components/dashboard/Header";
import { getAnimeResponse } from "@/libs/api-libs";
import { authSession } from "@/libs/auth-libs";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const anime = await getAnimeResponse("anime/");
  const { data } = anime;

  const user = await authSession();
  const prisma = new PrismaClient();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user?.email,
      anime_mal_id: data?.mal_id,
      anime_title: data?.title,
      anime_image: data?.images
    }
  });

  return (
    <section>
      <Header title={"My Collection"} />
      <div className="grid grid-cols-2 gap-3 mx-2 sm:grid-cols-3 lg:grid-cols-6">
        {collection.map((collect, index) => {
          return (
            <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative">
              <Image src={collect.anime_image} alt="" width={350} height={350} className="w-full" />
              <div className="absolute bottom-0 flex items-center justify-center w-full h-10 bg-color-accent">
                <h5 className="text-lg text-center md:text-xl">{collect.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
