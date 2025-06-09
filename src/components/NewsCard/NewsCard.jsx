import "./NewsCard.css";
import React, { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function NewsCard({
  article,
  isSavedNewsPage,
  handleSaveArticle,
  isLoggedIn,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { removeSavedArticle } = useContext(CurrentUserContext);

  const [isSaved, setIsSaved] = useState(article.saved || false);

  const handleSave = () => {
    if (!isLoggedIn) {
      setIsHovered(true);
      return;
    }

    setIsSaved((prevState) => !prevState);

    handleSaveArticle({ id: article.id, isSaved: !isSaved });
  };

  const handleRemove = () => {
    removeSavedArticle(article.id);
  };

  const dateToString = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("default", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const handleMouseHoverTrash = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveTrash = () => {
    setIsHovered(false);
  };

  return (
    <li className="card">
      <div className="card__image-container">
        <img
          src={article.urlToImage || article.url}
          alt={article.title}
          className="card__image"
        />

        {!isSavedNewsPage && (
          <div
            className={`card__bookmark-container ${
              isSaved ? "card__bookmark-container_active" : ""
            }`}
            onMouseEnter={() => !isLoggedIn && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleSave}
          >
            <button
              className="card__bookmark-button"
              aria-label={isSaved ? "Unsave article" : "Save article"}
            />
            {!isLoggedIn && isHovered && (
              <span className="card__bookmark-tag">
                Sign in to save articles
              </span>
            )}
          </div>
        )}

        {isSavedNewsPage ? (
          <div
            className="card__trash-container"
            onMouseEnter={handleMouseHoverTrash}
            onMouseLeave={handleMouseLeaveTrash}
          >
            <button
              className="card__trash-button"
              aria-label="Remove article"
              onClick={handleRemove}
            />
            {isHovered && (
              <span className="card__trash-tag">Remove from saved</span>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>

      {isSavedNewsPage && (
        <span className="card__keyword">{article.keyword}</span>
      )}

      <div className="card__text-container">
        <p className="card__date">{dateToString}</p>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__description">{article.description}</p>
        <p className="card__source">
          {article.source?.name || "Unknown Source"}
        </p>
      </div>
    </li>
  );
}
