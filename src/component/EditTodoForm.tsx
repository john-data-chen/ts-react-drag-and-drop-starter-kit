import { useState, useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Todo from "../type/Todo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "motion/react";

interface EditFormProps {
  todo: Todo;
  editTodo: (id: string, text: string, dueDate: Date | null) => void;
  closeEditForm: () => void;
}

const EditTodoForm = ({ todo, editTodo, closeEditForm }: EditFormProps) => {
  const { t } = useTranslation();
  const [text, setText] = useState(todo.text);
  const [dueDate, setDueDate] = useState<Date | null>(
    todo.dueDate ? new Date(todo.dueDate) : null
  );

  useEffect(() => {
    setText(todo.text);
    setDueDate(todo.dueDate ? new Date(todo.dueDate) : null);
  }, [todo]);

  const minDate = useMemo(() => new Date(), []);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (text.trim()) {
        try {
          await editTodo(todo.id, text, dueDate);
          setText("");
          setDueDate(null);
          closeEditForm();
        } catch (error) {
          console.error("Failed to update todo:", error);
          // Optionally, display an error message to the user
        }
      }
    },
    [text, dueDate, todo, setText, setDueDate, editTodo, closeEditForm]
  );

  return (
    <form
      className="editForm"
      data-testid="editForm"
      onSubmit={handleSubmit}
      aria-label="Edit Todo Form"
    >
      <input
        className="editTaskInput"
        data-testid="editTaskInput"
        aria-label={t("edit-todo-form.todo-input")}
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder={t("edit-todo-form.todo-input")}
        required
      />
      <DatePicker
        minDate={minDate}
        selected={dueDate}
        onChange={(date: Date | null) => setDueDate(date)}
        dateFormat="yyyy/MM/d"
        placeholderText={t("edit-todo-form.due-date")}
        className="EditTaskDatePicker"
        data-testid="EditTaskDatePicker"
        aria-label={t("edit-todo-form.due-date")}
      />
      <div className="editTaskButtonWrapper">
        <motion.button
          className="button saveEditButton"
          data-testid="saveEditButton"
          aria-label={t("edit-todo-form.save-button")}
          onClick={handleSubmit}
          disabled={!text.trim()}
          whileHover={text.trim() ? { scale: 1.2 } : { scale: 1 }}
          whileTap={text.trim() ? { scale: 0.8 } : { scale: 1 }}
        >
          {t("edit-todo-form.save-button")}
        </motion.button>
        <motion.button
          className="button cancelEditButton"
          data-testid="cancelEditButton"
          aria-label={t("edit-todo-form.cancel-button")}
          onClick={closeEditForm}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {t("edit-todo-form.cancel-button")}
        </motion.button>
      </div>
    </form>
  );
};

export default EditTodoForm;
