import { createSlice } from "@reduxjs/toolkit";
import { DEMOTASKS } from "../constants/constants";
import Todo from "../type/Todo";

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = JSON.parse(
  localStorage.getItem("todos") || DEMOTASKS
);
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
