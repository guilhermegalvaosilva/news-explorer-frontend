import { BASE_URL } from "./constants";

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token", email, password });
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example,com", _id: "fake-id" },
    });
  });
};

export const createUser = ({ name, avatar, email, password }) => {
  const url = `${BASE_URL}/signup`;
  console.log(`Making a request to ${url}`);
  return Promise.resolve({
    data: { name, avatar, email, password },
  });
};

export const saveArticleItem = (id, token) => {
  const url = `${BASE_URL}/savedArticles`;
  console.log(`Fetching saved articles from ${url}`);
  return Promise.resolve({
    data: { id, saved: true },
  });
};

export const unsaveArticleItem = (id, token) => {
  const url = `${BASE_URL}/savedArticles`;
  console.log(`Fetching saved articles from ${url}`);
  return Promise.resolve({
    data: { id, saved: false },
  });
};

const auth = {
  login,
  checkToken,
  createUser,
  saveArticleItem,
  unsaveArticleItem,
};

export default auth;
