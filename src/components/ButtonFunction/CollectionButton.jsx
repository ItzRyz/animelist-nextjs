"use client";

import { PlusCircle } from "@phosphor-icons/react/dist/ssr";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const handleCollection = async () => {
    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data)
    });

    if (response.ok) {
      // const collection = await response.json();
      console.log(response); // ini undefined wait
    } else {
      console.log(response);
    }
  };
  return (
    <div>
      <button
        onClick={handleCollection}
        className="flex flex-wrap items-center justify-center gap-2 p-2 m-3 transition-all rounded-md hover:text-color-primary bg-color-accent hover:bg-color-alter">
        <span className="font-bold">
          <PlusCircle size={20} />
        </span>
        Add
      </button>
    </div>
  );
};

export default CollectionButton;
