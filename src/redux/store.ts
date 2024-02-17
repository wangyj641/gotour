import { combineReducers } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { configureStore } from "@reduxjs/toolkit";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (buildGetDefaultMiddleware) => [
    ...buildGetDefaultMiddleware(),
    actionLog,
  ],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
