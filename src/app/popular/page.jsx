"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";
import ButtonPath from "@/components/ButtonFunction/ButtonPath";
import ButtonUpWheel from "@/components/ButtonFunction/ButtonUpWheel";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <ButtonPath path={"/"} text={"Go Back"} />
      <HeaderMenu title={`TOP ANIME #${page}`} />
      <AnimeList api={topAnime} />
      <ButtonUpWheel />
      {topAnime.pagination && (
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default Page;
