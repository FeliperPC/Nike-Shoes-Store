import { AnyAction } from "redux";
import { SHOE_LIST } from "../../data";

const INITIAL_STATE = {
  shoe :  SHOE_LIST[0]
};

const previewReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch(action.type){
    case 'PREVIEW': {
      return(
        {shoe : action.payload}
      )
    }
    default : {
      return state
    }
  }
};

export default previewReducer;
