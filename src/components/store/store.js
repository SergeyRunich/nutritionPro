import { createStore, combineReducers } from "redux";
import orderReducer from "./orderReducer";

let mainReducers = combineReducers({
  orders: orderReducer,
});

const store = createStore(mainReducers);

export default store;
