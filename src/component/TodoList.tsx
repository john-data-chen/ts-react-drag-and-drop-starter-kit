import TodoCard from "./TodoCard";
import Todo from "../type/Todo";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string, dueDate: Date | null) => void;
}

const TodoList = ({
  todos,
  toggleComplete,
  deleteTodo,
  editTodo,
}: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
