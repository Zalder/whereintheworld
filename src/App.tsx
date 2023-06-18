import classes from "./App.module.scss";

function App() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.topBar}>
          <h1>Where in the world?</h1>
          <a href="#">Dark Mode</a>
        </div>
      </div>
    </>
  );
}

export default App;
