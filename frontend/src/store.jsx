import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import {
  allReportsReducer,
  newReportReducer,
  reportDetailsReducer,
  reportReducer,
} from "./reducers/reportReducer";

const reducer = combineReducers({
  user: userReducer,
  newReport: newReportReducer,
  reportDetails: reportDetailsReducer,
  allReports: allReportsReducer,
  report: reportReducer,
  userDetails: userDetailsReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;