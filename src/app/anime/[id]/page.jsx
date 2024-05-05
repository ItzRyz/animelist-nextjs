import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/ButtonFunction/CollectionButton";
import { authSession } from "@/libs/auth-libs";
import ButtonHis from "@/components/ButtonFunction/ButtonHis";
import { PrismaClient } from "@prisma/client";
import DelCollectButton from "@/components/ButtonFunction/DelCollectButton";
import CommentSection from "@/components/AnimeList/CommentSection";

const Page = async ({ params: { id } }) => {
  const prisma = new PrismaClient();
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id }
  });

  return (
    <>
      <div className="px-4 pt-8">
        <ButtonHis />
        <div>
          <h3 className="ml-3 text-2xl text-color-primary">
            {anime.data.title} - {anime.data.year}
          </h3>
          {!collection && user ? (
            <CollectionButton
              anime_mal_id={id}
              user_email={user?.email}
              anime_title={anime.data?.title}
              anime_image={anime.data?.images.webp.large_image_url}
            />
          ) : (
            <DelCollectButton
              anime_mal_id={id}
              user_email={user?.email}
              anime_title={anime.data?.title}
              anime_image={anime.data?.images.webp.large_image_url}
            />
          )}
        </div>
        <div className="flex gap-2 px-4 pt-4 overflow-x-auto text-color-primary">
          <div className="flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary">
            <h3>Rank</h3>
            <p>{anime.data.rank}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary">
            <h3>Score</h3>
            <p>{anime.data.score}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary">
            <h3>Members</h3>
            <p>{anime.data.members}</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border rounded w-36 border-color-primary">
            <h3>Episode</h3>
            <p>{anime.data.episodes}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 px-4 pt-4 md:flex-nowrap text-color-primary">
          <Image
            src={anime.data.images.webp.large_image_url}
            alt={anime.data.images.jpg.large_image_url}
            width={250}
            height={250}
            className="object-cover w-full rounded"
          />
          <p className="text-xl text-justify">{anime.data.synopsis}</p>
        </div>
        <div className="px-4 py-6">
          <CommentSection anime_mal_id={id} user_email={user?.email} username={user?.name} />
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
