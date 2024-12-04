import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import Todo from "./type/Todo";
import { lightTheme, darkTheme, GlobalStyles } from "./theme/ThemeSets";
import { LANGUAGES } from "./constants/constants";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  handleDragEnd,
  toggleComplete,
  deleteTodo,
} from "./redux/todoReducer";

const Title = styled.h1`
  font-size: 2.5rem;
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

const ThemeSwitch = styled.button`
  position: absolute;
  top: 20px;
  right: 160px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.buttonBackground};
`;

const DraggableHint = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;

interface todosSelectorProps {
  todos: Todo[];
}

function App() {
  const todosSelector = useSelector(
    (state: { todos: todosSelectorProps }) => state.todos
  );
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng") || "en"
  );
  const storeTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storeTheme || "dark");
  const isDarkMode = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  const handleAddTodo = (text: string, dueDate: Date | null) => {
    const dueDateStr = dueDate ? dueDate.toISOString() : null;
    dispatch(addTodo({ text, dueDate: dueDateStr }));
  };

  const onDragEnd = (event: DropResult) => {
    const { source, destination } = event;
    if (!destination) return;
    const newTodos = [...todosSelector.todos];
    const [removed] = newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, removed);
    dispatch(handleDragEnd(newTodos));
  };

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const { i18n, t } = useTranslation();
  const onChangeLang = (lang_code: string) => {
    i18n.changeLanguage(lang_code);
    setSelectedLanguage(lang_code);
    localStorage.setItem("i18nextLng", lang_code);
  };
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage);
  }, [i18n, selectedLanguage]);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ThemeSwitch onClick={toggleTheme}>
        {isDarkMode ? "Light 🌞" : "Dark 🌜"}
      </ThemeSwitch>
      <GlobalStyles />
      <SelectLanguage
        defaultValue={selectedLanguage}
        onChange={(e) => onChangeLang(e.target.value)}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </SelectLanguage>
      <DragDropContext onDragEnd={onDragEnd}>
        <Title>{t("app-title")}</Title>
        <TodoForm addTodo={handleAddTodo} />
        <DraggableHint>{t("draggable-hint")}</DraggableHint>
        <Droppable droppableId="drop-id">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todosSelector.todos.map((item: Todo, i: number) => (
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
                            toggleComplete={handleToggleComplete}
                            deleteTodo={handleDeleteTodo}
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
    </ThemeProvider>
  );
}

export default App;
