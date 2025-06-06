import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import React, { useState, useContext } from "react";
import Navigation from "../Navigation/Navigation";

function Header({ openLoginModal, isLoggedIn, handleLogout }) {
  const location = useLocation();

  return (
    <div className="header__container">
      <header
        className={`header ${location.pathname === "/saved-news" ? "header--saved" : ""}`}
      >
        <Link
          to="/"
          className={`header__title-link ${location.pathname === "/" ? "header__title-link-home" : ""}`}
        >
          <p className="header__title">NewsExplorer</p>
        </Link>
        <Navigation
          openLoginModal={openLoginModal}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      </header>
    </div>
  );
}

export default Header;
