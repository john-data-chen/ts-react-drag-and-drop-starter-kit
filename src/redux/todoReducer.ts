import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
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
      console.log("state", current(state));
      state.todos = [
        ...state.todos,
        {
          id: `${Date.now()}${Math.random().toString(36).substring(5)}`,
          text: action.payload.text,
          dueDate: action.payload.dueDate,
          completed: false,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
