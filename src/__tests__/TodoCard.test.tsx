import { render, fireEvent } from "@testing-library/react";
import TodoCard from "./../component/TodoCard";
import Todo from "../type/Todo";
import { DEMO_TASKS } from "../constants/constants";

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
    const { getByTestId } = render(
      <TodoCard
        todo={mockTodo}
        toggleComplete={toggleCompleteMock}
        deleteTodo={deleteTodoMock}
        handleEditTodo={handleEditTodoMock}
      />
    );

    const incompleteTaskButton = getByTestId(
      mockTodo.completed ? "completeTaskButton" : "incompleteTaskButton"
    );
    fireEvent.click(incompleteTaskButton);
    expect(toggleCompleteMock).toHaveBeenCalledWith(mockTodo.id);

    const completeTaskButton = getByTestId(
      mockTodo.completed ? "completeTaskButton" : "incompleteTaskButton"
    );
    fireEvent.click(completeTaskButton);
    expect(toggleCompleteMock).toHaveBeenCalledWith(mockTodo.id);
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
