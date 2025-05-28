import "./App.css";
import Accordian from "./components/Accordian";
import ModalTest from "./components/custom-modal/modal-test";
import GithubProfileFinder from "./components/Github-Profile-Finder";
import ImageSlider from "./components/Image-Slider";
import LightDarkMode from "./components/Light-Dark-mode";
import LoadMoreButton from "./components/Load-More-Button";
import QRCodeGenerator from "./components/QR-CODE";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/Scroll-Indicator";
import SearchAutocomplete from "./components/Search-Autocomplete";
import StarRating from "./components/Star-Rating";
import TabTest from "./components/Tabs/tabs-test";
import TicTacToe from "./components/Tic-Tac-Toe";
import TreeView from "./components/TreeView_Menu_UI";
import menus from "./components/TreeView_Menu_UI/data";
import UseFetchHookTest from "./components/Use-Fetch-Custom-Hooks/test";
import UseOnClickOutsideTest from "./components/Use-outside-Click/test";

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

      {/* Custom Tab Component */}
      <TabTest />

      {/* Custom Modal Component */}
      <ModalTest />

      {/* GitHub Profile Finder */}
      <GithubProfileFinder />

      {/* Autocomplete Search Bar */}
      <SearchAutocomplete />

      {/* Tic Tac Toe */}
      <TicTacToe />

      {/* Custom UseFetch Hook */}
      <UseFetchHookTest />

      {/* On Clcik Outside */}
      <UseOnClickOutsideTest />
    </div>
  );
}

export default App;
