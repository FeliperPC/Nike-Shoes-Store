import { AnyAction } from "redux";

const INITIAL_STATE = {
  shoeList: [
    {
      id: 0,
      src: "",
      className: "",
      title: "",
      description: "",
      price: 0,
    },
  ],
};

const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if(state.shoeList.some((item) => item === action.payload)){
    return state;
  } 
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state.shoeList, action.payload];  
    }
    case "RM_FROM_CART": {
      break;
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
