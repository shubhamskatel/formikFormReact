import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./reducers/userDataSlice";

export const store = configureStore({
  reducer: {
    totalData: userDataSlice,
  },
});
