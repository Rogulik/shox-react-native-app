import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "./src/redux/slice";

export const store = configureStore({
  reducer: {
    shopping: shoppingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
