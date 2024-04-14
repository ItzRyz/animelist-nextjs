const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-xl md:text-2xl text-color-primary">
      <button className="transition-all hover:text-color-accent" onClick={handlePrevPage}>
        &lt;Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button className="transition-all hover:text-color-accent" onClick={handleNextPage}>
        Next&gt;
      </button>
    </div>
  );
};

export default Pagination;
