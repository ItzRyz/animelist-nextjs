import { PrismaClient } from "@prisma/client";

const CommentBox = async ({ anime_mal_id }) => {
  const prisma = new PrismaClient();
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id }
  });

  return (
    <>
      {comments.length > 0 && (
        <>
          <h3 className="mb-2 text-xl text-color-primary">Comment Section :</h3>
          <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {comments.map((comment) => (
              <div key={comment.id} className="p-4 bg-white text-color-dark">
                <p className="font-bold text-md">{comment.username}</p>
                <p className="italic">{comment.comment}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CommentBox;
