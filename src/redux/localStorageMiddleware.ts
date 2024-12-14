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
import Todo from "../type/Todo";

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

listenerMiddleware.startListening({
  matcher: languageChange,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState() as { language: { code: string } };
    localStorage.setItem("i18nextLng", state.language.code);
  },
});

listenerMiddleware.startListening({
  matcher: tasksChange,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState() as { tasks: { list: Todo[] } };
    localStorage.setItem("tasks", JSON.stringify(state.tasks.list));
  },
});
