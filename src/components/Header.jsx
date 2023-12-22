import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/react.svg";
export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="react-logo" />
      <div className="info">
        <h3 className="user-name">Rahem Diaa eddine</h3>
        <p className="job-name">Junior Front end developer</p>
      </div>
      <div className="buttons">
        <button className="email-button">
          <a href="mailto:diaa.rahem@univ-constantine2.dz">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            Email
          </a>
        </button>
        <button className="linkedin-button">
          <a href="https://www.linkedin.com/in/dhiaa-rahem-37610a244/">
            <FontAwesomeIcon icon={faLinkedin} alt="" className="icon" />
            Linkedin
          </a>
        </button>
      </div>
    </header>
  );
}
