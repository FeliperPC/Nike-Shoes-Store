import { SIDEBAR_IS_SHOWN } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { SideBarState, CartState } from "../types";
import CartItem from "./CartItem";

function Cart() {
  
  const isShown = useSelector(
    (state: SideBarState) => state.sideBarReducer.isShown)
  const rootState = useSelector((state:CartState)=>state.cartReducer)
  console.log(rootState);
  
  const dispatch = useDispatch()
  return (
    <div
      className={`p-5 overflow-y-auto fixed right-0 z-50 top-0 bg-white h-full w-full md:w-[50%] xl:w-[35%]
      shadow-lg transition translate duration-300
      ${isShown ? "translate-x-0" : "translate-x-full"}
    `}
    >
      <h2 className="text-2xl font-bold mb-10">Cart</h2>
      <div className="space-y-4">
        {rootState.shoeList.map((item)=><CartItem shoe={item}/>)}
      </div>
      <button
        className="absolute text-black font-bold p-2 top-4 right-4"
        onClick={() => dispatch(SIDEBAR_IS_SHOWN)}
      >
        X
      </button>
      <div></div>
    </div>
  );
}

export default Cart