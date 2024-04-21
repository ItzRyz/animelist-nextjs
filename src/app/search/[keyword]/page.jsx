"use client";

import AnimeList from "@/components/AnimeList/index";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";
import ButtonUpWheel from "@/components/ButtonFunction/ButtonUpWheel";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`Search for ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
        <ButtonUpWheel />
      </section>
    </>
  );
};

export default Page;
