// app.js
import isValidInput from './inputValidation';
import Task from './task';
import updateLocalStorage from './localStorage';

export default function initApp() {
  const list = document.querySelector('ul');
  const input = document.querySelector('input');

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let savedHTML = localStorage.getItem('savedHTML') || '';

  document.addEventListener('DOMContentLoaded', () => {
    list.innerHTML = JSON.parse(savedHTML);
  });

  let currentIndex = tasks.length + 1;

  function handleListClick(event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('fa-trash')) {
      // ... (existing code for removing the task)
    } else if (clickedElement.classList.contains('done')) {
      // ... (existing code for marking task as done)
    }
    event.stopPropagation();
  }

  list.addEventListener('click', handleListClick);

  function addTask() {
    const { value } = input;
    tasks.push(new Task(value, false, tasks.length + 1));
  }

  function createListItem(value) {
    const listItem = document.createElement('li');
    listItem.dataset.index = currentIndex;
    listItem.innerHTML = `<input class="done" type="checkbox">
            <input class='todo-item' type="text" value="${value}" />
            <span><i class="fa fa-trash" aria-hidden="true"></i></span>`;
    return listItem;
  }

  function handleInputKeyPress(event) {
    if (event.key === 'Enter') {
      const { value } = input;

      if (isValidInput(value)) {
        addTask();
        const listItem = createListItem(value);
        list.appendChild(listItem);
        input.value = '';
        currentIndex += 1;
        savedHTML += listItem.outerHTML;
        updateLocalStorage(tasks, savedHTML);
      } else {
        console.log('Invalid input. Special characters and dashes are not allowed.');
      }
    }
  }
  input.addEventListener('keypress', handleInputKeyPress);
}
