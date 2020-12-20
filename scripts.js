const formElem = document.getElementById('form');
const todoInputElem = document.getElementById('todoInput');
const todoListContainer = document.querySelector('.todo_list');







// Add event listener
formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputTodo = todoInputElem.value;
  if(!inputTodo) {
    alert("Please enter a 'todo' item!");
  } else {
    displayTodoDom(inputTodo);
  }
  console.log(inputTodo);
});
