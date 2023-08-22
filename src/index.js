/* import './style.css';

const list = document.querySelector('ul');
const input = document.querySelector('input');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let savedHTML = localStorage.getItem('savedHTML') || '';

function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('savedHTML', savedHTML);
}

document.addEventListener('DOMContentLoaded', () => {
  list.innerHTML = savedHTML;
});

class Task {
  constructor(description, complete, index) {
    this.description = description;
    this.complete = complete;
    this.index = index;
  }
}

const addTask = () => {
  const { value } = input;
  tasks.push(new Task(value, false, tasks.length + 1));
};

let currentIndex = tasks.length + 1;

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
    const listItem = document.createElement('li');
    listItem.dataset.index = currentIndex;
    listItem.innerHTML = `<input class="done" type="checkbox">
            <input class='todo-item' type="text" value="${input.value}" />
            <span><i class="fa fa-trash" aria-hidden="true"></i></span>`;
    list.appendChild(listItem);
    input.value = '';
    currentIndex += 1;

    savedHTML += listItem.outerHTML;
    updateLocalStorage();
  }
});

list.addEventListener('click', (event) => {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('fa-trash')) {
    const parentElement = clickedElement.closest('li');
    const index = parseInt(parentElement.dataset.index, 10);
    parentElement.style.opacity = 0;
    setTimeout(() => {
      parentElement.remove();
      tasks.splice(index - 1, 1);
      savedHTML = list.innerHTML;
      updateLocalStorage();
    }, 500);
  } else if (clickedElement.classList.contains('done')) {
    const parentElement = clickedElement.closest('li');
    const index = parseInt(parentElement.dataset.index, 10);
    const todoItem = parentElement.querySelector('.todo-item');
    if (todoItem) {
      todoItem.style.textDecoration = clickedElement.checked ? 'line-through' : 'none';
    }
    tasks[index - 1].complete = clickedElement.checked;
    updateLocalStorage();
  }
  event.stopPropagation();
});
 */