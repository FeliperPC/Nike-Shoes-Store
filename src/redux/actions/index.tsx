import { ShoeType, ShoeInfo } from "../../types";

const SIDEBAR_IS_SHOWN = {
  type: "SIDEBAR_IS_SHOWN",
};

const ADD_TO_CART = (product: ShoeType) => ({
  type: "ADD_TO_CART",
  payload: product,
});


const RM_FROM_CART = (product: ShoeType) => ({
  type: "RM_FROM_CART",
  payload: product,
});

const PREVIEW = (product: ShoeType, info:ShoeInfo) => {
  if(info){
    if(info.key==='QTY'){
      product.qty = info.value
    } else {
      product.size = info.value
    }
  }
  return({
    type: "PREVIEW",
    payload: product,
  })
};

export { PREVIEW, RM_FROM_CART, ADD_TO_CART, SIDEBAR_IS_SHOWN};
