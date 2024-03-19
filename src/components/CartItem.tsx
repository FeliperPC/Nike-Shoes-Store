import { ShoeType } from "../types";
import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../data";


type ItemProps = {
  item: ShoeType;
};

function CartItem({ item }: ItemProps) {
  return (
    <div className="cursor-pointer hover:bg-[#DAFFA2] bg-gray-50">
      <div className="flex p-2 space-x-2">
        <img className="h-24" src={item.src} />
        <div className="flex-wrap space-y-2">
          <h2 className="font-bold">{item.title}</h2>
          <p className="text-sm text-gray-400">{item.description}</p>
        </div>
        <h1 className="font-bold">{item.price}$</h1>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <label>
            QTY
            <Select options={QTY} title="" className={'p-1 w-16'}/>
          </label>
          <label>
            QTY
            <Select options={SIZES} title="" className={'p-1 w-16'} />
          </label>
        </div>
        <button>
          <CiTrash className="text-black" size={25} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
