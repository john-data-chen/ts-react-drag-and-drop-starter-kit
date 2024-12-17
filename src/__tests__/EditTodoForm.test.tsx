import { render, fireEvent } from "@testing-library/react";
import EditTodoForm from "./../component/EditTodoForm";
import Todo from "../type/Todo";
import { DEMO_TASKS } from "../constants/constants";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("EditTodoForm", () => {
  const mockTodo: Todo = DEMO_TASKS[0];

  const mockEditTodo = jest.fn();
  const mockCloseEditForm = jest.fn();

  test("test_initialization_with_todo_data", () => {
    const { getByTestId } = render(
      <EditTodoForm
        todo={mockTodo}
        editTodo={mockEditTodo}
        closeEditForm={mockCloseEditForm}
      />
    );

    const textInput = getByTestId("editTaskInput") as HTMLInputElement;

    expect(textInput.value).toBe(mockTodo.text);
  });

  test("test_prevent_empty_submission", () => {
    const { getByTestId } = render(
      <EditTodoForm
        todo={mockTodo}
        editTodo={mockEditTodo}
        closeEditForm={mockCloseEditForm}
      />
    );

    const textInput = getByTestId("editTaskInput") as HTMLInputElement;
    const saveButton = getByTestId("saveEditButton");

    fireEvent.change(textInput, { target: { value: " " } });
    expect(saveButton).toBeDisabled();
  });
});
