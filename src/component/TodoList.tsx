import TodoCard from "./TodoCard";
import Todo from "../type/Todo";
import { useCallback } from "react";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleComplete, deleteTodo }: TodoListProps) => {
  const handleToggleComplete = useCallback(
    (id: string) => {
      toggleComplete(id);
    },

    [toggleComplete]
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
