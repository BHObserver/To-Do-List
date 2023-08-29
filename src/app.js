// app.js
import './style.css';
import isValidInput from './inputValidation';
import updateLocalStorage from './localStorage';
import { updateStatus, clearCompletedTasks } from './statusUpdates';
import updateIndex from './updateIndex';
import removeTask from './removeTask';
import addTask from './addTask';

export default function initApp() {
  const list = document.querySelector('ul');
  const input = document.querySelector('input');
  const clearCompletedButton = document.querySelector('.clear-completed');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let savedHTML = localStorage.getItem('savedHTML') || '';

  document.addEventListener('DOMContentLoaded', () => {
    list.innerHTML = savedHTML;
  });

  function handleListClick(event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('fa-trash')) {
      const parentElement = clickedElement.closest('li');
      const newTasks = removeTask(parentElement, tasks);
      tasks = newTasks;
      parentElement.style.opacity = 0;
      setTimeout(() => {
        parentElement.remove();
        savedHTML = list.innerHTML;
        updateLocalStorage(tasks, savedHTML);
        updateIndex();
      }, 500);
    } else if (clickedElement.classList.contains('done')) {
      const parentElement = clickedElement.closest('li');
      const index = parseInt(parentElement.dataset.index, 10);
      const todoItem = parentElement.querySelector('.todo-item');
      if (todoItem) {
        todoItem.style.textDecoration = clickedElement.checked ? 'line-through' : 'none';
        todoItem.style.color = clickedElement.checked ? 'gray' : 'black';
      }
      tasks[index - 1].complete = clickedElement.checked;
      updateStatus(index - 1, clickedElement.checked);
    }
    event.stopPropagation();
  }

  list.addEventListener('click', handleListClick);

  function createListItem(value) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input class="done" type="checkbox">
            <input class='todo-item' type="text" value="${value}" />
            <span><i class="fa fa-trash" aria-hidden="true"></i></span>`;
    return listItem;
  }

  function handleInputKeyPress(event) {
    if (event.key === 'Enter') {
      const { value } = input;

      if (isValidInput(value)) {
        const newTasks = addTask(value, tasks);
        tasks = newTasks;
        addTask(value, tasks);
        const listItem = createListItem(value);
        list.appendChild(listItem);
        input.value = '';
        savedHTML += listItem.outerHTML;
        updateLocalStorage(tasks, savedHTML);
        updateIndex();
      } else {
        console.log('Invalid input. Special characters and dashes are not allowed.');
      }
    }
  }
  input.addEventListener('keypress', handleInputKeyPress);

  function handleUpdateDescription(event) {
    const clickedElement = event.target;
    if (event.key === 'Enter') {
      const updatedDescription = clickedElement.value;
      const parentElement = clickedElement.closest('li');
      const targetInput = parentElement.querySelector('.todo-item');
      const index = parseInt(parentElement.dataset.index, 10);
      tasks[index - 1].description = updatedDescription;
      targetInput.setAttribute('value', updatedDescription);
      savedHTML = list.innerHTML;
      updateLocalStorage(tasks, savedHTML);
    }
  }

  list.addEventListener('keypress', handleUpdateDescription);

  function handleClearCompleted() {
    const completedTasks = list.querySelectorAll('.done:checked');
    completedTasks.forEach((task) => {
      const parentElement = task.closest('li');
      const index = parseInt(parentElement.dataset.index, 10);
      parentElement.remove();
      tasks.splice(index - 1, 1);
      savedHTML = list.innerHTML;
      updateLocalStorage(tasks, savedHTML);
      updateIndex();
    });

    clearCompletedTasks();
  }
  clearCompletedButton.addEventListener('click', handleClearCompleted);
}
