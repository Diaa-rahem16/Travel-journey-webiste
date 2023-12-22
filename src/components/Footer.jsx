import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Diaa-rahem16?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/dhiaa-rahem-37610a244/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="footer--icon" />
      </a>
    </footer>
  );
}
