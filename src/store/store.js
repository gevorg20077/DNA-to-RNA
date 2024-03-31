import { configureStore } from "@reduxjs/toolkit";
import { valueRNAReducer } from "./slices/valueRNA/valueRNA";

const store = configureStore({
  reducer: {
    valueRNA: valueRNAReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
})

export default store