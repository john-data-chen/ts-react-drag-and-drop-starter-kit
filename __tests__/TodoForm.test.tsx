import TodoForm from '../src/component/TodoForm'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}))

describe('TodoForm', () => {
  const mockAddTodo = jest.fn()

  beforeEach(() => {
    mockAddTodo.mockClear()
  })

  it('test_submit_valid_todo_without_date', async () => {
    render(<TodoForm addTodo={mockAddTodo} />)

    const input = screen.getByTestId('addTodoInput')
    const submitButton = screen.getByTestId('addTaskButton')

    fireEvent.change(input, { target: { value: 'Test todo' } })
    fireEvent.click(submitButton)

    expect(mockAddTodo).toHaveBeenCalledWith('Test todo', null)
  })

  it('test_submit_button_is_disabled', async () => {
    render(<TodoForm addTodo={mockAddTodo} />)

    const input = screen.getByTestId('addTodoInput')
    const submitButton = screen.getByTestId('addTaskButton')

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.click(submitButton)

    expect(mockAddTodo).not.toHaveBeenCalled()
    expect(submitButton).toBeDisabled()
  })
})
