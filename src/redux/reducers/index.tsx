import { combineReducers } from "redux";

type ActionType = {
  type: string;
  payload?: boolean; // may change according to future actions
};

const sideBarReducer = (state = { isShown: false }, action: ActionType) => {
  // action may have anyAction as type if it's necessary
  switch (action.type) {
    case "SIDEBAR_IS_SHOWN": {
      return {
        isShown: !state.isShown,
      };
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({ sideBarReducer });
