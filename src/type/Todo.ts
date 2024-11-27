interface Todo {
  id: string;
  text: string;
  dueDate: Date | null;
  completed: boolean;
}

export default Todo;