import { memo, useMemo } from "react";
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

const TodoCard = memo(
  ({ todo, toggleComplete, deleteTodo, handleEditTodo }: TodoCardProps) => {
    const [isEditingOpen, setIsEditingOpen] = useState(false);
    const { t } = useTranslation();

    const completedText = useMemo(() => t("todo-card.completed"), [t]);
    const completeText = useMemo(() => t("todo-card.complete"), [t]);
    const editText = useMemo(() => t("todo-card.edit"), [t]);
    const deleteText = useMemo(() => t("todo-card.delete"), [t]);
    const dueDateText = useMemo(() => t("todo-card.due-date"), [t]);

    const formattedDate = useMemo(() => {
      return todo.dueDate
        ? new Date(todo.dueDate).toLocaleDateString()
        : "None";
    }, [todo.dueDate]);

    const buttonMotionProps = {
      whileHover: { scale: 1.2 },
      whileTap: { scale: 0.9 },
    };

    const cardMotionProps = {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    };

    return (
      <motion.li
        className="todoItem"
        data-testid="todoItem"
        key={todo.id}
        {...cardMotionProps}
        aria-label={`todo item: ${todo.text}`}
        role="listitem"
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
              aria-label={dueDateText}
            >
              {dueDateText}
            </h4>
            <p
              className="dueDate fixLongText"
              data-testid="dueDate"
              aria-label={formattedDate}
            >
              {formattedDate}
            </p>
          </span>
        </span>
        <span className="todoButtonsWrapper">
          <motion.button
            className={`button fixLongText${
              todo.completed ? " completeTaskButton" : ""
            }`}
            data-testid="completeTaskButton"
            aria-label={todo.completed ? completedText : completeText}
            onClick={() => toggleComplete(todo.id)}
            {...buttonMotionProps}
          >
            {todo.completed ? completedText : completeText}
          </motion.button>
          <motion.button
            className="button editTaskButton fixLongText"
            data-testid="editTaskButton"
            aria-label={editText}
            onClick={() => setIsEditingOpen(true)}
            {...buttonMotionProps}
          >
            {editText}
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
            aria-label={deleteText}
            onClick={() => deleteTodo(todo.id)}
            {...buttonMotionProps}
          >
            {deleteText}
          </motion.button>
        </span>
      </motion.li>
    );
  }
);

export default TodoCard;
