import { useState, useCallback } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TodoForm.css";

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

const Button = styled.button`
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

interface TodoFormProps {
  addTodo: (text: string, dueDate: Date | string | null) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (input.trim()) {
        addTodo(input.trim(), dueDate);
        setInput("");
      }
      const todos = JSON.parse(localStorage.getItem("todos") || "[]");

      const newTodo = {
        id: `${Date.now()}${Math.random().toString(36).substring(5)}`,
        text: input.trim(),
        dueDate: dueDate?.toLocaleDateString() || null,
        completed: false,
      };
      todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [addTodo, input, setInput, dueDate]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input Tasks..."
        autoFocus
      />
      <DatePicker
        minDate={new Date()}
        selected={dueDate}
        onChange={(date: Date | null) => {
          setDueDate(date);
        }}
        placeholderText="Due Date"
        dateFormat="yyyy-MM-dd"
        className="datepicker"
      />
      <Button type="submit" disabled={!input.trim()}>
        Add Task
      </Button>
    </Form>
  );
};

export default TodoForm;
