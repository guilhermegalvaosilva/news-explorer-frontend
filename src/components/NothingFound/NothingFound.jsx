import "./NothingFound.css";
import NothingFoundImage from "../../assets/nothing-found.svg";

const NothingFound = () => (
  <div className="nothing-found">
    <img
      src={NothingFoundImage}
      className="nothing-found__image"
      alt="Nothing found"
    />
    <div className="nothing-found__title"> Nothing Found </div>
    <span className="nothing-found__description">
      Sorry, but nothing matched your search terms.
    </span>
  </div>
);

export default NothingFound;
