import { ShoeType } from "../types";
import Card from "./Card";

type CardListType = {
  shoeList: ShoeType[];
};

function NewArrivalsSection({ shoeList }: CardListType) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <h1 className="text-4xl font-extrabold bg-[url('./assets/lines.png')] bg-center">
          NEW ARRIVALS
        </h1>
      </div>
      <div
        className="justify-between mt-10 grid grid-cols-1 md:grid-cols-2 
        xl:grid-cols-[repeat(3,25%)] gap-y-24 gap-x-6"
      >
        {/* xl:grid-cols-[repeat(3,25%)] besides set the grid columns, can
         also set how much it will take on the screen each */}
        {shoeList.map((item) => (
          <Card key={item.id} shoe={item} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivalsSection;
