import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  // normalize and reset
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    line-height: 1.5;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  // app styles
  .appContainer {
    padding: 1rem;
    // based on small screen layout
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
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
    width: 6rem;
    background-color: ${({ theme }) => theme.switchColor};
}

  .languageSelector {
    height: 2rem;
    width: 6rem;
  }

  .appTitle {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  // TodoFrom styles
  .addTodoForm {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .addTodoInput {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
    text-align: center;
  }

  .addTaskDatePicker {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 1rem;
    text-align: center;
  }

  .button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  .addTaskButton {
    extend: .button;
    width: 5rem;
    margin-bottom: 1rem;
    background-color: #1890ff;
    &:hover {
      background-color: #096dd9;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .draggableHint {
    text-align: left;
    margin-bottom: 1rem;
  }

  // TodoCard styles
  .todoItem {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
  }

  .todoText {
    margin-bottom: 0.5rem;
  }

  .dueDateWrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .dueDateTitle {
    margin-right: 0.5rem;
  }

  .completedTask {
    text-decoration: line-through;
    color: gray;
  }

  .todoButtonsWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: auto;
  }

  .incompleteTaskButton {
    @extend .button;
    margin-right: 1rem;
    background-color: #1890ff;
    &:hover {
      background-color: #096dd9;
    }
  }

  .completeTaskButton {
    @extend .button;
    margin-right: 1rem;
    background-color: #52c41a;
    &:hover {
      background-color: #73d13d;
    }
  }

  .editTaskButton {
    @extend .button;
    margin-right: 1rem;
    background-color: #512da8;
    &:hover {
      background-color: #6f42c1;
    }
  }

  .deleteTaskButton {
    @extend .button;
    background-color: red;
    &:hover {
      background-color: #ff7875;
    }
  }

// EditTodoForm styles
  .editForm {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 60%;
    left: 50%;
    width: 105%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 3px solid #FFBF00;
    border-radius: 4px;
    padding: 1rem;
    z-index: 10;
  }

  .editTaskInput {
    flex-grow: 1;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    margin-top: auto;
    margin-bottom: 1rem;
    height: 2rem;
    width: 100%;
    font-size: 1rem;
  }

  .EditTaskDatePicker {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    height: 2rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .editTaskButtonWrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1rem;
  }

  .saveEditButton {
    @extend .button;
    background-color: #1890ff;
    margin-right: 1rem;
    &:hover {
      background-color: #096dd9;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .cancelEditButton {
    @extend .button;
    margin-right: 0;
    background-color: red;
    &:hover {
      background-color: #ff7875;
    }
  }

  .fixLongText {
    word-break: break-all;
    word-wrap: break-word;
  }

  .Toastify__toast {
    width: 50%;
  }

  // Responsive styles
  // Mobile devices with bigger than 400px width
  @media (min-width: 401px) and (max-width: 768px) {
    body {
      font-size: 16px;
    }
    .appContainer {
      max-width: 600px;
    }
  }

  // Tablets
  @media (min-width: 769px) and (max-width: 1200px) {
    body {
      font-size: 18px;
    }
    .appContainer  {
      max-width: 1000px;
    }
    .Toastify__toast {
      width: var(--toastify-toast-width);
    }
  }

  // Large screens
  @media (min-width: 1201px) {
    body {
      font-size: 20px;
    }

    .appContainer  {
      max-width: 1200px;
    }

    .themeSwitcher {
      width: 6rem;
    }

    .languageSelector {
      width: 6rem;
    }

    .Toastify__toast {
      width: var(--toastify-toast-width);
    }
  }
`

export const lightTheme = {
  backgroundColor: '#f7f7f7',
  textColor: '#333',
  switchColor: '#FFC000'
}

export const darkTheme = {
  backgroundColor: '#333',
  textColor: '#B2BEB5',
  switchColor: '#FAFA33'
}
