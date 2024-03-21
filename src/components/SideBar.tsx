import { useSelector } from "react-redux";
import { SideBarState } from "../types";
import Cart from "./Cart";

function SideBar() {
  const isShown = useSelector(
    (state: SideBarState) => state.sideBarReducer.isShown
  ); // reading state
  return (
    <div>
      {isShown && (
        <div className="translate transform z-60 h-full w-full fixed top-0 left-0 bg-black opacity-50" />
      )}
      <Cart />
    </div>
  );
}

export default SideBar;
