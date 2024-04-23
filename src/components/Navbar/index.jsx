import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionBtn from "./UserActionBtn";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col items-center justify-between gap-2 p-4 md:flex-row md:w-full">
        <Link
          href="/"
          className="text-2xl font-bold transition-all text-color-dark hover:text-color-primary">
          ANIMELIST
        </Link>
        <InputSearch />
        <UserActionBtn />
      </div>
    </header>
  );
};

export default Navbar;
