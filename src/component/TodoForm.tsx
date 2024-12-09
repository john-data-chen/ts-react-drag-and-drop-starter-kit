import { useState, useCallback } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 40px;
  font-size: 1rem;
`;

const Button = styled(motion.button)`
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #096dd9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const InputWrapper = styled(motion.div)`
  position: relative;
  display: inline-block;
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 8px;
  border: 3px solid #1890ff;
  pointer-events: none;
`;

interface TodoFormProps {
  addTodo: (text: string, dueDate: Date | null) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [isFocused, setIsFocused] = useState(false);

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
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("todo-form.todo-input")}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
        />
        {!isFocused && <GlowEffect layoutId="glow-effect" />}
      </InputWrapper>
      <DatePicker
        minDate={new Date()}
        selected={dueDate}
        onChange={(date: Date | null) => {
          setDueDate(date);
        }}
        placeholderText={t("todo-form.due-date")}
        dateFormat="yyyy/MM/d"
        className="AddTaskDatePicker"
      />
      <Button
        type="submit"
        disabled={!input.trim()}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8 }}
      >
        {t("todo-form.add-button")}
      </Button>
    </Form>
  );
};

export default TodoForm;
