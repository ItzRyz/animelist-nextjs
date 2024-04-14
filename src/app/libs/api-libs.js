export const getAnimeResponse = async (resource, query) => {
  const response = fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const anime = (await response).json();
  return anime;
};
