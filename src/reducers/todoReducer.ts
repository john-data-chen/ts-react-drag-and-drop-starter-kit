import { createSlice } from '@reduxjs/toolkit';
import Todo from '../type/Todo';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') || '') : [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: { payload: Todo }) {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleComplete(state, action: { payload: string }) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    deleteTodo(state, action: { payload: string }) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;