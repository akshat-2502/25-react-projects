import MenuList from "./menu-list";
import "./styles.css";

export default function TreeView({ menus = [] }) {
  return (
    <div>
      <h1 className="flex justify-center text-5xl mt-28">Tree View UI</h1>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
    </div>
  );
}
