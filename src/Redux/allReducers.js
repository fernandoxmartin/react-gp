import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { filterReducer } from "./filterReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  filters: filterReducer,
});
