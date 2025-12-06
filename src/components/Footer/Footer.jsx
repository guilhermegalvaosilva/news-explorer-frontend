import { Link } from "react-router-dom";
import "./Footer.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin-logo.svg";

function Footer({}) {
  return (
    <footer className="footer">
      <p className="footer__api">© 2025 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__link-list">
          <li className="footer__link">
            <Link to="/" className="footer__home-link">
              Home
            </Link>
          </li>
          <li className="footer__link">
            <a
              className="footer__site"
              href="https://tripleten.com"
              target="_blank"
            >
              TripleTen
            </a>
          </li>
        </ul>
        <ul className="footer__icons">
          <li className="footer__icon">
            <a href="https://github.com/guilhermegalvaosilva" target="_blank">
              <img className="footer__git" src={github} alt="GitHub logo" />
            </a>
          </li>
          <li className="footer__icon">
            <a
              href="http://linkedin.com/in/guilhermegalvao-dev"
              target="_blank"
            >
              <img
                className="footer__linkedin"
                src={linkedin}
                alt="LinkedIn logo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
