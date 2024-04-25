"use client";

import { useState, useEffect } from "react";

const CommentSection = () => {
  const [comment, setComment] = useState("");

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePost = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <textarea
          onChange={handleInput}
          className="w-full h-32 m-2"
          name="comment"
          id="comment"
          cols="30"
          rows="10"></textarea>
      </div>
      <div className="float-left">
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
