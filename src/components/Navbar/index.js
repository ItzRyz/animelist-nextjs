import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500 ">
      <div className="flex flex-col justify-between gap-2 p-4 md:flex-row">
        <Link href="/" className="text-2xl font-bold text-white">
          ANIMELIST
        </Link>
        <input placeholder="Search Anime.." className="" />
      </div>
    </header>
  );
};

export default Navbar;
