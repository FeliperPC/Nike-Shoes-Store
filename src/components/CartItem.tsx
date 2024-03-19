import { ShoeType } from "../types";

type ItemProps = {
  item: ShoeType;
};

function CartItem({ item }: ItemProps) {
  return (
    <div className="flex p-2 cursor-pointer hover:bg-[#DAFFA2] bg-gray-50 space-x-2">
      <img className="h-24" src={item.src} />
      <div className="flex-wrap space-y-2">
        <h2 className="font-bold">{item.title}</h2>
        <p className="text-sm text-gray-400">{item.description}</p>
      </div>
      <h1 className="font-bold">{item.price}$</h1>
    </div>
  );
}

export default CartItem;
