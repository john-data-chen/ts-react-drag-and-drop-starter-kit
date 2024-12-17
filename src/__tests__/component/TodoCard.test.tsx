import { render, fireEvent } from "@testing-library/react";
import TodoCard from "../../component/TodoCard";
import Todo from "../../type/Todo";
import { DEMO_TASKS } from "../../constants/constants";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("TodoCard Component", () => {
  const mockTodos: Todo[] = DEMO_TASKS;
  const mockTodo = mockTodos[0];
  const toggleCompleteMock = jest.fn();
  const deleteTodoMock = jest.fn();
  const handleEditTodoMock = jest.fn();

  test("test_toggle_complete_status", () => {
    const { getByTestId, rerender } = render(
      <TodoCard
        todo={mockTodo}
        toggleComplete={toggleCompleteMock}
        deleteTodo={deleteTodoMock}
        handleEditTodo={handleEditTodoMock}
      />
    );
    const completeTaskToggle = getByTestId("completeTaskToggle");
    expect(completeTaskToggle).toHaveTextContent("todo-card.complete");
    fireEvent.click(completeTaskToggle);
    expect(toggleCompleteMock).toHaveBeenCalledWith(mockTodo.id);
    rerender(
      <TodoCard
        todo={{ ...mockTodo, completed: true }}
        toggleComplete={toggleCompleteMock}
        deleteTodo={deleteTodoMock}
        handleEditTodo={handleEditTodoMock}
      />
    );
    expect(completeTaskToggle).toHaveTextContent("todo-card.completed");
    fireEvent.click(completeTaskToggle);
    rerender(
      <TodoCard
        todo={{ ...mockTodo, completed: false }}
        toggleComplete={toggleCompleteMock}
        deleteTodo={deleteTodoMock}
        handleEditTodo={handleEditTodoMock}
      />
    );
    expect(completeTaskToggle).toHaveTextContent("todo-card.complete");
  });

  test("test_edit_form_toggle", () => {
    const { getByTestId, queryByTestId } = render(
      <TodoCard
        todo={mockTodo}
        toggleComplete={toggleCompleteMock}
        deleteTodo={deleteTodoMock}
        handleEditTodo={handleEditTodoMock}
      />
    );

    const editButton = getByTestId("editTaskButton");
    fireEvent.click(editButton);

    expect(queryByTestId("editForm")).toBeInTheDocument();
  });

  test("test_delete_todo", () => {
    const { getByTestId } = render(
      <TodoCard
        todo={mockTodo}
        toggleComplete={toggleCompleteMock}
        deleteTodo={deleteTodoMock}
        handleEditTodo={handleEditTodoMock}
      />
    );

    const deleteButton = getByTestId("deleteTaskButton");
    fireEvent.click(deleteButton);

    expect(deleteTodoMock).toHaveBeenCalledWith(mockTodo.id);
  });
});
