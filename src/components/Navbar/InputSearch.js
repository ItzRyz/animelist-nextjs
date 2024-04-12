"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (keyword) {
      router.push(`/search/${keyword}`);
    } else {
      null;
    }
  };

  return (
    <div className="relative">
      <input placeholder="Search Anime.." className="w-full p-2 rounded-md" ref={searchRef} />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
