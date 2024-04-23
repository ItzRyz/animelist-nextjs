"use client";

import Link from "next/link";

const ButtonPath = ({ path, text }) => {
  return (
    <div className="my-2 mb-10 ml-3">
      <div className="float-left px-3 py-2 mt-2 ml-3 transition-all rounded-md text-color-primary bg-color-secondary hover:bg-color-accent">
        <Link href={path}>{text}</Link>
      </div>
    </div>
  );
};

export default ButtonPath;
