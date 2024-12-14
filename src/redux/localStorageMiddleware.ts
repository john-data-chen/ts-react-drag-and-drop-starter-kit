import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { switchTheme } from "./themeSlice";
import { changeLanguage } from "./languageSlice";
import {
  addTodo,
  editTodo,
  deleteTodo,
  handleDragEnd,
  toggleComplete,
} from "./todoSlice";

export const listenerMiddleware = createListenerMiddleware();

const themeChange = isAnyOf(switchTheme);
const languageChange = isAnyOf(changeLanguage);
const tasksChange = isAnyOf(
  addTodo,
  editTodo,
  deleteTodo,
  handleDragEnd,
  toggleComplete
);

listenerMiddleware.startListening({
  matcher: themeChange,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState() as { theme: string };
    localStorage.setItem("theme", state.theme);
  },
});
