import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../data";
import { ProductProps } from "../types";
import { useDispatch } from "react-redux";
import { RM_FROM_CART } from "../redux/actions";

function CartItem({ shoe }: ProductProps) {
  const dispatch = useDispatch();
  return (
    <div className="cursor-pointer hover:bg-[#DAFFA2] bg-gray-50 py-2 dark:bg-transparent dark:hover:bg-night-50">
      <div className="flex p-2 space-x-2 dark:text-white">
        <img className="h-24" src={shoe.src} />
        <div className="flex-wrap space-y-2">
          <h2 className="font-bold">{shoe.title}</h2>
          <p className="text-sm text-gray-400">{shoe.description}</p>
        </div>
        <h1 className="font-bold">{shoe.price}$</h1>
      </div>
      <div className="flex justify-between pl-32 mb-2">
        <div className="flex space-x-6 dark:text-white">
          <label className="font-semibold">
            QTY
            <Select options={QTY} title={shoe.qty.toString()} className={"p-1 w-16"} />
          </label>
          <label className="font-semibold">
            SIZE
            <Select options={SIZES} title={shoe.size.toString()} className={"p-1 w-16"} />
          </label>
        </div>
        <button onClick={() => dispatch(RM_FROM_CART(shoe))}>
          <CiTrash className="text-black mr-2 dark:text-white" size={25} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
