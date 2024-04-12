import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-indigo-500 ">
      <div className="flex flex-col items-center justify-between gap-2 p-4 md:flex-row">
        <Link href="/" className="text-2xl font-bold text-white">
          ANIMELIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
