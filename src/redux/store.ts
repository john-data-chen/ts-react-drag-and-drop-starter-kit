import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "./localStorageMiddleware";
import themeReducer from "./themeSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
});

const getInitialState = () => ({
  theme: {
    mode: (localStorage.getItem("theme") as "dark" | "light") || "light",
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
