const Pagination = ({ page }) => {
  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?`);
    const data = await response.json();
    latsPage(data);
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-xl md:text-2xl text-color-primary">
      <button className="transition-all hover:text-color-accent">Prev</button>
      <p>{page} of 1065</p>
      <button className="transition-all hover:text-color-accent">Next</button>
    </div>
  );
};

export default Pagination;
