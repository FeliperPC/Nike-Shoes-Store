import Select from "./Select";
import { QTY, SIZES } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../redux/actions";
import { PreviewState } from "../types";
import { useEffect, useState } from "react";

function ShoeDetail() {
  const [errorAddToCart,setErrorAddToCart] = useState(false)
  const dispatch = useDispatch();
  const rootState = useSelector(
    (state: PreviewState) => state.previewReducer.shoe
  );
  function handleClick() {
    if(rootState.qty!==0&& rootState.size!==0){
      dispatch(ADD_TO_CART(rootState))
      setErrorAddToCart(false)
    } else {
      setErrorAddToCart(true)
    }
  }
  useEffect(()=>{setErrorAddToCart(false)},[rootState])
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
      {/* Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={rootState.src} className="animate-float" />
        </div>
      </div>
      {/* Description */}
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-black md:text-9xl">{rootState.title}</h1>
        <p className="font-medium md:text-xl">{rootState.description}</p>
        <div className="flex space-x-6">
          <h2 className="text-3xl font-extrabold md:text-6xl">
            {rootState.price}
          </h2>
          <Select options={QTY} title={"QTY"} />
          <Select options={SIZES} title={"SIZES"} />
        </div>
        {errorAddToCart && <p className="text-red-600"> You must choose a SIZE and QUANTITY</p>}
        {/* buttoms and links */}
        <div className="space-x-10">
          <button
            className="w-44 h-14 bg-black text-white hover:bg-gray-900 active:bg-gray-700 btn-press-animation dark:bg-white dark:text-night"
            onClick={handleClick}
          >
            Add to chart
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShoeDetail;
