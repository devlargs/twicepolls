import { configureStore } from "@reduxjs/toolkit";
import { pollsReducer as polls } from "./pollsState";

export default configureStore({
  reducer: {
    polls,
  },
});
