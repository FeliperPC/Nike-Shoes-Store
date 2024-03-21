import { SIDEBAR_IS_SHOWN } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { SideBarState, CartState } from "../types";
import CartItem from "./CartItem";

function Cart() {
  const isShown = useSelector(
    (state: SideBarState) => state.sideBarReducer.isShown
  );
  const rootState = useSelector((state: CartState) => state.cartReducer);

  const dispatch = useDispatch();
  return (
    <div
      className={`p-5 overflow-y-auto fixed right-0 z-50 top-0 bg-white h-full w-full md:w-[50%] xl:w-[35%]
      shadow-lg transition translate duration-300 dark:bg-night
      ${isShown ? "translate-x-0" : "translate-x-full"}
    `}
    >
      <h2 className="text-2xl font-bold mb-10 dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {rootState.shoeList.map((item) => (
          <li key={item.id}>
            <CartItem shoe={item} />
          </li>
        ))}
      </ul>
      <button
        className="absolute text-black font-bold p-2 top-4 right-4 dark:text-white"
        onClick={() => dispatch(SIDEBAR_IS_SHOWN)}
      >
        X
      </button>
      <div></div>
    </div>
  );
}

export default Cart;
