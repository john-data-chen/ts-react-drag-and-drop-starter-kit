import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { addTodo, handleDragEnd, toggleComplete, deleteTodo, editTodo } from '../redux/todoSlice'
import { DropResult } from '@hello-pangea/dnd'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

const useTodos = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const handleAddTodo = (text: string, dueDate: Date | null) => {
    const dueDateStr = dueDate ? dueDate.toISOString() : null
    dispatch(addTodo({ text, dueDate: dueDateStr }))
    toast.success(t('toast.add-success'))
  }

  const handleDragEndTodos = (event: DropResult) => {
    const { source, destination } = event
    if (!destination) return

    const newTodos = [...todos]
    const [removed] = newTodos.splice(source.index, 1)
    newTodos.splice(destination.index, 0, removed)
    dispatch(handleDragEnd(newTodos))
  }

  const handleToggleComplete = (id: string) => dispatch(toggleComplete(id))
  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id))
    toast.success(t('toast.delete-success'))
  }

  const handleEditTodo = (id: string, text: string, dueDate: Date | null) => {
    const dueDateStr = dueDate ? dueDate.toISOString() : ''
    dispatch(editTodo({ id, text, dueDate: dueDateStr }))
    toast.success(t('toast.edit-success'))
  }

  return {
    todos,
    handleAddTodo,
    handleDragEndTodos,
    handleToggleComplete,
    handleDeleteTodo,
    handleEditTodo
  }
}

export default useTodos
