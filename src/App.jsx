import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <div className="section">
          <Header />
          <Main />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
