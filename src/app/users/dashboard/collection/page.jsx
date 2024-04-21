import Header from "@/components/dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <Header title={"My Collection"} />
      <div className="grid grid-cols-2 gap-3 mx-2 sm:grid-cols-3 lg:grid-cols-6">
        <Link href={"/"} className="relative border-2 border-color-accent">
          <Image src={""} alt="" width={350} height={350} className="w-full" />
          <div className="absolute bottom-0 flex items-center justify-center w-full h-10 bg-color-accent">
            <h5 className="text-lg text-center md:text-xl">Judul Anime</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative border-2 border-color-accent">
          <Image src={""} alt="" width={350} height={350} className="w-full" />
          <div className="absolute bottom-0 flex items-center justify-center w-full h-10 bg-color-accent">
            <h5 className="text-lg text-center md:text-xl">Judul Anime</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative border-2 border-color-accent">
          <Image src={""} alt="" width={350} height={350} className="w-full" />
          <div className="absolute bottom-0 flex items-center justify-center w-full h-10 bg-color-accent">
            <h5 className="text-lg text-center md:text-xl">Judul Anime</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative border-2 border-color-accent">
          <Image src={""} alt="" width={350} height={350} className="w-full" />
          <div className="absolute bottom-0 flex items-center justify-center w-full h-10 bg-color-accent">
            <h5 className="text-lg text-center lg:text-xl">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
