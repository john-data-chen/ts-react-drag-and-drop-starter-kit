import TodoCard from "./TodoCard";
import Todo, { FakeData } from "../type/Todo";
import { useCallback } from "react";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleComplete, deleteTodo }: TodoListProps) => {
  const storageTodos = JSON.parse(localStorage.getItem("todos") || FakeData);
  const handleToggleComplete = useCallback(
    (id: string) => {
      toggleComplete(id);
      const updatedStoredTodo = storageTodos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedStoredTodo));
    },
    [storageTodos, toggleComplete]
  );
  const handleDeleteTodo = useCallback(
    (id: string) => {
      deleteTodo(id);
      const deletedStoredTodo = storageTodos.filter(
        (todo: Todo) => todo.id !== id
      );
      localStorage.setItem("todos", JSON.stringify(deletedStoredTodo));
    },
    [deleteTodo, storageTodos]
  );
  return (
    <ul>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          toggleComplete={handleToggleComplete}
          deleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
