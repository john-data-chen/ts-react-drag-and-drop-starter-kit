import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import Todo from "./type/Todo";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";

const AppStyle = createGlobalStyle`
  body {
  font-family: 'Arial', sans-serif;
    background-color: #f0f4f8;
    margin: 0;
    padding: 0;
}
    `;

const Container = styled.div`
  max-width: 1000px;
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
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: `${Date.now()}${Math.random().toString(36).substring(5)}`,
      text: "1",
      dueDate: null,
      completed: true,
    },
    {
      id: `${Date.now()}${Math.random().toString(36).substring(5)}`,
      text: "2",
      dueDate: null,
      completed: false,
    },
    {
      id: `${Date.now()}${Math.random().toString(36).substring(5)}`,
      text: "3",
      dueDate: null,
      completed: true,
    },
  ]);

  const addTodo = (text: string, dueDate: Date | null) => {
    setTodos([
      ...todos,
      {
        id: `${Date.now()}${Math.random().toString(36).substring(5)}`,
        text,
        dueDate: dueDate ?? null,
        completed: false,
      },
    ]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onDragEnd = (event: DropResult) => {
    const { source, destination } = event;
    if (!destination) return;
    const newTodos = [...todos];
    const [removed] = newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, removed);
    setTodos(newTodos);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <AppStyle />
        <Title>Todo List</Title>
        <TodoForm addTodo={addTodo} />
        <Droppable droppableId="drop-id">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((item, i) => (
                <div key={item.id}>
                  <Draggable draggableId={item.id} index={i} key={item.id}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {
                          <TodoList
                            todos={[item]}
                            key={item.id}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                          />
                        }
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default App;
