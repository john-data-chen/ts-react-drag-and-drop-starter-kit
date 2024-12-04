import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});