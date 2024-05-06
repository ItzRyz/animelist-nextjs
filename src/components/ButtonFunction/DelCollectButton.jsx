"use client";

import { MinusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import Notification from "@/components/Toast";
import { useRouter } from "next/navigation";

const DelCollectButton = ({ anime_mal_id, user_email }) => {
  const [isDel, setIsDel] = useState(false);

  const router = useRouter();

  const handleDelColl = async () => {
    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "DELETE",
      body: JSON.stringify(data)
    });

    //* client side
    if (response.status === 200) {
      setIsDel(true);
      setTimeout(() => {
        router.refresh();
      }, 4000);
    }

    //! for server side
    if (response.ok) {
      console.log(response.statusText);
    } else {
      console.error(response);
    }
  };

  return (
    <>
      <>
        {isDel && <Notification message={"Remove From Favorite"} />}
        <div>
          <button
            onClick={handleDelColl}
            className="flex flex-wrap items-center justify-center gap-2 p-2 m-3 transition-all rounded-md hover:text-color-primary bg-color-accent hover:bg-color-alter">
            <span className="font-bold">
              <MinusCircle size={20} />
            </span>
            Remove
          </button>
        </div>
      </>
    </>
  );
};

export default DelCollectButton;
