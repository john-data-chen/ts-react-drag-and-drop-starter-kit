import AppTitle from './component/AppTitle'
import LanguageSelector from './component/LanguageSelector'
import ThemeToggle from './component/ThemeToggle'
import ThemeWrapper from './component/ThemeWrapper'
import Toast from './component/Toast'
import TodoDragDropList from './component/TodoDragDropList'
import TodoForm from './component/TodoForm'
import useLanguage from './hooks/useLanguage'
import useTheme from './hooks/useTheme'
import useTodos from './hooks/useTodos'
import { DragDropContext } from '@hello-pangea/dnd'

function App() {
  const {
    todos,
    handleAddTodo,
    handleDragEndTodos,
    handleToggleComplete,
    handleDeleteTodo,
    handleEditTodo
  } = useTodos()
  const { isDarkMode, handleSwitchTheme } = useTheme()
  const { languageCode, handleLanguageChange } = useLanguage()

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
  )
}

export default App
