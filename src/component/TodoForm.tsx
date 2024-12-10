import { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

interface TodoFormProps {
  addTodo: (text: string, dueDate: Date | null) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (input.trim()) {
        addTodo(input, dueDate);
        setInput("");
        setDueDate(null);
      }
    },
    [input, setInput, dueDate, setDueDate, addTodo]
  );

  const { t } = useTranslation();

  return (
    <form className="addTodoForm" onSubmit={handleSubmit}>
      <input
        className="addTodoInput"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t("todo-form.todo-input")}
        required
      />
      <div className="addTaskWrapper">
        <DatePicker
          minDate={new Date()}
          selected={dueDate}
          onChange={(date: Date | null) => {
            setDueDate(date);
          }}
          placeholderText={t("todo-form.due-date")}
          dateFormat="yyyy/MM/d"
          className="addTaskDatePicker"
        />
        <motion.button
          className="addTaskButton"
          type="submit"
          disabled={!input.trim()}
          whileHover={{ scale: 1.3 }}
          whileTap={input.trim() ? { scale: 0.8 } : { scale: 1 }}
        >
          {t("todo-form.add-button")}
        </motion.button>
      </div>
      <p className="draggableHint">{t("draggable-hint")}</p>
    </form>
  );
};

export default TodoForm;
