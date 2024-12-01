interface Todo {
  id: string;
  text: string;
  dueDate: Date | string | null;
  completed: boolean;
}

export default Todo;