import "./App.css";
import Accordian from "./components/Accordian";
import ImageSlider from "./components/Image-Slider";
import LightDarkMode from "./components/Light-Dark-mode";
import LoadMoreButton from "./components/Load-More-Button";
import QRCodeGenerator from "./components/QR-CODE";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/Scroll-Indicator";
import StarRating from "./components/Star-Rating";
import TreeView from "./components/TreeView_Menu_UI";
import menus from "./components/TreeView_Menu_UI/data";

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

      {/* Load More Button */}
      <LoadMoreButton />

      {/* Tree view Component / menu ui component / recursive navigation menu */}
      <TreeView menus={menus} />

      {/* QR Code Generator */}
      <QRCodeGenerator />

      {/* Set Theme Dark or Light */}
      <LightDarkMode />

      {/* Scroll Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
