var todos = ["item 1", "item 2", "item 3"];

// 1 - Display todos.
function displayTodos() {
  console.log("My todos:", todos);
}

// 2 - Add todos.
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

// 3 - Change todos.
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// 4 - Delete todos.
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
