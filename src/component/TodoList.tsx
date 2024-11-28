import TodoCard from "./TodoCard";
import Todo from "../type/Todo";
import { useCallback } from "react";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleComplete, deleteTodo }: TodoListProps) => {
  const storagedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const handleToggleComplete = useCallback(
    (id: string) => {
      toggleComplete(id);
      const updatedStoredTodos = storagedTodos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedStoredTodos));
    },
    [storagedTodos, toggleComplete]
  );
  const handleDeleteTodo = useCallback(
    (id: string) => {
      deleteTodo(id);
    },
    [deleteTodo]
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
