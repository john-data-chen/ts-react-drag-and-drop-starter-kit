import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todoReducer.ts";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
