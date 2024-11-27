import styled from "styled-components";
import Todo from "../type/Todo";

interface TodoItemProps extends React.HTMLAttributes<HTMLLIElement> {
  dueDate: Date | null;
  completed: boolean;
}

const TodoItem = styled.li<TodoItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6f7ff;
  }
`;

interface TodoCardProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  completed: boolean;
}

const Text = styled.span<TextProps>`
  flex: 1;
  font-size: 1.2rem;
  color: ${(props) => (props.completed ? "#b0b0b0" : "#333")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  completed?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.completed ? "#52c41a" : "#1890ff")};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-left: 10px;

  &:hover {
    background-color: ${(props) => (props.completed ? "#52c41a" : "#096dd9")};
  }
`;

const TodoCard = ({ todo, toggleComplete, deleteTodo }: TodoCardProps) => {
  return (
    <TodoItem completed={todo.completed} dueDate={todo.dueDate}>
      <Text completed={todo.completed}>{todo.text}</Text>
      <br />
      <Text completed={todo.completed}>
        Due Date: {todo.dueDate?.toLocaleDateString() || "None"}
      </Text>

      <Button
        completed={todo.completed}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.completed ? "Completed" : "Complete"}
      </Button>
      <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
    </TodoItem>
  );
};

export default TodoCard;
