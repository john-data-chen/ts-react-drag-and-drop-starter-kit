import Todo from "../type/Todo";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import { motion } from "motion/react";

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
    <motion.li className="todoItem" key={todo.id} whileHover={{ scale: 0.85 }}>
      <span className={`taskTextWrapper ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>
      <span className={`taskTextWrapper ${todo.completed ? "completed" : ""}`}>
        {t("todo-card.due-date")}{" "}
        {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : "None"}
      </span>
      <motion.button
        className={
          todo.completed ? "completeTaskButton" : "incompleteTaskButton"
        }
        onClick={() => toggleComplete(todo.id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {todo.completed ? t("todo-card.completed") : t("todo-card.complete")}
      </motion.button>
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
