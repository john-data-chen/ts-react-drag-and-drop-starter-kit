import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer,
  },
});
