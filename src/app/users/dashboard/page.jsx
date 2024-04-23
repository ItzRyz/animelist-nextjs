import { authSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authSession();

  return (
    <div className="flex flex-col items-center mt-8 text-color-primary">
      <h5 className="p-3 text-2xl font-bold shadow-md">Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={240} height={240} className="rounded-md" />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href={"/users/dashboard/collection"}
          className="w-32 p-2 font-bold text-center transition-all rounded-sm text-md bg-color-accent text-color-dark hover:text-color-primary ">
          My Collection
        </Link>
        <Link
          href={"/users/dashboard/comment"}
          className="w-32 p-2 font-bold text-center transition-all rounded-sm text-md bg-color-accent text-color-dark hover:text-color-primary">
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
