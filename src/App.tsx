import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import Todo, { FakeData } from "./type/Todo";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";
import { useTranslation } from "react-i18next";

const AppStyle = createGlobalStyle`
  body {
  font-family: 'Arial', sans-serif;
    background-color: #f0f4f8;
    margin: 0;
    padding: 0;
}
    `;

const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const SelectLanguage = styled.select`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 1rem;
`;

function App() {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || FakeData)
  );

  const addTodo = function (text: string, dueDate: Date | string | null) {
    setTodos([
      ...todos,
      {
        id: `${Date.now()}${Math.random().toString(36).substring(5)}`,
        text,
        dueDate,
        completed: false,
      },
    ]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onDragEnd = (event: DropResult) => {
    const { source, destination } = event;
    if (!destination) return;
    const newTodos = [...todos];
    const [removed] = newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, removed);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <Container>
      <SelectLanguage defaultValue={i18n.language} onChange={onChangeLang}>
        {i18n.languages.map((code) => (
          <option key={code} value={code}>
            {code.toUpperCase()}
          </option>
        ))}
      </SelectLanguage>
      <DragDropContext onDragEnd={onDragEnd}>
        <AppStyle />
        <Title>{t("app-title")}</Title>
        <TodoForm addTodo={addTodo} />
        <p>{t("draggable-hint")}</p>
        <Droppable droppableId="drop-id">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((item, i) => (
                <div key={item.id}>
                  <Draggable draggableId={item.id} index={i} key={item.id}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {
                          <TodoList
                            todos={[item]}
                            key={item.id}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                          />
                        }
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default App;
