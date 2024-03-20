import { AnyAction } from "redux";

const INITIAL_STATE = {
  shoeList: []
};

const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state, // the previous state
        shoeList:[...state.shoeList,action.payload] // shoeList now recieve what was in it and the new object
      }
    }
    case "RM_FROM_CART": {
      return state
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
