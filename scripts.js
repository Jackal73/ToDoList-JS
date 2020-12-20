const formElem = document.getElementById('form');
const todoInputElem = document.getElementById('todoInput');
const todoListContainer = document.querySelector('.todo_list');

// Add functions - Display 'todo list'
function displayTodoDOM(todo) {
  const liElem = document.createElement("li");
  liElem.classList.add('bounceIn');
  liElem.innerHTML = `
    <span class="text">${todo}</span>
    <div class="options">
        <span id="check"><i class="fa fa-check"></i></span>
        <span id="edit"><i class="fa fa-edit"></i></span>
        <span id="trash"><i class="fa fa-trash"></i></span>
    </div>
  `;
  todoListContainer.appendChild(liElem);
}

// Add functions - 'local storage'
function storeToLocalStorage(todo) {
  let todoArr;
  if (localStorage.getItem("todos") === null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(localStorage.getItem("todos"));
  }
  todoArr.push(todo);
  localStorage.setItem("todos",JSON.stringify(todoArr));
}

function displayDataFromLocalStorage() {
  const todoArr = JSON.parse(localStorage.getItem("todos"));
  for (const todo of todoArr) {
    displayTodoDOM(todo);
  }
}









// Add event listener
formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputTodo = todoInputElem.value;
  if(!inputTodo) {
    alert("Please enter a 'todo' item!");
  } else {
    displayTodoDOM(inputTodo);
    storeToLocalStorage(inputTodo);
  }
});
