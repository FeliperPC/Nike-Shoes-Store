import { useDispatch, useSelector } from "react-redux";
// import { ShoeType } from "../types"
import { RootState } from "../types";
import { SIDEBAR_IS_SHOWN } from "../redux/actions";
import CartItem from "./CartItem";
import { SHOE_LIST } from "../data";

// type CardProps = {
//   shoe : ShoeType
// }
// {shoe}:CardProps

function SideBar() {
  const isShown = useSelector(
    (state: RootState) => state.sideBarReducer.isShown
  ); // reading state
  const dispatch = useDispatch();
  return (
    <div>
      {isShown && (
        <div className="translate transform z-60 h-full w-full fixed top-0 left-0 bg-black opacity-50" />
      )}
      <div
        className={`p-5 overflow-y-auto fixed right-0 z-50 top-0 bg-white h-full w-full md:w-[50%] xl:w-[35%]
      shadow-lg transition translate duration-300
      ${isShown ? "translate-x-0" : "translate-x-full"}
    `}
      >
        <h2 className="text-2xl font-bold mb-10">Cart</h2>
        <div className="space-y-4">
          <CartItem item={SHOE_LIST[0]}/>
          <CartItem item={SHOE_LIST[1]}/>
          <CartItem item={SHOE_LIST[2]}/>
          <CartItem item={SHOE_LIST[3]}/>
        </div>
        <button
          className="absolute text-black font-bold p-2 top-4 right-4"
          onClick={() => dispatch(SIDEBAR_IS_SHOWN)}
        >
          X
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default SideBar;
