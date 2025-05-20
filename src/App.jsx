import "./App.css";
import Accordian from "./components/Accordian";
import ImageSlider from "./components/Image-Slider";
import RandomColor from "./components/random-color";
import StarRating from "./components/Star-Rating";

function App() {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordian />

      {/* Random BG Color */}
      <RandomColor />

      {/* Star Rating */}
      <StarRating noOfStar={10} />

      {/* Image Slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}

export default App;
