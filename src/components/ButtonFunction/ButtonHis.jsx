"use client";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const ButtonHis = () => {
  const router = useRouter();

  return (
    <div className="m-2">
      <button
        onClick={() => router.back()}
        className="p-2 px-3 text-xl transition-all rounded-md bg-color-secondary md:text-xl text-color-primary hover:bg-color-accent">
        <ArrowLeft />
      </button>
    </div>
  );
};

export default ButtonHis;
