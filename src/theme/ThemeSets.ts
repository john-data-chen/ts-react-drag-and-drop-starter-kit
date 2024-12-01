import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    max-width: 1000px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    text-align: center;
    position: relative;
  }
`;

export const lightTheme = {
  body: '#f7f7f7',
  text: '#333',
  background: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

export const darkTheme = {
  body: '#333',
  text: '#fff',
  background: '#444',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)'
};