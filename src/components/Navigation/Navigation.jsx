import "./Navigation.css";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logoutwhite from "../../assets/logout-white.svg";
import logoutblack from "../../assets/logout-black.svg";

function Navigation({ openLoginModal, isLoggedIn, handleLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  const toggleMobileMenu = () => {
    setIsOpen((open) => !open);
  };

  const onClose = () => {
    setIsOpen(!open);
  };

  return (
    <nav className={`nav ${isOpen ? "is-open" : ""}`}>
      <button
        className={`nav__icon-menu ${isOpen ? `is-active` : ""} ${
          isSavedNewsPage ? "nav__icon-menu-saved" : ""
        }`}
        type="button"
        onClick={toggleMobileMenu}
      >
        <div className={`nav__icon-menu-div ${isOpen ? `is-active` : ""}`} />
        <div className={`nav__icon-menu-div ${isOpen ? `is-active` : ""}`} />
      </button>

      <div className={`nav__content ${isOpen ? `is-open` : ""} `}>
        <Link
          to="/"
          className={`nav__home-link ${isOpen ? `is-open` : ""} ${
            location.pathname === "/" ? "nav__home-link-home" : ""
          }`}
        >
          <p className="nav__home">NewsExplorer</p>
        </Link>
        <Link
          to="/"
          className={`nav__home-link ${isOpen ? `is-open` : ""} ${
            location.pathname === "/" ? "nav__home-link-home" : ""
          }`}
          onClick={onClose}
        >
          Home
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/saved-news"
              className={`nav__articles ${isOpen ? `is-open` : ""} ${
                isSavedNewsPage ? "nav__articles-saved" : "nav__articles-home"
              }`}
              onClick={onClose}
            >
              Saved Articles
            </Link>
            <button
              type="button"
              className={`nav__logout ${isOpen ? `is-open` : ""} ${
                isSavedNewsPage ? "nav__logout-saved" : "nav__logout-home"
              }`}
              onClick={handleLogout}
            >
              {currentUser?.name || "Gui"}
              <img
                src={isSavedNewsPage ? logoutblack : logoutwhite}
                className={`nav__logout-icon ${isOpen ? `is-open` : ""} ${
                  isSavedNewsPage ? "nav__logout-icon-saved" : ""
                }`}
                alt="Logout"
              />
            </button>
          </>
        ) : (
          <button
            className="nav__signin-btn"
            type="button"
            onClick={openLoginModal}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}
export default Navigation;
