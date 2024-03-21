import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import sideBarReducer from "./reducers/sideBarReducer";
import cartReducer from "./reducers/cartReducer";
import previewReducer from "./reducers/previewReducer";

const rootReducer = combineReducers({sideBarReducer,cartReducer,previewReducer})

export const store = createStore(rootReducer);

