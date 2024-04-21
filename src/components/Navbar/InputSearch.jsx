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
    if (!keyword || keyword.trim() === "") {
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
      <button
        className="absolute top-0 p-2 transition-all rounded-r-md end-0 bg-color-dark hover:bg-color-secondary"
        onClick={handleSearch}>
        <MagnifyingGlass size={24} color="white" />
      </button>
    </div>
  );
};

export default InputSearch;
