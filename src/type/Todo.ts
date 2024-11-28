interface Todo {
  id: string;
  text: string;
  dueDate: Date | string | null;
  completed: boolean;
}

const FakeData = `[{"id":"1732777773493yllerj6b","text":"1: delete fake data before using","dueDate":"2024/11/28","completed":false},{"id":"1732777775878vnba3lt5","text":"2","dueDate":"","completed":true},{"id":"1732777800954jpxnw26l","text":"3","dueDate":"2024/11/30","completed":false}]`

export default Todo;
export { FakeData };