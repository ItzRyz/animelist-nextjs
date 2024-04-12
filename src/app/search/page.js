import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`);
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Search for ${keyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
