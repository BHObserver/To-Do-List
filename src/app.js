// app.js
import './style.css';
import isValidInput from './inputValidation';
import updateLocalStorage from './localStorage';
import { updateStatus, clearCompletedTasks } from './statusUpdates';
import updateIndex from './updateIndex';
import removeTask from './removeTask';
import addTask from './addTask';
import handleUpdateDescription from './updateDescription';

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
      const newTasks = updateStatus(tasks, savedHTML, index - 1, clickedElement.checked);
      tasks = newTasks;
      updateLocalStorage(newTasks, savedHTML);
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

  list.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const clickedElement = event.target;
      const parentElement = clickedElement.closest('li');
      const updatedDescription = clickedElement.value;
      const targetInput = parentElement.querySelector('.todo-item');
      handleUpdateDescription(event, tasks, parentElement);
      targetInput.setAttribute('value', updatedDescription);
      updateLocalStorage(tasks, savedHTML);
      updateIndex();
    }
  });

  function handleClearCompleted() {
    const completedTasks = list.querySelectorAll('.done:checked');
    const tasksCopy = tasks.slice(); // Create a copy of tasks array
    const { newTasks, savedHTML: updatedSavedHTML } = clearCompletedTasks(tasksCopy, savedHTML);
    tasks = newTasks; // Update tasks reference to the newTasks array

    completedTasks.forEach((task) => {
      const parentElement = task.closest('li');
      /* const index = parseInt(parentElement.dataset.index, 10); */
      parentElement.remove();
    });

    savedHTML = updatedSavedHTML; // Update savedHTML with the updated value
    updateLocalStorage(tasks, savedHTML);
    updateIndex();

    clearCompletedTasks(tasks, savedHTML);
  }
  clearCompletedButton.addEventListener('click', handleClearCompleted);
}
