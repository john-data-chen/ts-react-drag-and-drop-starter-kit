import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import themeReducer from "./themeSlice";
import languageReducer from "./languageSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer,
    language: languageReducer,
  },
});

export default store;
