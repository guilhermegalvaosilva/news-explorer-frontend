import "./SavedArticles.css";
import React, { useContext } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";

const SavedArticles = ({ isLoggedIn, handleSaveArticle }) => {
  const { name, savedArticles } = useContext(CurrentUserContext);
  const location = useLocation();

  const isSavedNewsPage = location.pathname === "/saved-news";

  const keywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ];
  const keywordsText =
    keywords.length > 2
      ? `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} others`
      : keywords.join(", ");

  if (!isLoggedIn) {
    return <p>Please log in to view saved articles.</p>;
  }

  return (
    <div className="saved-articles">
      <div className="saved-articles__header">
        <h1 className="saved-articles__title">Saved articles</h1>
        <p className="saved-articles__description">
          {name}, you have {savedArticles?.length || 0} saved articles
        </p>
        <p className="saved-articles__keywords">
          By keywords: <strong>{keywordsText}</strong>
        </p>
      </div>

      <NewsCardList
        articles={savedArticles || []}
        isLoggedIn={isLoggedIn}
        isSavedNewsPage={isSavedNewsPage}
        handleSaveArticle={handleSaveArticle}
      />
    </div>
  );
};

export default SavedArticles;
