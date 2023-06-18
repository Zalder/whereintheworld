import classes from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.topBar}>
          <h1>Where in the world?</h1>
          <a href="#">
            <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
            &nbsp;&nbsp;Dark Mode
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
