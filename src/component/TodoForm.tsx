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
    [input, dueDate, addTodo]
  );

  const { t } = useTranslation();

  return (
    <form className="addTodoForm" onSubmit={handleSubmit}>
      <motion.input
        className="addTodoInput"
        data-testid="addTodoInput"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t("todo-form.todo-input")}
        required
        aria-label={t("todo-form.todo-input")}
        initial={{ width: "0", x: "50vw" }}
        animate={{ width: "100%", x: 0 }}
        transition={{ duration: 1, origin: 1 }}
      />
      <DatePicker
        minDate={new Date()}
        selected={dueDate}
        onChange={(date: Date | null) => {
          try {
            if (date && isNaN(date.getTime())) {
              throw new Error("Invalid date selected");
            }
            setDueDate(date);
          } catch (error) {
            console.error("Date selection error:", error);
            setDueDate(null);
          }
        }}
        placeholderText={t("todo-form.due-date")}
        dateFormat="yyyy/MM/d"
        className="addTaskDatePicker"
        data-testid="addTaskDatePicker"
        aria-label={t("todo-form.due-date")}
      />
      <motion.button
        className="addTaskButton fixLongText"
        data-testid="addTaskButton"
        type="submit"
        disabled={!input.trim()}
        aria-label={t("todo-form.add-button")}
        whileHover={input.trim() ? { scale: 1.2 } : { scale: 1 }}
        whileTap={input.trim() ? { scale: 0.8 } : { scale: 1 }}
      >
        {t("todo-form.add-button")}
      </motion.button>
      <h2 className="draggableHint">{t("draggable-hint")}</h2>
    </form>
  );
};

export default TodoForm;
