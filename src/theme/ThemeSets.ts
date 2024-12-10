import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  // normalize and reset
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    // theme switching transition
    transition: background-color 2s ease;
    transition: color 2s ease;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    touch-action: manipulation;
  }

  // app styles
  .appContainer {
    padding: 2rem;
  }

  .topContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .themeSwitcher {
    flex-basis: auto;
    flex-grow: auto;
    margin-bottom: 1rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.buttonBackground};
}
  .languageSelector {
    flex-basis: auto;
    flex-grow: auto;
    height: 2rem;
  }

  .appTitle {
    text-align: center;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  // TodoFrom styles
  .addTodoForm {
    display: flex;
    flex-direction: column;
  }

  .addTodoInput {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    height: 2rem;
    margin: 0.5rem;
  }

  .addTaskWrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .addTaskDatePicker {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0 4px 4px 0;
    height: 2rem;
    margin: 0.5rem;
  }

  .addTaskButton {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 2rem;
    margin: 0.5rem;
    background-color: #1890ff;
    color: white;
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

  .draggableHint {
    font-size: 1rem;
    margin: 0.5rem;
    text-align: center;
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
