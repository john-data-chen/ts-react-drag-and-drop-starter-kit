import { ThemeProvider } from "styled-components";
import TodoForm from "./component/TodoForm";
import { lightTheme, darkTheme, GlobalStyles } from "./theme/ThemeSets";
import { DragDropContext } from "@hello-pangea/dnd";
import LanguageSelector from "./component/LanguageSelector";
import { useLanguage } from "./hooks/useLanguage";
import ThemeToggle from "./component/ThemeToggle";
import { useTheme } from "./hooks/useTheme";
import { useTodos } from "./hooks/useTodos";
import TodoDragDropList from "./component/TodoDragDropList";
import AppTitle from "./component/AppTitle";

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
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
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
    </ThemeProvider>
  );
}

export default App;
