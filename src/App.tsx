import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
  body {
  font-family: 'Arial', sans-serif;
    background-color: #f0f4f8;
    margin: 0;
    padding: 0;
}
    `;

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Build a todo app",
      completed: false,
    },
    {
      id: 3,
      text: "Deploy to production",
      completed: false,
    },
  ]);

  return (
    <Container>
      <AppStyle />
      <Title>Todo List</Title>
    </Container>
  );
}

export default App;
