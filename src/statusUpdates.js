// statusUpdates.js
export function updateStatus(index, completed) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (index >= 0 && index < tasks.length) {
    tasks[index].complete = completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

export function clearCompletedTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const newTasks = tasks.filter((task) => !task.complete);

  localStorage.setItem('tasks', JSON.stringify(newTasks));
}
