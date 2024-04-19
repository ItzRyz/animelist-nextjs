import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 sm:grid-cols-3">
      {api &&
        api.data?.map((anime, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${anime.mal_id}`}
              className="transition-all cursor-pointer text-color-primary hover:text-color-accent">
              <Image
                src={anime.images.webp.large_image_url}
                alt="..."
                width={350}
                height={350}
                className="object-cover w-full max-h-64"
              />
              <h3 className="p-4 font-bold md:text-xl text-md">{anime.title}</h3>
            </Link>
          );
        })}
    </div>
  );
};

export default AnimeList;
