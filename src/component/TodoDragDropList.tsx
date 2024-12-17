import { memo } from "react";
import Todo from "../type/Todo";
import TodoList from "./TodoList";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface TodoDragDropListProps {
  todos: Todo[];
  handleToggleComplete: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleEditTodo: (id: string, text: string, dueDate: Date | null) => void;
}

const TodoDragDropList = memo(
  ({
    todos,
    handleToggleComplete,
    handleDeleteTodo,
    handleEditTodo,
  }: TodoDragDropListProps) => {
    return (
      <Droppable droppableId="drop-id" data-testid="dragDropList">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, i) => (
              <Draggable
                draggableId={todo.id}
                index={i}
                key={todo.id}
                data-testid={`draggable-${todo.id}`}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <TodoList
                      todos={[todo]}
                      toggleComplete={handleToggleComplete}
                      deleteTodo={handleDeleteTodo}
                      handleEditTodo={handleEditTodo}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
);

export default TodoDragDropList;
