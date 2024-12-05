import { useState, useCallback } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./EditTodoForm.css";
import { useTranslation } from "react-i18next";
import Todo from "../type/Todo";

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 80%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SaveButton = styled.span`
  background-color: #007bff;
  margin-left: 1rem;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled.span`
  background-color: #dc3545;
  margin-left: 1rem;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

interface EditFormProps {
  todo: Todo;
  editTodo: (id: string, text: string, dueDate: Date | null) => void;
  onCancel: () => void;
}

const EditTodoForm = ({ todo, editTodo, onCancel }: EditFormProps) => {
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
      }
    },
    [text, dueDate, todo, setText, setDueDate, editTodo]
  );
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("edit-todo-form.todo-input")}
          autoFocus
        />
        <DatePicker
          selected={dueDate}
          minDate={new Date()}
          onChange={(date) => setDueDate(date)}
          placeholderText={t("edit-todo-form.due-date")}
          className="datepickerInEditForm"
        />
        <SaveButton onClick={handleSubmit}>
          {t("edit-todo-form.save-button")}
        </SaveButton>
        <CancelButton onClick={onCancel}>
          {t("edit-todo-form.cancel-button")}
        </CancelButton>
      </form>
    </FormContainer>
  );
};

export default EditTodoForm;
