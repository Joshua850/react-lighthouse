import "./App.css";
import MovingCircle from "./movingCircle";

function App() {
  return (
    <div className="App">
      <div className="sky"></div>
      <header className="App-header">
        <div class="pole"></div>
        <div className="flag"></div>
        {<MovingCircle />}
        <div className="cylinder"></div>
        <div className="cylinder2"></div>
        <div className="cylinder"></div>
        <div className="cylinder2"></div>

        <div className="bottom"></div>
        <div class="grass"></div>
      </header>
    </div>
  );
}

export default App;
