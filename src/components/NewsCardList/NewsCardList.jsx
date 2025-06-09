import "./NewsCardList.css";
import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCardList({
  articles,
  isLoggedIn,
  savedArticles,
  handleSaveArticle,
  isSavedNewsPage,
}) {
  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreItems = () => {
    setVisibleCards(visibleCards + 3);
  };

  return (
    <section
      className={`news-card-list ${
        isSavedNewsPage ? "news-card-list-saved" : "news-card-list-home"
      }`}
    >
      {!isSavedNewsPage && (
        <h2 className="news-card-list__title">Search results</h2>
      )}
      {articles.length === 0 ? null : (
        <ul
          className={`news-card-list__articles ${
            isSavedNewsPage
              ? "news-card-list__articles-saved"
              : "news-card-list__articles-home"
          }`}
        >
          {articles.slice(0, visibleCards).map((article, index) => (
            <NewsCard
              key={article.id || index}
              article={article}
              id={article.id}
              url={article.url}
              title={article.title}
              author={article.author}
              source={article.source}
              isLoggedIn={isLoggedIn}
              isSavedNewsPage={isSavedNewsPage}
              handleSaveArticle={handleSaveArticle}
              savedArticles={savedArticles || []}
            />
          ))}
        </ul>
      )}
      {visibleCards < articles.length && (
        <button
          className={`news-card-list__button 
        ${isSavedNewsPage ? "news-card-list__button-saved" : ""}`}
          onClick={showMoreItems}
        >
          Show more
        </button>
      )}
    </section>
  );
}
