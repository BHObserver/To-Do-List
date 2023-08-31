export default function removeTask(parentElement, tasks) {
  const index = parseInt(parentElement.dataset.index, 10);
  const newTasks = tasks.filter((task, i) => i !== index - 1);
  return newTasks;
}