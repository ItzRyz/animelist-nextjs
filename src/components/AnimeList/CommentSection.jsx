"use client";

import { useState } from "react";
import Notification from "@/components/Toast";

const CommentSection = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [isComment, setIsComment] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [reload, setReload] = useState(false);

  const handleInput = (e) => {
    setIsComment(e.target.value);
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
      setReload(true);
    }

    if (response.ok) {
      console.log(response.statusText);
    } else {
      console.error(response);
    }
  };

  if (reload) {
    setTimeout(() => {
      window.location.reload(true);
      setReload(false);
    }, 2000);
  }

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
