import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "./localStorageMiddleware";
import themeReducer from "./themeSlice";
import languageReducer from "./languageSlice";
import todoReducer from "./todoSlice";
import { DEMO_TASKS } from "../constants/constants";

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  todos: todoReducer,
});

const todosInLocalStorage = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos") as string).todos
  : DEMO_TASKS;

const getInitialState = () => ({
  theme: {
    mode: (localStorage.getItem("theme") as "dark" | "light") || "light",
  },
  language: {
    code: (localStorage.getItem("i18nextLng") as "en" | "de") || "en",
  },
  todos: {
    todos: todosInLocalStorage,
  },
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getInitialState(),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().prepend(listenerMiddleware.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
