"use client";

import { useState } from "react";
import Notification from "@/components/Toast";
import { useRouter } from "next/navigation";

const CommentSection = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [isComment, setIsComment] = useState("");
  const [isSend, setIsSend] = useState(false);

  const router = useRouter();

  const MAX_COMMENT_WORDS = 50;
  const handleInput = (e) => {
    const comment = e.target.value;
    const words = comment.trim().split(/\s+/);
    if (words.length <= MAX_COMMENT_WORDS) {
      setIsComment(comment);
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, username, comment: isComment, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data)
    });

    if (response.status === 200) {
      setIsSend(true);
      setTimeout(() => {
        setIsComment("");
        router.refresh();
      }, 4000);
    }

    if (response.ok) {
      console.log(response.statusText);
    } else {
      console.error(response);
    }
  };

  return (
    <>
      {isSend && <Notification message="Comment Add Successfully" />}
      <div className="flex flex-col items-center">
        <textarea
          onChange={handleInput}
          className="w-full h-32 p-4 m-2 text-xl"
          name="comment"
          id="comment"
          cols="30"
          rows="10"></textarea>
      </div>
      <div className="float-left mb-4">
        <button
          className="right-0 flex items-center justify-center w-32 p-2 transition-all bg-color-accent hover:bg-color-alter hover:text-color-primary"
          onClick={handlePost}>
          Send
        </button>
      </div>
    </>
  );
};

export default CommentSection;
