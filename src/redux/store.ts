import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "./localStorageMiddleware";
import themeReducer from "./themeSlice";
import languageReducer from "./languageSlice";
import todoReducer from "./todoSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  todos: todoReducer,
});

const getInitialState = () => ({
  theme: {
    mode: (localStorage.getItem("theme") as "dark" | "light") || "dark",
    language: (localStorage.getItem("i18nextLng") as "en" | "de") || "en",
    todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  },
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitialState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
