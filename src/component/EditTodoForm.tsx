import { useState, useCallback } from "react";
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

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (text.trim()) {
        editTodo(todo.id, text, dueDate);
        setText("");
        setDueDate(null);
        closeEditForm();
      }
    },
    [text, dueDate, todo, setText, setDueDate, editTodo, closeEditForm]
  );
  return (
    <form className="editForm" data-testid="editForm" onSubmit={handleSubmit}>
      <input
        className="editTaskInput"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t("edit-todo-form.todo-input")}
        required
      />
      <DatePicker
        minDate={new Date()}
        selected={dueDate}
        onChange={(date: Date | null) => setDueDate(date)}
        dateFormat="yyyy/MM/d"
        placeholderText={t("edit-todo-form.due-date")}
        className="EditTaskDatePicker"
      />
      <div className="editTaskButtonWrapper">
        <motion.button
          className="editTaskButton"
          onClick={handleSubmit}
          disabled={!text.trim()}
          whileHover={text.trim() ? { scale: 1.2 } : { scale: 1 }}
          whileTap={text.trim() ? { scale: 0.8 } : { scale: 1 }}
        >
          {t("edit-todo-form.save-button")}
        </motion.button>
        <motion.button
          className="editTaskButton cancelButton"
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
