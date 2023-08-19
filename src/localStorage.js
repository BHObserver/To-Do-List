// localStorage.js
export default function updateLocalStorage(tasks, savedHTML) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('savedHTML', JSON.stringify(savedHTML));
}
