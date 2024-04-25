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
      <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-6">
        {collection.map((collect, index) => {
          return (
            <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative">
              <div className="overflow-hidden transition-all group hover:scale-110 hover:rounded-md">
                <Image
                  src={collect.anime_image}
                  alt=""
                  width={350}
                  height={450}
                  className="w-full h-64 bg-cover"
                />
                <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-full text-center text-white transition-opacity duration-300 bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100">
                  <h3 className="text-lg font-bold text-center md:text-xl">
                    {collect.anime_title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
