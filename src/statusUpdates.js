import updateLocalStorage from './localStorage';

// statusUpdates.js
export function updateStatus(index, completed) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const savedHTML = localStorage.getItem('savedHTML') || '';

  if (index >= 0 && index < tasks.length) {
    tasks[index].complete = completed;
    updateLocalStorage(tasks, savedHTML);
  }
}

export function clearCompletedTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const savedHTML = localStorage.getItem('savedHTML') || '';
  const newTasks = tasks.filter((task) => !task.complete);
  updateLocalStorage(newTasks, savedHTML);
}
