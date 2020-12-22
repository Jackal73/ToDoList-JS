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

 // Add functions - 'todo list container' (add, edit, and delete)
function itemToDelete(item) {
  if (item.classList.contains("fa-trash") || item.id === "trash") {
    const todoLiElem = item.closest("li");
    todoLiElem.classList.remove("bounceIn");
    todoLiElem.classList.add("bounceOutDown");

    setTimeout(() => {
      todoLiElem.remove();
    }, 1000);

    deleteDataFromLocalStorage(item);
  }
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
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

function displayDataFromLocalStorage() {
  const todoArr = JSON.parse(localStorage.getItem("todos"));
  for (const todo of todoArr) {
    displayTodoDOM(todo);
  }
}

function deleteDataFromLocalStorage(item) {
  const todoArr = JSON.parse(localStorage.getItem("todos"));
  const todoLiElem = item.closest("li");

  const todoItemLeft = todoArr.filter(todo => todoLiElem.textContent.trim() !== todo
  );

  localStorage.setItem("todos", JSON.stringify(todoItemLeft));

  // console.log(todoItemInput);
}

// Add event listeners
document.addEventListener("DOMContentLoaded", displayDataFromLocalStorage);

todoListContainer.addEventListener("click", (e) => {
  itemToDelete(e.target);
})

formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputTodo = todoInputElem.value;
  if(!inputTodo) {
    alert("Please enter a 'todo' item!");
  } else {
    displayTodoDOM(inputTodo);
    storeToLocalStorage(inputTodo);
  }
  formElem.reset();
});
