import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-6">
      {api &&
        api.data?.map((anime, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${anime.mal_id}`}
              className="relative transition-all cursor-pointer text-color-primary">
              <div className="overflow-hidden transition-all group hover:scale-110 hover:rounded-md">
                <div className="relative">
                  <Image
                    src={anime.images.webp.large_image_url}
                    alt="..."
                    width={350}
                    height={350}
                    className="w-full h-64 bg-cover"
                  />
                  <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-full text-center text-white transition-opacity duration-300 bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100">
                    <h3 className="p-4 font-bold md:text-xl text-md">{anime.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default AnimeList;
