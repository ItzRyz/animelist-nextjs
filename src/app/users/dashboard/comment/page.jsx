import Header from "@/components/dashboard/Header";
import { authSession } from "@/libs/auth-libs";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const page = async () => {
  const prisma = new PrismaClient();
  const user = await authSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.user_email }
  });

  return (
    <>
      <section>
        <Header title={"My Comment"} />
        <div className="grid grid-cols-1 gap-4 m-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="p-4 overflow-hidden transition-all bg-white cursor-pointer text-color-dark group hover:scale-105">
                <Link href={`/anime/${comment.anime_mal_id}`}>
                  <p className="text-lg font-bold">{comment.anime_title}</p>
                  <p className="mt-1 font-bold ">{comment.username}</p>
                  <p className="italic">{comment.comment}</p>
                </Link>
              </div>
            );
          })}
        </div>
        ;
      </section>
    </>
  );
};

export default page;
