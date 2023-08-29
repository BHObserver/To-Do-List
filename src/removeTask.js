/* export default function removeTask(
  parentElement,
  tasks,
  savedHTML,
  list,
  updateLocalStorage,
  updateIndex,
) {
  const index = parseInt(parentElement.dataset.index, 10);
  parentElement.style.opacity = 0;
  setTimeout(() => {
    parentElement.remove();
    tasks.splice(index - 1, 1);
    savedHTML = list.innerHTML;
    updateLocalStorage(tasks, savedHTML);
    updateIndex();
  }, 500);
} */

export default function removeTask(parentElement, tasks) {
  const index = parseInt(parentElement.dataset.index, 10);
  const newTasks = tasks.filter((task, i) => i !== index - 1);
  return newTasks;
}