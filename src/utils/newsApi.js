import { handleServerResponse, APIkey } from "./constants";
const currentDate = new Date();
const currentDateString = currentDate.toLocaleDateString("sv-SE");
const lastWeekDateString = new Date(
  currentDate.getTime() - 7 * 24 * 60 * 60 * 1000,
).toLocaleDateString("sv-SE");

export const fetchNewsArticles = (keyword) => {
  return fetch(
    `https://nomoreparties.co/news/v2/everything?q=${keyword}&from=${lastWeekDateString}&to=${currentDateString}&sortBy=popularity&pageSize=100&apiKey=${APIkey}`,
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch news articles.");
      }
      return res.json();
    })
    .then((data) => data.articles)
    .catch((err) => {
      console.error("Fetch error:", err);
      throw new Error("An error occurred while fetching news articles");
    });
};
