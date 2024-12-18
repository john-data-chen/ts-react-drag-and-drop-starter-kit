import TodoForm from "./component/TodoForm";
import { DragDropContext } from "@hello-pangea/dnd";
import LanguageSelector from "./component/LanguageSelector";
import useLanguage from "./hooks/useLanguage";
import ThemeToggle from "./component/ThemeToggle";
import useTheme from "./hooks/useTheme";
import useTodos from "./hooks/useTodos";
import TodoDragDropList from "./component/TodoDragDropList";
import AppTitle from "./component/AppTitle";
import ThemeWrapper from "./component/ThemeWrapper";
import Toast from "./component/Toast";

function App() {
  const {
    todos,
    handleAddTodo,
    handleDragEndTodos,
    handleToggleComplete,
    handleDeleteTodo,
    handleEditTodo,
  } = useTodos();
  const { isDarkMode, handleSwitchTheme } = useTheme();
  const { languageCode, handleLanguageChange } = useLanguage();

  return (
    <ThemeWrapper>
      <Toast />
      <div className="appContainer">
        <div className="topContainer">
          <ThemeToggle
            switchTheme={handleSwitchTheme}
            isDarkMode={isDarkMode}
          />
          <LanguageSelector
            selectedLanguage={languageCode}
            onChangeLang={handleLanguageChange}
          />
        </div>
        <AppTitle />
        <TodoForm addTodo={handleAddTodo} />
        <DragDropContext onDragEnd={handleDragEndTodos}>
          <TodoDragDropList
            todos={todos}
            handleToggleComplete={handleToggleComplete}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
          />
        </DragDropContext>
      </div>
    </ThemeWrapper>
  );
}

export default App;
