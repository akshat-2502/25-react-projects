import "./App.css";
import Accordian from "./components/Accordian";
import RandomColor from "./components/random-color";

function App() {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordian />

      {/* Random BG Color */}
      <RandomColor />
    </div>
  );
}

export default App;
