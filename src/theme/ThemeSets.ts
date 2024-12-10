import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  // App styles
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-size: 16px;
    line-height: 1.5;
    // theme switching transition
    transition: background-color 1s ease;
  }

  .appContainer {
    width: 100%;
    max-width: 480px;
    padding: 1rem;
  }

  .appTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 2rem;
  margin-bottom: 1rem;
  }

  .languageSelector {
    position: absolute;
    height: 2rem;
    top: 0;
    right: 0;
  }

  .draggableHint {
    font-size: 1rem;
    margin-top: 10px;
  }

  .themeSwitcher {
    position: absolute;
    height: 2rem;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.buttonBackground};
  }

  // TodoForm styles
  .addTodoForm {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .addTodoInput {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
    margin-left: 40px;
    font-size: 1rem;
  }

  .addTaskButton {
    background-color: #1890ff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #096dd9;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .addTaskDatePicker {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 1rem;
  }

  // TodoCard styles
  .todoItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    span {
      text-align: left;
    }

    &:hover {
      background-color: #e6f7ff;
    }
  }

  .taskTextWrapper {
    flex: 1;
    font-size: 1.2rem;
    color: #333;
    text-decoration: none;
  }

  .taskTextWrapper.completed {
    text-decoration: line-through;
    color: #999;
  }

  .completeTaskButton {
    background-color: #52c41a;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #389e0d;
    }
  }

  .incompleteTaskButton {
    background-color: #1890ff;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #096dd9;
    }
  }

  .deleteTaskButton {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff7875;
    }
  }

  .editTaskButton {
    background-color: #512da8;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #6f42c1;
    }
  }

  // EditTodoForm styles
  .EditTaskDatePicker {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .editFormContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .editTaskInput {
    width: 80%;
    height: 1.5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .editFormWrapper {
    display: flex;
    justify-content: flex-end;
  }

  .saveEditButton {
    background-color: #007bff;
    margin-left: 1rem;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .cancelButton {
    background-color: #dc3545;
    margin-left: 1rem;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const lightTheme = {
  body: "#f7f7f7",
  text: "#333",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
  buttonBackground: "#FFDF00",
};

export const darkTheme = {
  body: "#333",
  text: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
  buttonBackground: "#FFF44F",
};
