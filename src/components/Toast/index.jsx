import { useState, useEffect } from "react";

const Notification = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // Menutup toast setelah 3 detik

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="fixed z-50 flex items-center justify-center p-4 bg-white border border-gray-300 rounded top-4 right-4">
          <div className="flex items-center justify-center w-full gap-2 ">
            <button
              className="float-left px-3 py-1 text-white rounded bg-color-accent hover:bg-color-alter"
              onClick={handleClose}>
              OK
            </button>
            <span className="float-right">{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
