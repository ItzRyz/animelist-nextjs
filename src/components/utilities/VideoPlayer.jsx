"use client";

import { X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState();

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    height: "240",
    width: "320"
  };

  const Player = () => {
    return (
      <div className="fixed transition-all bottom-2 right-2 ">
        <div>
          <button
            onClick={handleVideoPlayer}
            className="float-right px-3 py-1 mb-1 transition-all rounded-md text-color-primary bg-color-secondary hover:bg-color-accent">
            <X size={28} />
          </button>
        </div>
        <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} />
      </div>
    );
  };

  const buttonOpenTrailer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed p-3 transition-all rounded-md bottom-5 right-5 text-color-primary bg-color-secondary hover:bg-color-accent sm:text-xl">
        Watch Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : buttonOpenTrailer();
};

export default VideoPlayer;
