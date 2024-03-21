import { AnyAction } from "redux";
import { CardListType } from "../../types";

const INITIAL_STATE : CardListType = {
  shoeList: [] 
};

const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if(state.shoeList.some((item)=>item.id === action.payload.id)){
        return state
      }
      return {
        ...state, // the previous state
        shoeList:[...state.shoeList,action.payload] // shoeList now recieve what was in it and the new object
      }
    }
    case "RM_FROM_CART": {
      const updatedList = state.shoeList.filter((item)=> {
        return item.id !== action.payload.id
      })
      return {
        ...state,
        shoeList:updatedList
      }
    }
    case "ADD_INFO": {
      return {
        ...state,
        shoeList:[...state.shoeList,action.payload]
      }
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
