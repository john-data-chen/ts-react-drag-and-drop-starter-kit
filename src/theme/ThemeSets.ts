import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
  width: 100%;
  height: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // theme switching transition
    transition: background-color 1s ease;
    transition: color 1s ease;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    min-height: 100vh;
    padding: 1rem;
    @media (min-width: 480px) {
      padding: 1.5rem;
    }
    @media (min-width: 768px) {
      padding: 2rem;
    }
  }

#root {
  width: 100%; /* 撐滿螢幕寬度 */
  height: 100%; /* 撐滿螢幕高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

  .appContainer {
    padding: 1rem;
  }

  .languageSelector {
    position: absolute;
    height: 2rem;
    width: 5rem;
    margin: 1rem;
    top: 0;
    right: 0;
  }

  .themeSwitcher {
    position: absolute;
    height: 2rem;
    width: 5rem;
    margin: 1rem;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.buttonBackground};
  }

  .appTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .draggableHint {
    font-size: 1rem;
    margin-top: 10px;
  }

  // TodoForm styles
  .addTodoForm {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
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
  buttonBackground: "#FFDF00",
};

export const darkTheme = {
  body: "#333",
  text: "#fff",
  buttonBackground: "#FFF44F",
};
