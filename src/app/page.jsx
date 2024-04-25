import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");

  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 12);

  return (
    <>
      {/* Popular Section */}
      <section>
        <Header title={"Most Popular"} linkTitle={"See all"} linkHref={"/popular"} />
        <AnimeList api={topAnime} />
      </section>
      <br />
      {/* Recommended  */}
      <section>
        <Header title={"Recommended Anime"} />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
