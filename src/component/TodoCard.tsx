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
    <motion.li
      whileTap={{
        scale: 1.05,
        opacity: 1,
        backgroundColor: "#FFF8DC",
      }}
      className="todoItem"
      data-testid="todoItem"
      key={todo.id}
    >
      <span className={todo.completed ? "completedTask" : ""}>
        <h3
          className="todoText fixLongText"
          data-testid={`todoId: ${todo.id}`}
          aria-label={`todo title: ${todo.text}`}
        >
          {todo.text}
        </h3>
        <span className="dueDateWrapper">
          <h4
            className="dueDateTitle"
            data-testid="dueDateTitle"
            aria-label={t("todo-card.due-date")}
          >
            {t("todo-card.due-date")}
          </h4>
          <p
            className="dueDate fixLongText"
            data-testid="dueDate"
            aria-label={
              todo.dueDate
                ? new Date(todo.dueDate).toLocaleDateString()
                : "None"
            }
          >
            {todo.dueDate
              ? new Date(todo.dueDate).toLocaleDateString()
              : "None"}
          </p>
        </span>
      </span>
      <span className="todoButtonsWrapper">
        <motion.button
          className={
            "button fixLongText" + (todo.completed ? " completeTaskButton" : "")
          }
          data-testid="completeTaskButton"
          aria-label={
            todo.completed ? t("todo-card.completed") : t("todo-card.complete")
          }
          onClick={() => toggleComplete(todo.id)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {todo.completed ? t("todo-card.completed") : t("todo-card.complete")}
        </motion.button>
        <motion.button
          className="button editTaskButton fixLongText"
          data-testid="editTaskButton"
          aria-label={t("todo-card.edit")}
          onClick={() => setIsEditingOpen(true)}
          whileHover={{ scale: 1.2 }}
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
          className="button deleteTaskButton fixLongText"
          data-testid="deleteTaskButton"
          aria-label={t("todo-card.delete")}
          onClick={() => deleteTodo(todo.id)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {t("todo-card.delete")}
        </motion.button>
      </span>
    </motion.li>
  );
};

export default TodoCard;
