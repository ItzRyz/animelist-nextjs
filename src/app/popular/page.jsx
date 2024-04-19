"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";
import Link from "next/link";

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
      <div className="float-left px-3 py-1 mt-2 ml-3 transition-all rounded-md text-color-primary bg-color-secondary hover:bg-color-accent">
        <Link href={"/"}>Go Back</Link>
      </div>
      <br />
      <HeaderMenu title={`TOP ANIME #${page}`} />
      <AnimeList api={topAnime} />
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
