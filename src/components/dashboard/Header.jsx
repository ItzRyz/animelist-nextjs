"use client";

import ButtonPath from "@/components/ButtonFunction/ButtonPath";
import { ArrowLeft } from "@phosphor-icons/react";

const Header = ({ title }) => {
  return (
    <div className="flex flex-col">
      <ButtonPath path={"/users/dashboard"} text={<ArrowLeft size={24} />} />
      <h3 className="mb-6 text-2xl font-bold text-center text-color-primary">{title}</h3>
    </div>
  );
};

export default Header;
