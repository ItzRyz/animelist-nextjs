import {
  generateRecommendation,
  getLastRecommendation,
  saveLastRecommendation,
  oneWeek
} from "@/libs/func-libs";

export const getAnimeResponse = async (resource, query) => {
  const response = fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const anime = (await response).json();
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProp) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[objectProp]);
};

export const reproduce = (data, gap) => {
  if (oneWeek()) {
    const recommendation = generateRecommendation(data, gap);
    saveLastRecommendation(recommendation);
    return recommendation;
  } else {
    const lastRecommendation = getLastRecommendation();
    if (lastRecommendation) {
      return lastRecommendation;
    } else {
      return generateRecommendation(data, gap);
    }
  }
};
