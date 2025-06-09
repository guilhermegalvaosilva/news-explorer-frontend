import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";
import { fetchNewsArticles } from "../../utils/newsApi";
import CurrentUserProvider from "../../contexts/CurrentUserContext";
import "./App.css";
import Header from "../Header/Header";
import MainComponent from "../MainComponent/MainComponent";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterConfirmationModal from "../RegisterConfirmationModal/RegisterConfirmationModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedArticles from "../SavedArticles/SavedArticles";
import auth from "../../utils/auth";
import api from "../../utils/api";

function App() {
  //States
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //Modal open and close
  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openRegisterModal = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  //login logout register

  const handleLogin = (email, password) => {
    auth
      .login({ email, password })
      .then((res) => {
        console.log(res);
        if (res) {
          localStorage.setItem("token", res);

          auth.checkToken(res).then((data) => {
            setCurrentUser(data.user);
            setIsLoggedIn(true);
            closeActiveModal();
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    console.log("clicking");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  const handleRegistration = (name, email, password) => {
    auth
      .createUser({ name, email, password })
      .then((res) => {
        console.log(res);

        setActiveModal("register-confirm");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //search
  const handleSearch = (keyword) => {
    setSearchQuery(keyword);

    if (!keyword) {
      setFilteredArticles([]);
      return;
    }

    setIsLoading(true);

    fetchNewsArticles(keyword)
      .then((articles) => {
        const articlesWithIds = articles.map((article) => ({
          ...article,
          id: article.id,
        }));
        setFilteredArticles(articlesWithIds);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setFilteredArticles([]);
      })
      .finally(() => {
        setIsLoading(false);
      }, 1500);
  };

  //save
  const handleSaveArticle = ({ id, isSaved }) => {
    const token = localStorage.getItem("token");

    if (!isSaved) {
      auth
        .saveArticleItem(id, token)
        .then((res) => {
          setSavedArticles((prev) => [...prev, { id, ...res.data }]);
        })
        .catch((err) => console.error("Error saving article:", err));
    } else {
      auth
        .unsaveArticleItem(id, token)
        .then(() => {
          setSavedArticles((prev) =>
            prev.filter((article) => article.id !== id),
          );
        })
        .catch((err) => console.error("Error unsaving article:", err));
    }
  };

  //Effects
  useEffect(() => {
    function handleCloseMethods(evt) {
      if (evt.key === "Escape" || evt.key === "esc" || evt.keyCode === 27) {
        closeActiveModal();
      }

      if (evt.type === "click" && evt.target.classList.contains("modal")) {
        closeActiveModal();
      }
    }

    if (activeModal !== "") {
      document.addEventListener("keydown", handleCloseMethods);
      document.addEventListener("click", handleCloseMethods);
    }

    return () => {
      document.removeEventListener("keydown", handleCloseMethods);
      document.removeEventListener("click", handleCloseMethods);
    };
  }, [activeModal]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          console.log("Token valid:", res.data);
          setCurrentUser(res.data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Token invalid or expired:", error);
          setIsLoggedIn(false);
          localStorage.removeItem("token");
        });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .getSavedArticles(token)
        .then((data) => setSavedArticles(data.articles || []))
        .catch((err) => console.error("Failed to fetch saved articles:", err));
    }
  }, []);

  return (
    <CurrentUserProvider isLoggedIn={isLoggedIn} value={{ currentUser }}>
      <div className="page">
        <div className="page__content">
          <Header
            openLoginModal={openLoginModal}
            handleLogout={handleLogout}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <MainComponent
                  isLoading={isLoading}
                  searchQuery={searchQuery}
                  handleSaveArticle={handleSaveArticle}
                  savedArticles={savedArticles}
                  isLoggedIn={isLoggedIn}
                  handleSearch={handleSearch}
                  filteredArticles={filteredArticles}
                />
              }
            />

            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedArticles
                    handleSaveArticle={handleSaveArticle}
                    isLoggedIn={isLoggedIn}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />
        </div>
        <LoginModal
          isOpen={activeModal === "login"}
          buttonText={"Sign in"}
          onClose={closeActiveModal}
          openRegisterModal={openRegisterModal}
          handleLogin={handleLogin}
        />
        <RegisterModal
          isOpen={activeModal === "register"}
          buttonText={"Sign up"}
          onClose={closeActiveModal}
          openLoginModal={openLoginModal}
          handleRegistration={handleRegistration}
        />

        <RegisterConfirmationModal
          isOpen={activeModal === "register-confirm"}
          onClose={closeActiveModal}
          openLoginModal={openLoginModal}
        />
      </div>
    </CurrentUserProvider>
  );
}

export default App;
