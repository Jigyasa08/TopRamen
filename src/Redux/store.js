import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "../Components/Dashboard/DashboardRedux/reducer";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
