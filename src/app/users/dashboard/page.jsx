import { authSession } from "@/libs/auth-libs";
import Image from "next/image";

const Page = async () => {
  const user = await authSession();
  return (
    <div className="text-color-primary">
      <h3>GITHUB</h3>
      <h5>Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={280} height={280} />
    </div>
  );
};

export default Page;
