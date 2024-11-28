import styled from "styled-components";
import Todo from "../type/Todo";

interface TodoCardProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

// styled components
const TodoItem = styled.li`
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

const Text = styled.span<{ $completed: boolean }>`
  flex: 1;
  font-size: 1.2rem;
  color: ${(props) => (props.$completed ? "#b0b0b0" : "#333")};
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
`;

const CompleteButton = styled.button<{
  $completed: boolean;
}>`
  background-color: ${(props) => (props.$completed ? "#52c41a" : "#1890ff")};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-left: 10px;

  &:hover {
    background-color: ${(props) => (props.$completed ? "#52c41a" : "#096dd9")};
  }
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7875;
  }
`;

const TodoCard = ({ todo, toggleComplete, deleteTodo }: TodoCardProps) => {
  return (
    <TodoItem key={todo.id}>
      <Text $completed={todo.completed}>{todo.text}</Text>
      <Text $completed={todo.completed}>
        Due Date:{" "}
        {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : "None"}
      </Text>

      <CompleteButton
        $completed={todo.completed}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.completed ? "Completed" : "Complete"}
      </CompleteButton>
      <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
    </TodoItem>
  );
};

export default TodoCard;
