import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-size: 16px;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    // theme switching transition
    transition: background-color 1s ease;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
    padding: 1rem;
    @media (min-width: 500px) {
      padding: 1rem;
    }
    @media (min-width: 768px) {
      padding: 1.5rem;
    }
    @media (min-width: 1024px) {
      padding: 2rem;
    }
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
