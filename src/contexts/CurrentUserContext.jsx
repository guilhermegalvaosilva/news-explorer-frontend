import React, { useState } from "react";
import { savedArticles as initialSavedArticles } from "../utils/constants";

const CurrentUserContext = React.createContext();

export { CurrentUserContext };

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: " Guilherme",
    savedArticles: initialSavedArticles,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const removeSavedArticle = (id) => {
    setCurrentUser((prev) => ({
      ...prev,
      savedArticles: prev.savedArticles.filter((article) => article.id !== id),
    }));
  };

  return (
    <CurrentUserContext.Provider
      value={{
        ...currentUser,
        isLoggedIn,
        removeSavedArticle,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
