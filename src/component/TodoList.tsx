import { memo } from "react";
import TodoCard from "./TodoCard";
import Todo from "../type/Todo";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  handleEditTodo: (id: string, text: string, dueDate: Date | null) => void;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  handleEditTodo: (id: string, text: string, dueDate: Date | null) => void;
}

const TodoList = memo(
  ({ todos, toggleComplete, deleteTodo, handleEditTodo }: TodoListProps) => {
    return (
      <ul
        className="todoList"
        data-testid="todoList"
        aria-label="Todo items list"
      >
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}
      </ul>
    );
  }
);

export default TodoList;
