import styled from "styled-components";
import Todo from "../type/Todo";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import { motion } from "motion/react";

const Text = styled.span<{ $completed: boolean }>`
  flex: 1;
  font-size: 1.2rem;
  color: ${(props) => (props.$completed ? "#b0b0b0" : "#333")};
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
`;

const CompleteButton = styled(motion.button)<{
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

interface TodoCardProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  handleEditTodo: (id: string, text: string, dueDate: Date | null) => void;
}

const TodoCard = ({
  todo,
  toggleComplete,
  deleteTodo,
  handleEditTodo,
}: TodoCardProps) => {
  const [isEditingOpen, setIsEditingOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <motion.li className="todoItem" key={todo.id} whileHover={{ scale: 1.1 }}>
      <Text $completed={todo.completed}>{todo.text}</Text>
      <Text $completed={todo.completed}>
        {t("todo-card.due-date")}
        {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : "None"}
      </Text>

      <CompleteButton
        $completed={todo.completed}
        onClick={() => toggleComplete(todo.id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {todo.completed ? t("todo-card.completed") : t("todo-card.complete")}
      </CompleteButton>
      <motion.button
        className="editTaskButton"
        onClick={() => setIsEditingOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {t("todo-card.edit")}
      </motion.button>
      {isEditingOpen && (
        <EditTodoForm
          todo={todo}
          editTodo={handleEditTodo}
          closeEditForm={() => setIsEditingOpen(false)}
        />
      )}
      <motion.button
        className="deleteTaskButton"
        onClick={() => deleteTodo(todo.id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {t("todo-card.delete")}
      </motion.button>
    </motion.li>
  );
};

export default TodoCard;
