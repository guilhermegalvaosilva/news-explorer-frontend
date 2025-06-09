import "./MainComponent.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import NewsCardList from "../NewsCardList/NewsCardList";

function MainComponent({
  handleSaveArticle,
  savedArticles,
  isLoggedIn,
  filteredArticles,
  isLoading,
  searchQuery,
  handleSearch,
}) {
  return (
    <main>
      <div className="main">
        <SearchForm handleSearch={handleSearch} />
      </div>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className="search-results-section">
          {filteredArticles.length > 0 ? (
            <NewsCardList
              articles={filteredArticles}
              handleSaveArticle={handleSaveArticle}
              savedArticles={savedArticles}
              isLoggedIn={isLoggedIn}
            />
          ) : (
            searchQuery && <NothingFound />
          )}
        </section>
      )}
      <About />
    </main>
  );
}

export default MainComponent;
