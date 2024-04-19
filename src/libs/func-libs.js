export const generateRecommendation = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap));
  const last = first + gap;
  const response = {
    data: data.slice(first, last)
  };

  return response;
};

let storedRecommendation = null;
let lastGeneratedTimestamp = null;

export const saveLastRecommendation = (recommendation) => {
  storedRecommendation = recommendation;
  lastGeneratedTimestamp = Date.now();
};

export const getLastRecommendation = () => {
  return storedRecommendation;
};

export const oneWeek = () => {
  if (lastGeneratedTimestamp) {
    const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
    return Date.now() - lastGeneratedTimestamp >= oneWeekMs;
  }
  return true;
};
