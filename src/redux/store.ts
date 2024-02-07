import { combineReducers } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
//import { thunk } from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { configureStore, Tuple } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
});

//const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
