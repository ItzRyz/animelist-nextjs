"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword === " ") {
      null;
    } else {
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Search Anime.."
        className="w-full p-2 rounded-md"
        onKeyDown={handleKey}
        ref={searchRef}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
