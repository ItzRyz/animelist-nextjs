"use client";

import React, { useState } from "react";

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed z-50 flex items-center justify-center p-4 bg-white border border-gray-300 rounded top-4 right-4">
      <button
        className="float-left px-3 py-1 text-white transition-all rounded bg-color-accent hover:bg-color-alter"
        onClick={onClose}>
        OK
      </button>
      <div className="px-2 ">
        <span className="">{message}</span>
      </div>
    </div>
  );
};

const CommentSection = ({ anime_mal_id, user_email, username }) => {
  const [isComment, setIsComment] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [reload, setReload] = useState(false);

  const handleInput = (e) => {
    setIsComment(e.target.value);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, username, comment: isComment };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data)
    });

    if (response.status === 200) {
      setIsSend(true);
      setShowAlert(true);
    }

    if (response.ok) {
      console.log(response.statusText);
    } else {
      console.error(response);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    if (isSend) {
      setReload(true);
    }
  };

  if (reload) {
    window.location.reload(true);
    setReload(false);
  }

  return (
    <>
      {showAlert && <Notification message="Comment Add Successfully" onClose={handleAlertClose} />}
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
          className="right-0 flex items-center justify-center w-32 p-2 transition-all bg-color-accent hover:bg-color-alter hover:text-white"
          onClick={handlePost}>
          Send
        </button>
      </div>
    </>
  );
};

export default CommentSection;
