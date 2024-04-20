import React, { useState, useEffect } from "react";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";

const ButtonUpWheel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsVisible(scrollTop > windowHeight * 4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setIsDown(true);
      const timeout = setTimeout(() => {
        setIsDown(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return (
    <>
      {isVisible && (
        <div className={`fixed z-10 bottom-4 right-4 ${isDown ? "animate-pop-up" : ""}`}>
          <div className="p-2 transition-all rounded-md text-color-primary bg-color-secondary hover:bg-color-accent">
            <button className="flex items-center justify-center" onClick={scrollTop}>
              <ArrowUp size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonUpWheel;
