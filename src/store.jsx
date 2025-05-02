import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { listingListReducer } from "./reducers/listingReducers";
import { modalReducer } from "./reducers/modalReducer";

const reducer = combineReducers({
  listingList: listingListReducer,
  modal: modalReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
