import { useEffect, useState } from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  const [prevDisable, setPrevDisable] = useState(true);
  const [nextDisable, setNextDisable] = useState(false);

  useEffect(() => {
    setPrevDisable(page === 1);
    setNextDisable(page === lastPage);
  }, [page, lastPage]);

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleFirstPage = () => {
    setPage(1);
    scrollTop();
  };

  const handleLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-xl md:text-2xl text-color-primary">
      <button
        className={`transition-all hover:text-color-accent ${
          prevDisable ? "text-gray-500 cursor-not-allowed" : ""
        }`}
        onClick={handleFirstPage}
        disabled={prevDisable}>
        &lt;&lt;
      </button>
      <button
        className={`transition-all hover:text-color-accent ${
          prevDisable ? "text-gray-500 cursor-not-allowed" : ""
        }`}
        onClick={handlePrevPage}
        disabled={prevDisable}>
        &lt;Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        className={`transition-all hover:text-color-accent ${
          nextDisable ? "text-gray-500 cursor-not-allowed" : ""
        }`}
        onClick={handleNextPage}
        disabled={nextDisable}>
        Next&gt;
      </button>
      <button
        className={`transition-all hover:text-color-accent ${
          nextDisable ? "text-gray-500 cursor-not-allowed" : ""
        }`}
        onClick={handleLastPage}
        disabled={nextDisable}>
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
