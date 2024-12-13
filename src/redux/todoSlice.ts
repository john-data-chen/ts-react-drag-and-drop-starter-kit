import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEMOTASKS } from "../constants/constants";
import Todo from "../type/Todo";

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem("todos") || DEMOTASKS),
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ text: string; dueDate: string | null }>
    ) => {
      state.todos = [
        ...state.todos,
        {
          id: `${Date.now()}`,
          text: action.payload.text,
          dueDate: action.payload.dueDate || null,
          completed: false,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    handleDragEnd: (state, action) => {
      state.todos = action.payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    editTodo: (
      state,
      action: PayloadAction<{
        id: string;
        text: string;
        dueDate: string | null;
      }>
    ) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
          todo.dueDate = action.payload.dueDate;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, handleDragEnd, toggleComplete, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
